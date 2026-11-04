/**
 * The upload box shared by the file tools: click or Enter opens the file picker, files can be dropped on it.
 * Files dropped anywhere else on the page are ignored, so the browser does not navigate away from the page.
 */
export function bindDropzone(zone: HTMLElement, input: HTMLInputElement, onFiles: (files: File[]) => void) {
  zone.addEventListener('click', (e) => {
    if (!(e.target as HTMLElement).closest('label')) input.click();
  });
  zone.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target === zone) {
      e.preventDefault();
      input.click();
    }
  });
  bindFileInput(input, onFiles);

  // The depth counts nested elements: moving over a child fires dragleave on the parent.
  let depth = 0;
  zone.addEventListener('dragenter', (e) => {
    e.preventDefault();
    depth++;
    zone.dataset.over = '';
  });
  zone.addEventListener('dragleave', () => {
    if (--depth <= 0) delete zone.dataset.over;
  });
  zone.addEventListener('dragover', (e) => e.preventDefault());
  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    depth = 0;
    delete zone.dataset.over;
    onFiles([...(e.dataTransfer?.files ?? [])]);
  });
  keepDropsOnPage();
}

/** Hands the chosen files over, and clears the input so the same file can be chosen again. */
export function bindFileInput(input: HTMLInputElement, onFiles: (files: File[]) => void) {
  input.addEventListener('change', () => {
    const files = [...(input.files ?? [])];
    input.value = '';
    onFiles(files);
  });
}

let kept = false;

/** Without this, a file dropped outside the box replaces the page with that file. */
export function keepDropsOnPage() {
  if (kept) return;
  kept = true;
  window.addEventListener('dragover', (e) => e.preventDefault());
  window.addEventListener('drop', (e) => e.preventDefault());
}
