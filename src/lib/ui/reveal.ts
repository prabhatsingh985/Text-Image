const DURATION_MS = 450;
const GAP_PX = 16;

/**
 * Glides a tool's results to the top of the screen once files are added. It is animated here rather than by
 * the browser's smooth scroll, which can stop halfway when the list is redrawn while files are being read.
 * The visitor scrolling takes over at once, and reduced-motion visitors get no animation.
 */
export function revealResults(el: Element | undefined) {
  if (!el) return;
  const targetY = () => window.scrollY + el.getBoundingClientRect().top - GAP_PX;
  const jump = (top: number) => window.scrollTo({ top, behavior: 'instant' });

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    jump(targetY());
    return;
  }

  const startY = window.scrollY;
  const startTime = performance.now();
  let stopped = false;
  const stop = () => {
    stopped = true;
    window.removeEventListener('wheel', stop);
    window.removeEventListener('touchstart', stop);
  };
  window.addEventListener('wheel', stop, { passive: true });
  window.addEventListener('touchstart', stop, { passive: true });

  const frame = (now: number) => {
    if (stopped) return;
    const t = Math.min(1, (now - startTime) / DURATION_MS);
    const eased = 1 - (1 - t) ** 3;
    // The target is read every frame, as the page can change height while the list fills.
    jump(startY + (targetY() - startY) * eased);
    if (t < 1) requestAnimationFrame(frame);
    else stop();
  };
  requestAnimationFrame(frame);
}
