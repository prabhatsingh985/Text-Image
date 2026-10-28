let el: HTMLDivElement | null = null;
let timer: ReturnType<typeof setTimeout> | undefined;

export function toast(message: string) {
  if (!el) {
    el = document.createElement('div');
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.className =
      'fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-surface shadow-lg transition-opacity duration-200 opacity-0 pointer-events-none';
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.remove('opacity-0');
  clearTimeout(timer);
  timer = setTimeout(() => el?.classList.add('opacity-0'), 1600);
}
