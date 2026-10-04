// Wording condensed from the existing website. Have the client (and ideally a lawyer) review before launch.
export type Policy = { title: string; intro: string; clauses: { heading: string; text: string }[] };

export const terms: Policy = {
  title: 'Terms & Conditions',
  intro: 'These terms apply to fabrication and installation work done by Veenus Engineering.',
  clauses: [
    { heading: 'Starting work', text: 'Work starts after you approve the quotation and pay the advance.' },
    { heading: 'Timelines', text: 'Delivery and installation dates can change with material availability and site conditions. We will tell you as early as we can.' },
    { heading: 'Payment', text: 'Payment is made as set out in the quotation. Late payment can delay delivery. Work outside the agreed scope is charged extra.' },
    { heading: 'Materials', text: 'We use materials suited to the job. Small differences in colour or finish can occur between samples or photos and the finished work.' },
    { heading: 'Site access and permits', text: 'You provide access to the site, electricity where needed, and any permits or permissions required. You inspect the completed work with us.' },
    { heading: 'Warranty', text: 'Warranty covers manufacturing defects only. It does not cover misuse, accidents, weather damage or poor maintenance.' },
    { heading: 'Advance payment', text: 'The advance is non-refundable once materials have been bought for your job.' },
    { heading: 'Safety and liability', text: 'We follow standard safety practices on site. We are not liable for changes made by others after we hand the work over.' },
    { heading: 'Changes to these terms', text: 'We may change these terms without notice. The terms on your approved quotation apply to your job.' },
  ],
};

export const refund: Policy = {
  title: 'Return & Refund Policy',
  intro: 'Our work is made to order for your site, so returns work differently from buying a ready-made product.',
  clauses: [
    { heading: 'Custom work', text: 'Custom, project-based work cannot be returned once work has started.' },
    { heading: 'Advance payment', text: 'The advance paid for materials and booking is generally not refundable.' },
    { heading: 'When we refund', text: 'A refund is considered only if Veenus Engineering cannot proceed with the agreed project.' },
    { heading: 'Defects', text: 'Report any defect to us immediately after the work is completed.' },
    { heading: 'Cancellations', text: 'Ask to cancel before work starts. We cannot cancel once fabrication has begun.' },
    { heading: 'Refund timing', text: 'Approved refunds are processed within 7 to 14 business days to the original payment method.' },
  ],
};
