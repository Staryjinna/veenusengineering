// After `next build`: write .html redirect stubs into out/ so the old template URLs
// (/about.html etc.) keep working on plain static hosting. vercel.json handles the same on Vercel.
import fs from 'node:fs';
import path from 'node:path';
import { redirects } from './redirects.mjs';

const OUT = path.resolve(import.meta.dirname, '..', 'out');
const SITE = 'https://veenusengineering.in';

for (const [from, to] of redirects) {
  if (from === '/index.html') continue; // out/index.html is the home page itself
  const file = path.join(OUT, from.replace(/^\//, ''));
  fs.writeFileSync(
    file,
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Redirecting…</title>
<meta name="robots" content="noindex"><link rel="canonical" href="${SITE}${to}">
<meta http-equiv="refresh" content="0; url=${to}"><script>location.replace(${JSON.stringify(to)})</script></head>
<body><p>This page has moved to <a href="${to}">${to}</a>.</p></body></html>\n`,
  );
}
console.log(`Wrote ${redirects.length - 1} redirect stubs to out/`);
