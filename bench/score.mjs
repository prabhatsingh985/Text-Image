// Character error rate (CER) for the quality gate (PLAN.md §11).
//
//   bench/ground-truth/<name>.txt   hand-typed correct text for bench/images/<name>.*
//   bench/results/<tool>/<name>.txt  text produced by a tool (ours, imagetotext.info, …)
//
// Run: npm run bench
import { readdir, readFile } from 'node:fs/promises';
import { join, basename } from 'node:path';

const root = new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const truthDir = join(root, 'ground-truth');
const resultsDir = join(root, 'results');

const normalize = (s) => s.normalize('NFC').replace(/\s+/g, ' ').trim();

function levenshtein(a, b) {
  const prev = new Array(b.length + 1);
  const cur = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;
  for (let i = 1; i <= a.length; i++) {
    cur[0] = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    for (let j = 0; j <= b.length; j++) prev[j] = cur[j];
  }
  return prev[b.length];
}

const truthFiles = (await readdir(truthDir).catch(() => [])).filter((f) => f.endsWith('.txt'));
if (!truthFiles.length) {
  console.log('No ground truth yet. Add files to bench/ground-truth/ (see bench/README.md).');
  process.exit(0);
}
const tools = await readdir(resultsDir).catch(() => []);
if (!tools.length) {
  console.log('No results yet. Add bench/results/<tool>/<name>.txt files.');
  process.exit(0);
}

for (const tool of tools) {
  let errors = 0;
  let chars = 0;
  let missing = 0;
  for (const f of truthFiles) {
    const truth = normalize(await readFile(join(truthDir, f), 'utf8'));
    const got = await readFile(join(resultsDir, tool, f), 'utf8').catch(() => null);
    if (got === null) {
      missing++;
      continue;
    }
    errors += levenshtein(normalize(got), truth);
    chars += truth.length;
  }
  const cer = chars ? ((errors / chars) * 100).toFixed(2) : 'n/a';
  console.log(`${basename(tool).padEnd(24)} CER ${cer}%  (${truthFiles.length - missing} files${missing ? `, ${missing} missing` : ''})`);
}
