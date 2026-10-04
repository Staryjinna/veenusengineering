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
for (const w of [960, 1920]) {
  await sharp(path.join(SRC, 'carousel-3.jpg')).resize({ width: w, withoutEnlargement: true }).webp({ quality: w > 1000 ? 74 : 70, effort: 5 }).toFile(path.join(ROOT, `public/images/hero-${w}.webp`));
}

fs.writeFileSync(galleryPath, JSON.stringify(gallery, null, 2) + '\n');
console.log(`Optimised ${gallery.filter((g) => g.include).length} photos + logo (${logo.width}x${logo.height})`);
