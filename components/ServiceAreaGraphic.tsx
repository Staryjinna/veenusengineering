/** Decorative survey-style rings centred on the workshop. No distances are claimed. */
export default function ServiceAreaGraphic() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Diagram of the service area centred on Vaniyambadi" className="mx-auto w-full max-w-md">
      <g fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1">
        <circle cx="200" cy="200" r="60" />
        <circle cx="200" cy="200" r="115" strokeDasharray="6 6" />
        <circle cx="200" cy="200" r="170" />
        <path d="M200 10v380M10 200h380" strokeDasharray="2 6" />
        <path d="M66 66l268 268M334 66L66 334" strokeDasharray="2 10" opacity=".5" />
      </g>
      <g stroke="#ff6a13" strokeWidth="2" fill="none">
        <path d="M200 176v48M176 200h48" />
        <circle cx="200" cy="200" r="9" fill="#0e1113" />
      </g>
      <circle cx="200" cy="200" r="3" fill="#ff6a13" />
      <g fill="#fff" fontFamily="var(--font-display)" fontWeight="700" letterSpacing="1.5">
        <text x="214" y="190" fontSize="20">VANIYAMBADI</text>
      </g>
      <g fill="#b4bec6" fontFamily="var(--font-display)" fontSize="14" letterSpacing="2">
        <text x="200" y="26" textAnchor="middle">N</text>
        <text x="12" y="204">W</text>
        <text x="388" y="204" textAnchor="end">E</text>
        <text x="200" y="394" textAnchor="middle">S</text>
        <text x="200" y="372" textAnchor="middle" fill="#8a96a1">12.680° N · 78.614° E</text>
      </g>
    </svg>
  );
}
