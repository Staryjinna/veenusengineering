/** Decorative survey-style rings centred on the workshop. No distances are claimed. */
export default function ServiceAreaGraphic() {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Diagram of the service area centred on Chennai" className="mx-auto w-full max-w-md">
      <g fill="none" stroke="rgba(29,35,40,.3)" strokeWidth="1">
        <circle cx="200" cy="200" r="60" />
        <circle cx="200" cy="200" r="115" strokeDasharray="6 6" />
        <circle cx="200" cy="200" r="170" />
        <path d="M200 10v380M10 200h380" strokeDasharray="2 6" />
        <path d="M66 66l268 268M334 66L66 334" strokeDasharray="2 10" opacity=".5" />
      </g>
      <g stroke="#ef7828" strokeWidth="2" fill="none">
        <path d="M200 176v48M176 200h48" />
        <circle cx="200" cy="200" r="9" fill="#fff" />
      </g>
      <circle cx="200" cy="200" r="3" fill="#ef7828" />
      <g fill="#1d2328" fontFamily="var(--font-display)" fontWeight="700" letterSpacing="1.5">
        <text x="214" y="190" fontSize="20">CHENNAI</text>
      </g>
      <g fill="#5b6874" fontFamily="var(--font-display)" fontSize="14" letterSpacing="2">
        <text x="200" y="26" textAnchor="middle">N</text>
        <text x="12" y="204">W</text>
        <text x="388" y="204" textAnchor="end">E</text>
        <text x="200" y="394" textAnchor="middle">S</text>
        
      </g>
    </svg>
  );
}
