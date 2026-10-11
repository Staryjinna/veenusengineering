// Reads data/gallery.json and converts every included photo in assets/stock/ to WebP
// (max 2000px wide, never upscaled) in public/images/gallery/, writing src/width/height
// back into gallery.json. Also builds the logo variants, favicon and social share image.
// Source files in assets/ are never modified.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'assets/stock');
const IMG = path.join(ROOT, 'public/images');
const OUT = path.join(IMG, 'gallery');
const galleryPath = path.join(ROOT, 'data/gallery.json');
const gallery = JSON.parse(fs.readFileSync(galleryPath, 'utf8'));

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

for (const item of gallery) {
  if (!item.include) { delete item.src; delete item.width; delete item.height; delete item.thumb; continue; }
  const base = path.basename(item.file, path.extname(item.file));
  const name = `${item.category}-${base}.webp`;
  const info = await sharp(path.join(SRC, item.file))
    .rotate()
    .resize({ width: 2000, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(path.join(OUT, name));
  // Small version for grids and cards (the full-size file is only loaded in the viewer / heroes)
  const tname = name.replace(/\.webp$/, '-800.webp');
  const t = await sharp(path.join(SRC, item.file)).rotate().resize({ width: 800, withoutEnlargement: true }).webp({ quality: 76, effort: 5 }).toFile(path.join(OUT, tname));
  item.thumb = `/images/gallery/${tname}`;
  item.thumbWidth = t.width;
  item.thumbHeight = t.height;
  item.src = `/images/gallery/${name}`;
  item.width = info.width;
  item.height = info.height;
}
fs.writeFileSync(galleryPath, JSON.stringify(gallery, null, 2) + '\n');

// ── Logo ── (assets/brand/velan-logo.webp is a 1254x1254 square on white)
const LOGO = path.join(ROOT, 'assets/brand/velan-logo.webp');
await sharp(LOGO).resize({ width: 640 }).webp({ quality: 90 }).toFile(path.join(IMG, 'logo.webp'));
// Emblem only (the V + spark). The site sets the name in type beside it.
const MARK = { left: 300, top: 175, width: 650, height: 512 };
await sharp(LOGO).extract(MARK).resize({ height: 240 }).webp({ quality: 92 }).toFile(path.join(IMG, 'logo-mark.webp'));
await sharp(LOGO).extract(MARK).resize(200, 200, { fit: 'contain', background: '#ffffff' }).extend({ top: 28, bottom: 28, left: 28, right: 28, background: '#ffffff' }).png().toFile(path.join(ROOT, 'app/icon.png'));

// ── Hero (welder with sparks), widths for srcset ──
const hero = path.join(SRC, 'weld-sparks.jpg');
for (const w of [720, 1200, 1600]) {
  await sharp(hero).resize({ width: w, withoutEnlargement: true }).webp({ quality: 74, effort: 5 }).toFile(path.join(IMG, `hero-${w}.webp`));
}

// ── Open Graph image 1200x630 ──
const text = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="14" height="630" fill="#ef7828"/>
  <text x="64" y="330" font-family="Arial Narrow, Arial, sans-serif" font-weight="800" font-size="104" fill="#2c333a" letter-spacing="2">VELAN</text>
  <text x="64" y="420" font-family="Arial Narrow, Arial, sans-serif" font-weight="700" font-size="58" fill="#2c333a" letter-spacing="14">INDUSTRIES</text>
  <rect x="64" y="448" width="120" height="6" fill="#ef7828"/>
  <text x="64" y="510" font-family="Arial, sans-serif" font-size="32" fill="#4a5560">Steel works in Chennai: gates, railings,</text>
  <text x="64" y="552" font-family="Arial, sans-serif" font-size="32" fill="#4a5560">shutters and roofing</text>
</svg>`);
const photo = await sharp(hero).resize(560, 630, { fit: 'cover', position: 'centre' }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#ffffff' } })
  .composite([{ input: photo, left: 640, top: 0 }, { input: text }])
  .jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(IMG, 'og.jpg'));

console.log(`Optimised ${gallery.filter((g) => g.include).length} photos, logo, favicon, hero and OG image`);
