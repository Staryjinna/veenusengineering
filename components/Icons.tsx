import type { SVGProps } from 'react';

const base = (p: SVGProps<SVGSVGElement>) => ({
  width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
  'aria-hidden': true, focusable: false, ...p,
});

export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
);
export const WhatsAppIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 0 1 0 16.2c-1.4 0-2.7-.36-3.9-1l-.28-.17-3 .87.9-2.9-.19-.3A8.1 8.1 0 0 1 12.04 3.8zM8.6 7.4c-.2 0-.5.07-.75.35-.26.28-1 1-1 2.4s1 2.8 1.15 3c.14.2 2 3.2 5 4.4 2.4.9 2.9.75 3.4.7.5-.05 1.65-.67 1.9-1.33.23-.66.23-1.22.16-1.34-.07-.12-.26-.2-.55-.33-.28-.14-1.65-.82-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.1-.16.18-.33.2-.6.07-.3-.14-1.2-.45-2.3-1.4-.85-.76-1.4-1.7-1.6-1.98-.16-.28 0-.43.13-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.1-.23-.55-.47-.48-.64-.48z" />
  </svg>
);
export const ArrowIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const MenuIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const CloseIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M6 6l12 12M18 6L6 18" /></svg>);
export const PinIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>);
export const ClockIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
export const MailIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="1" /><path d="M3 7l9 6 9-6" /></svg>);
export const PlusIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>);
export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>);
export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".6" fill="currentColor" /></svg>);
export const YoutubeIcon = (p: SVGProps<SVGSVGElement>) => (<svg {...base(p)}><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="M10 9.5v5l4.5-2.5z" fill="currentColor" /></svg>);
