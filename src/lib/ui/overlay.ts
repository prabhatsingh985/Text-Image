import type { OcrLine, OcrResult } from '../ocr/types';

// Click-to-copy overlay and uncertain-word marks (PLAN.md §8.2).
// Boxes come from the deskewed image, so the whole layer is rotated back by the deskew angle.

const SVG = 'http://www.w3.org/2000/svg';
export const UNCERTAIN_BELOW = 60;

export function renderOverlay(host: HTMLElement, result: OcrResult, onLineClick: (line: OcrLine, el: SVGRectElement) => void) {
  host.querySelector('svg[data-overlay]')?.remove();
  const svg = document.createElementNS(SVG, 'svg');
  svg.dataset.overlay = '';
  svg.setAttribute('viewBox', `0 0 ${result.width} ${result.height}`);
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.setAttribute('class', 'absolute inset-0 h-full w-full');

  const g = document.createElementNS(SVG, 'g');
  if (Math.abs(result.rotateRadians) > 0.0001) {
    const deg = (-result.rotateRadians * 180) / Math.PI;
    g.setAttribute('transform', `rotate(${deg} ${result.width / 2} ${result.height / 2})`);
  }
  svg.appendChild(g);

  const pad = 2;
  for (const p of result.paragraphs) {
    for (const line of p.lines) {
      for (const w of line.words) {
        if (w.conf >= UNCERTAIN_BELOW) continue;
        const r = rect(w.box.x0 - pad, w.box.y0 - pad, w.box.x1 + pad, w.box.y1 + pad);
        r.setAttribute('class', 'pointer-events-none fill-amber-300/20 stroke-amber-500');
        r.setAttribute('stroke-dasharray', '4 3');
        r.setAttribute('vector-effect', 'non-scaling-stroke');
        g.appendChild(r);
      }
      const r = rect(line.box.x0 - pad, line.box.y0 - pad, line.box.x1 + pad, line.box.y1 + pad);
      r.setAttribute('class', 'cursor-copy fill-transparent stroke-brand-500/40 transition hover:fill-brand-500/15');
      r.setAttribute('vector-effect', 'non-scaling-stroke');
      r.setAttribute('rx', '3');
      r.setAttribute('role', 'button');
      r.setAttribute('aria-label', line.text);
      const title = document.createElementNS(SVG, 'title');
      title.textContent = line.text;
      r.appendChild(title);
      r.addEventListener('click', () => onLineClick(line, r));
      g.appendChild(r);
    }
  }
  host.appendChild(svg);
}

function rect(x0: number, y0: number, x1: number, y1: number): SVGRectElement {
  const r = document.createElementNS(SVG, 'rect');
  r.setAttribute('x', String(x0));
  r.setAttribute('y', String(y0));
  r.setAttribute('width', String(Math.max(1, x1 - x0)));
  r.setAttribute('height', String(Math.max(1, y1 - y0)));
  return r;
}

export function flash(el: Element) {
  el.classList.add('fill-emerald-400/40');
  setTimeout(() => el.classList.remove('fill-emerald-400/40'), 700);
}
