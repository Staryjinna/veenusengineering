import { usingSamplePhotos } from '@/data/gallery';

/** Honest label for stock photography. Disappears when usingSamplePhotos is set to false. */
export default function SampleNotice({ className = '' }: { className?: string }) {
  if (!usingSamplePhotos) return null;
  return (
    <p className={`inline-block border border-dashed border-weld-deep bg-white px-3 py-1.5 text-sm font-semibold text-weld-deep ${className}`}>
      Sample photos for illustration. Velan Industries project photos to be added.
    </p>
  );
}
