/**
 * BorderGlow — vanilla port of the React Bits <BorderGlow /> pointer logic.
 * The visual layers are pure CSS (see global.css `.border-glow-card`);
 * this only feeds --edge-proximity and --cursor-angle on pointermove.
 */
export function initBorderGlow(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-border-glow]'));
  if (cards.length === 0) return;

  for (const card of cards) {
    card.addEventListener('pointermove', (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = x - cx;
      const dy = y - cy;
      let kx = Infinity;
      let ky = Infinity;
      if (dx !== 0) kx = cx / Math.abs(dx);
      if (dy !== 0) ky = cy / Math.abs(dy);
      const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
      let deg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
      if (deg < 0) deg += 360;
      card.style.setProperty('--edge-proximity', (edge * 100).toFixed(3));
      card.style.setProperty('--cursor-angle', `${deg.toFixed(3)}deg`);
    });
  }
}

initBorderGlow();
