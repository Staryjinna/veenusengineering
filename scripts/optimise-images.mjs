// Reads data/gallery.json, converts every included original photo to WebP
// (max 2000px wide, never upscaled) into public/images/gallery/, and writes
// width/height + the published src back into gallery.json.
// Originals in assets/original/ are never modified.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'assets/original');
const OUT = path.join(ROOT, 'public/images/gallery');
const galleryPath = path.join(ROOT, 'data/gallery.json');
const gallery = JSON.parse(fs.readFileSync(galleryPath, 'utf8'));

fs.mkdirSync(OUT, { recursive: true });

for (const item of gallery) {
  if (!item.include) {
    delete item.src; delete item.width; delete item.height;
    continue;
  }
  const base = path.basename(item.file, path.extname(item.file));
  const name = `${item.category}-${base}.webp`;
  const info = await sharp(path.join(SRC, item.file))
    .rotate()
    .resize({ width: 2000, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(path.join(OUT, name));
  item.src = `/images/gallery/${name}`;
  item.width = info.width;
  item.height = info.height;
}

// Logo: keep transparency
const logo = await sharp(path.join(SRC, 'logo.png')).webp({ quality: 90, lossless: true }).toFile(path.join(ROOT, 'public/images/logo.webp'));
// Logo emblem only (gear + VS monogram). The full logo is 170x100, too small to keep its wordmark
// legible in the header, so the site sets the name in type next to this mark.
await sharp(path.join(SRC, 'logo.png')).extract({ left: 0, top: 11, width: 91, height: 78 }).webp({ quality: 90, lossless: true }).toFile(path.join(ROOT, 'public/images/logo-mark.webp'));

// Hero: two widths for srcset (mobile gets the small one)
for (const w of [720, 1200, 1920]) {
  await sharp(path.join(SRC, 'carousel-3.jpg')).resize({ width: w, withoutEnlargement: true }).webp({ quality: w > 1000 ? 74 : 68, effort: 5 }).toFile(path.join(ROOT, `public/images/hero-${w}.webp`));
}

// Open Graph / social share image, 1200x630 (JPEG: widest support in WhatsApp, Facebook, X)
const overlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0e1113" stop-opacity=".96"/><stop offset=".62" stop-color="#0e1113" stop-opacity=".7"/><stop offset="1" stop-color="#0e1113" stop-opacity=".15"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="64" y="470" width="150" height="6" fill="#ff6a13"/>
  <text x="64" y="300" font-family="Arial Narrow, Arial, sans-serif" font-weight="700" font-size="92" fill="#fff" letter-spacing="1">STEEL FABRICATION,</text>
  <text x="64" y="396" font-family="Arial Narrow, Arial, sans-serif" font-weight="700" font-size="92" fill="#ff6a13" letter-spacing="1">MADE TO FIT YOUR SITE.</text>
  <text x="64" y="530" font-family="Arial, sans-serif" font-size="32" fill="#d5dbe0">SS &amp; MS gates, railings, shutters and roofing</text>
  <text x="64" y="574" font-family="Arial, sans-serif" font-size="32" fill="#d5dbe0">Vaniyambadi, Tirupathur district  |  +91 90475 11368</text>
  <text x="64" y="100" font-family="Arial Narrow, Arial, sans-serif" font-weight="700" font-size="44" fill="#fff" letter-spacing="3">VEENUS ENGINEERING</text>
</svg>`);
await sharp(path.join(SRC, 'carousel-3.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).composite([{ input: overlay }]).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(ROOT, 'public/images/og.jpg'));

fs.writeFileSync(galleryPath, JSON.stringify(gallery, null, 2) + '\n');
console.log(`Optimised ${gallery.filter((g) => g.include).length} photos + logo (${logo.width}x${logo.height})`);
