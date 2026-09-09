/**
 * AccordionGallery — vanilla port of the React Bits component.
 * Desktop/tablet: GSAP accordion (flex-grow, 3D tilt, parallax, captions).
 * Mobile (≤640px): static vertical card list driven by CSS — the script
 * clears its inline styles and stays out of the way.
 */
import { gsap } from 'gsap';

const EXPAND_RATIO = 0.52;
const DURATION = 0.6;
const EASE = 'power3.out';
const TILT = 8;
const PARALLAX = 0.5;
const STAGGER = 0.06;
const MOBILE_QUERY = '(max-width: 640px)';

export function initAccordionGalleries(): void {
  document
    .querySelectorAll<HTMLElement>('.accordion-gallery[data-accordion]')
    .forEach((root) => {
      const panels = Array.from(root.querySelectorAll<HTMLElement>('.ag-panel'));
      if (panels.length === 0) return;

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const mobileQuery = window.matchMedia(MOBILE_QUERY);
      const gap = parseFloat(getComputedStyle(root).gap) || 10;
      let active = Math.min(
        Math.max(Number(root.dataset.defaultIndex ?? 2), 0),
        panels.length - 1,
      );
      let mediaSize = 320;
      let isMobile = mobileQuery.matches;
      let timeline: gsap.core.Timeline | null = null;

      const applyLayout = (animate: boolean) => {
        timeline?.kill();
        const dur = animate && !reduced ? DURATION : 0;
        const tl = gsap.timeline();
        const count = panels.length;
        const grow = count > 1 ? (EXPAND_RATIO * (count - 1)) / (1 - EXPAND_RATIO) : 1;
        const tilt = root.getBoundingClientRect().width < 900 ? 5 : TILT;

        panels.forEach((panel, i) => {
          const isActive = i === active;
          const media = panel.querySelector<HTMLElement>('.ag-panel__media');
          const bar = panel.querySelector<HTMLElement>('.ag-panel__bar');
          const text = panel.querySelector<HTMLElement>('.ag-panel__text');

          const rot = isActive ? 0 : i < active ? tilt : -tilt;
          tl.to(
            panel,
            {
              flexGrow: isActive ? grow : 1,
              rotateY: rot,
              '--ag-gray': isActive ? 0 : 1,
              '--ag-dim': isActive ? 0 : 0.35,
              duration: dur,
              ease: EASE,
            },
            0,
          );

          if (media) {
            const drift = Math.max(-1.5, Math.min(1.5, active - i));
            const shift = drift * PARALLAX * mediaSize * 0.06;
            tl.to(
              media,
              {
                xPercent: -50,
                yPercent: -50,
                x: isActive ? 0 : shift,
                duration: dur,
                ease: EASE,
              },
              0,
            );
          }

          if (bar && text) {
            if (isActive) {
              tl.to(
                [bar, text],
                { opacity: 1, x: 0, duration: dur, ease: EASE, stagger: reduced ? 0 : STAGGER },
                0,
              );
            } else {
              tl.to([bar, text], { opacity: 0, x: -14, duration: dur * 0.6, ease: EASE }, 0);
            }
          }

          panel.classList.toggle('ag-panel--active', isActive);
          if (isActive) panel.setAttribute('aria-current', 'true');
          else panel.removeAttribute('aria-current');
        });

        timeline = tl;
      };

      const clearInlineStyles = () => {
        timeline?.kill();
        gsap.set(panels, { clearProps: 'flexGrow,rotateY,transform,--ag-gray,--ag-dim' });
        panels.forEach((panel) => {
          const media = panel.querySelector<HTMLElement>('.ag-panel__media');
          const bar = panel.querySelector<HTMLElement>('.ag-panel__bar');
          const text = panel.querySelector<HTMLElement>('.ag-panel__text');
          if (media) gsap.set(media, { clearProps: 'all' });
          if (bar) gsap.set(bar, { clearProps: 'opacity,x,transform' });
          if (text) gsap.set(text, { clearProps: 'opacity,x,transform' });
          panel.classList.remove('ag-panel--active');
          panel.removeAttribute('aria-current');
        });
      };

      const measure = (animate: boolean) => {
        const rect = root.getBoundingClientRect();
        const usable = Math.max(rect.width - gap * (panels.length - 1), 120);
        mediaSize = Math.max(140, usable * EXPAND_RATIO * 1.22);
        root.style.setProperty('--ag-media-size', `${mediaSize}px`);
        applyLayout(animate);
      };

      const sync = (animate: boolean) => {
        const mobileNow = mobileQuery.matches;
        if (mobileNow !== isMobile) {
          isMobile = mobileNow;
          if (isMobile) clearInlineStyles();
          else measure(false);
          return;
        }
        if (isMobile) return;
        measure(animate);
      };

      if (isMobile) clearInlineStyles();
      else measure(false);

      const ro = new ResizeObserver(() => sync(true));
      ro.observe(root);
      mobileQuery.addEventListener('change', () => sync(false));

      const setActive = (index: number) => {
        if (isMobile || index === active) return;
        active = index;
        applyLayout(true);
      };

      panels.forEach((panel, i) => {
        panel.addEventListener('mouseenter', () => setActive(i));
        panel.addEventListener('focus', () => setActive(i));
        panel.addEventListener('click', (event) => {
          if (i !== active && !isMobile) event.preventDefault();
          setActive(i);
        });
        panel.addEventListener('keydown', (event) => {
          if (isMobile) return;
          if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            event.preventDefault();
            setActive((i + 1) % panels.length);
          } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            event.preventDefault();
            setActive((i - 1 + panels.length) % panels.length);
          }
        });
      });
    });
}

initAccordionGalleries();
