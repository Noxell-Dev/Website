/**
 * SpecularButton — vanilla port of the React Bits <SpecularButton />.
 * WebGL rim light (rounded-rect SDF shader via ogl) that steers toward
 * the pointer and fades in with proximity. Without WebGL or under
 * prefers-reduced-motion the plain CSS button underneath is the fallback.
 */
import { Color, Mesh, Program, Renderer, Triangle } from 'ogl';

const PAD = 20;

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform vec2 uCenter;
uniform vec2 uHalfSize;
uniform float uRadius;
uniform float uAngle;
uniform float uPx;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform float uShineSize;
uniform float uShineFade;
uniform float uThickness;
uniform float uBaseWidth;

out vec4 fragColor;

float sdRoundedRect(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float shapeSDF(vec2 p) { return sdRoundedRect(p, uHalfSize, uRadius); }

float gaussianLine(float d, float sigma) {
  float x = d / (sigma + 1e-6);
  float k = mix(1.0, 1.6, smoothstep(0.0, 1.5, x));
  return exp(-k * x * x);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = shapeSDF(p);
  vec2 L = vec2(cos(uAngle), sin(uAngle));

  float base = (1.0 - smoothstep(0.0, uBaseWidth, abs(d))) * 0.45;

  vec2 nEll = normalize(p / (uHalfSize * uHalfSize) + 1e-6);
  float phi = acos(clamp(abs(dot(nEll, L)), 0.0, 1.0));
  float rim = 1.0 - smoothstep(uShineSize - uShineFade, uShineSize + uShineFade + 1e-4, phi);
  float line = gaussianLine(d, uThickness);
  float edgeClamp = 1.0 - smoothstep(0.5 * uPx, 3.0 * uPx, abs(d));
  float hi = line * rim * edgeClamp * uIntensity;

  vec3 col = uBaseColor * base + uLineColor * hi;
  float a = clamp(base + hi, 0.0, 1.0);
  fragColor = vec4(col, a);
}
`;

interface SpecularInstance {
  btn: HTMLElement;
  renderer: Renderer;
  program: Program;
  mesh: Mesh;
  dpr: number;
  radius: number;
  w: number;
  h: number;
  angle: number;
  idleAngle: number;
  bright: number;
  pointerAngle: number | null;
  proximityT: number;
}

export function initSpecularButtons(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const roots = Array.from(document.querySelectorAll<HTMLElement>('[data-specular]'));
  const instances: SpecularInstance[] = [];

  for (const btn of roots) {
    const fx = btn.querySelector<HTMLElement>('.spec-fx');
    if (!fx) continue;

    try {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true, dpr });
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      const geometry = new Triangle(gl);
      if (geometry.attributes.uv) delete geometry.attributes.uv;

      const program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
          uCenter: { value: [0, 0] },
          uHalfSize: { value: [1, 1] },
          uRadius: { value: 0 },
          uAngle: { value: 2.4 },
          uPx: { value: dpr },
          uLineColor: { value: [1, 1, 1] },
          uBaseColor: { value: [0.25, 0.04, 0.04] },
          uIntensity: { value: 1 },
          uShineSize: { value: (10 * Math.PI) / 180 },
          uShineFade: { value: (40 * Math.PI) / 180 },
          uThickness: { value: 1 },
          uBaseWidth: { value: dpr },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });
      fx.appendChild(gl.canvas);

      const instance: SpecularInstance = {
        btn,
        renderer,
        program,
        mesh,
        dpr,
        // Default 999 clamps to min(w, h) / 2 in the shader, so the SDF
        // always matches the CSS pill (border-radius: 999px) exactly.
        radius: Number(btn.dataset.radius ?? 999),
        w: 1,
        h: 1,
        angle: 2.4,
        idleAngle: 2.4,
        bright: 0,
        pointerAngle: null,
        proximityT: 0,
      };

      // Fractional size + explicit center keep the SDF pinned to the exact CSS border.
      const resize = () => {
        const rect = btn.getBoundingClientRect();
        instance.w = rect.width;
        instance.h = rect.height;
        renderer.setSize(rect.width + PAD * 2, rect.height + PAD * 2);
        program.uniforms.uCenter.value = [(PAD + rect.width / 2) * dpr, (PAD + rect.height / 2) * dpr];
        program.uniforms.uHalfSize.value = [(rect.width / 2) * dpr, (rect.height / 2) * dpr];
      };
      new ResizeObserver(resize).observe(btn);
      resize();

      instances.push(instance);
    } catch {
      // WebGL unavailable — the CSS button is the fallback.
    }
  }

  if (instances.length === 0) return;

  // One shared pointer listener feeds every instance.
  window.addEventListener('pointermove', (e: PointerEvent) => {
    for (const s of instances) {
      const rect = s.btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
      const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
      const dist = Math.hypot(dx, dy);
      if (dist === 0) {
        const nx = (e.clientX - cx) / (rect.width / 2);
        const ny = (cy - e.clientY) / (rect.height / 2);
        s.pointerAngle = Math.atan2(2 / rect.height, -2 / rect.width) + nx * 0.3 + ny * 0.15;
      } else {
        s.pointerAngle = Math.atan2(cy - e.clientY, e.clientX - cx);
      }
      const t = Math.max(0, 1 - dist / 250);
      s.proximityT = t * t * (3 - 2 * t);
    }
  });

  const lineC = new Color('#ffffff');
  const baseC = new Color('#400a0a');
  let last = performance.now();

  const update = (now: number) => {
    requestAnimationFrame(update);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    for (const s of instances) {
      s.idleAngle += 0.35 * dt;
      const target = s.pointerAngle !== null ? s.pointerAngle : s.idleAngle;
      const diff = ((target - s.angle + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      s.angle += diff * (1 - Math.exp(-dt * 7));
      s.bright += (s.proximityT - s.bright) * (1 - Math.exp(-dt * 8));

      const u = s.program.uniforms;
      u.uAngle.value = s.angle;
      u.uRadius.value = Math.min(s.radius, Math.min(s.w, s.h) / 2) * s.dpr;
      u.uLineColor.value = [lineC.r, lineC.g, lineC.b];
      u.uBaseColor.value = [baseC.r, baseC.g, baseC.b];
      u.uIntensity.value = s.bright;
      u.uThickness.value = s.dpr;
      s.renderer.render({ scene: s.mesh });
    }
  };
  requestAnimationFrame(update);
}

initSpecularButtons();
