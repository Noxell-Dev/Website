/**
 * noxell.dev — motion system (GSAP).
 * One motion language: transform/opacity only, power3.out, 140-600ms.
 * Everything animates from the rendered state (gsap.from), so the page
 * is complete without JavaScript and under prefers-reduced-motion.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);
gsap.defaults({ ease: 'power3.out' });

const mm = gsap.matchMedia();

mm.add(
  {
    motion: '(prefers-reduced-motion: no-preference)',
    reduced: '(prefers-reduced-motion: reduce)',
  },
  (ctx) => {
    if (ctx.conditions?.reduced) return; // static page: content already visible

    // Hero entrance
    const risers = document.querySelectorAll('[data-rise]');
    if (risers.length) {
      gsap.from(risers, {
        y: 18,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.09,
        clearProps: 'all',
      });
    }

    // Terminal typewriter
    const cmd = document.querySelector<HTMLElement>('[data-type]');
    if (cmd) {
      const full = cmd.textContent ?? '';
      cmd.textContent = '';
      gsap.to(cmd, { text: full, duration: 1.3, ease: 'none', delay: 0.85 });
    }

    // Section reveals
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      gsap.from(el, {
        y: 22,
        autoAlpha: 0,
        duration: 0.6,
        clearProps: 'all',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });

    // Staggered groups (small groups only)
    document.querySelectorAll('[data-stagger]').forEach((group) => {
      gsap.from(Array.from(group.children), {
        y: 24,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.09,
        clearProps: 'all',
        scrollTrigger: { trigger: group, start: 'top 82%', once: true },
      });
    });

    // Methodology progress line draws with scroll
    const line = document.querySelector('[data-line]');
    if (line) {
      gsap.from(line, {
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: {
          trigger: line.parentElement ?? line,
          start: 'top 75%',
          end: 'bottom 55%',
          scrub: 0.5,
        },
      });
    }
  }
);
