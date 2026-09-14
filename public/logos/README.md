# Company logos

Drop each company's logo here using the exact filenames below. The homepage
"Companies I've worked with" row picks them up automatically. Until a file
exists, that company shows a clean text wordmark instead of a broken image.

| Company         | Filename                |
|-----------------|-------------------------|
| Glown           | `glown.svg`             |
| Confette        | `confette.svg`          |
| Optima AI       | `optima-ai.svg`         |
| AmanaCruise     | `amanacruise.svg`       |
| Traders College | `traders-college.svg`   |
| TM Labs         | `tm-labs.svg`           |

Notes:
- **SVG is best** (crisp at any size). PNG with a transparent background also
  works — if you send PNGs, change the extension in
  `src/components/CompanyLogos.tsx` (e.g. `glown.png`).
- Logos render in **grayscale**, brightening to full color on hover, so a
  single-color or full-color logo both look fine.
- Aim for a transparent background and roughly even visual weight.
