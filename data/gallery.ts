import raw from './gallery.json';

export type CategorySlug =
  | 'ss-gates' | 'ss-railings' | 'ms-gates' | 'ms-grills'
  | 'rolling-shutters' | 'roofing' | 'kerala-roofing' | 'ss-furniture' | 'other';

export type GalleryItem = {
  file: string;
  category: CategorySlug;
  alt: string;
  include: boolean;
  featured?: boolean;
  note?: string;
  src?: string;
  width?: number;
  height?: number;
};

export type PublishedPhoto = GalleryItem & { src: string; width: number; height: number };

export const categories: { slug: CategorySlug; label: string }[] = [
  { slug: 'ss-gates', label: 'SS Gates' },
  { slug: 'ss-railings', label: 'SS Railings' },
  { slug: 'ms-gates', label: 'MS Gates' },
  { slug: 'ms-grills', label: 'MS Grills' },
  { slug: 'rolling-shutters', label: 'Rolling Shutters' },
  { slug: 'roofing', label: 'Roofing' },
  { slug: 'kerala-roofing', label: 'Kerala Roofing' },
  { slug: 'ss-furniture', label: 'SS Furniture' },
  { slug: 'other', label: 'Other' },
];

// Only photos marked include:true in gallery.json are published.
export const photos: PublishedPhoto[] = (raw as GalleryItem[]).filter(
  (p): p is PublishedPhoto => p.include && !!p.src && !!p.width && !!p.height,
);

export const photosByCategory = (slug: CategorySlug) => photos.filter((p) => p.category === slug);

export const photoByFile = (file: string): PublishedPhoto => {
  const p = photos.find((x) => x.file === file);
  if (!p) throw new Error(`Photo "${file}" is not an included photo in data/gallery.json`);
  return p;
};
