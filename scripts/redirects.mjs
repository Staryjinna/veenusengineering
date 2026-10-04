// Old template URLs -> new URLs. Used by postbuild.mjs and mirrored in vercel.json and public/.htaccess.
export const redirects = [
  ['/index.html', '/'],
  ['/about.html', '/about/'],
  ['/service.html', '/services/'],
  ['/gallery.html', '/projects/'],
  ['/contact.html', '/contact/'],
  ['/terms.html', '/terms/'],
  ['/return.html', '/refund-policy/'],
];
