export type Testimonial = {
  name: string;
  role?: string;
  service: string;
  quote: string;
  verified: boolean;
};

// TODO: add real customer reviews (ideally from Google, with the reviewer's permission).
// While this list is empty the Testimonials section is hidden. Do not add invented quotes.
export const testimonials: Testimonial[] = [];
