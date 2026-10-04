export type Testimonial = {
  name: string;
  role?: string;
  service: string;
  quote: string;
  /** false until the client confirms this is a real customer or replaces it with a Google review */
  verified: boolean;
};

// TODO: replace these four with real Google reviews (name, star rating, link) before launch.
// The old site paired them with template stock photos, so they are unverified.
// The quotes below are condensed from the old site's summaries, not word-for-word.
export const testimonials: Testimonial[] = [
  { name: 'Ram Kumar', role: 'Chartered Accountant', service: 'SS gate', quote: 'Happy with the quality and finish of our SS gate, and it was delivered on time.', verified: false },
  { name: 'Pavithra', service: 'MS gate', quote: 'Strong build, good finish and the installation was done on schedule.', verified: false },
  { name: 'Sunil Kumar', role: 'Financial Consultant', service: 'Kerala-type roofing', quote: 'Good craftsmanship and a clean look. The roofing was completed as planned.', verified: false },
  { name: 'Mohammed Abdullah', role: 'Lawyer', service: 'Rolling shutter', quote: 'Quality work, smooth operation and neat finishing on our rolling shutter.', verified: false },
];

export const testimonialsUnverified = testimonials.some((t) => !t.verified);
