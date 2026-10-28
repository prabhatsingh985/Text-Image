# OCR benchmark

The quality gate from PLAN.md §11: we do not launch until our accuracy on printed text is within
2 percentage points of the market leader.

## Layout

```
bench/
├── images/          50 test images (see the mix below)
├── ground-truth/    one .txt per image, same base name, typed by hand
└── results/         one folder per tool, e.g. results/ours/, results/imagetotext-info/
```

`results/` is git-ignored so competitor output is never committed.

## Test mix

| Type | Count |
|---|---|
| Screenshots (apps, websites, chats) | 10 |
| Phone photos of printed pages | 10 |
| Flatbed scans | 5 |
| Receipts | 5 |
| Tables | 5 |
| Non-English: ja, ko, ar, th, ru + Latin-script locales | 15 |

## Running

1. Run every image through our tool and save the text to `results/ours/<name>.txt`.
2. Do the same with imagetotext.info and jpgtotext.com (free tier).
3. `npm run bench`

The score is the character error rate (CER): edit distance divided by the length of the correct text,
after collapsing whitespace. Lower is better.
