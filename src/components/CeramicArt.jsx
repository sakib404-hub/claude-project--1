const paths = {
  vase: (
    <path
      d="M75 20 C70 30 65 40 65 55 C65 75 90 85 90 110 C90 135 70 140 70 155 C70 168 130 168 130 155 C130 140 110 135 110 110 C110 85 135 75 135 55 C135 40 130 30 125 20 Z"
      fill="#DCD2BC"
      stroke="#242019"
      strokeWidth="2"
    />
  ),
  bowl: (
    <>
      <path
        d="M40 90 C40 130 80 150 100 150 C120 150 160 130 160 90 Z"
        fill="#EDE4CE"
        stroke="#242019"
        strokeWidth="2"
      />
      <ellipse cx="100" cy="90" rx="60" ry="12" fill="#F6F2E9" stroke="#242019" strokeWidth="2" />
    </>
  ),
  mug: (
    <>
      <path d="M60 60 L60 140 C60 155 140 155 140 140 L140 60 Z" fill="#E3DABF" stroke="#242019" strokeWidth="2" />
      <ellipse cx="100" cy="60" rx="40" ry="9" fill="#F1E9D2" stroke="#242019" strokeWidth="2" />
      <path d="M140 80 C170 80 170 130 140 128" fill="none" stroke="#242019" strokeWidth="2" />
    </>
  ),
  plate: (
    <>
      <ellipse cx="100" cy="100" rx="70" ry="26" fill="#EDE4CE" stroke="#242019" strokeWidth="2" />
      <ellipse cx="100" cy="97" rx="46" ry="16" fill="#F6F2E9" stroke="#242019" strokeWidth="1.5" />
    </>
  ),
  budvase: (
    <>
      <path
        d="M85 30 C82 45 80 55 80 65 C80 80 120 80 120 65 C120 55 118 45 115 30 C112 20 88 20 85 30 Z"
        fill="#DCE0CB"
        stroke="#242019"
        strokeWidth="2"
      />
      <path
        d="M80 65 C75 100 78 140 85 160 L115 160 C122 140 125 100 120 65 Z"
        fill="#DCE0CB"
        stroke="#242019"
        strokeWidth="2"
      />
    </>
  ),
  kiln: (
    <>
      <path
        d="M60 150 C55 100, 60 80, 65 70 C70 58, 130 58, 135 70 C140 80, 145 100, 140 150 C140 165, 60 165, 60 150 Z"
        fill="#DCD2BC"
        stroke="#242019"
        strokeWidth="1.5"
      />
      <ellipse cx="100" cy="70" rx="35" ry="9" fill="#EDE4CE" stroke="#242019" strokeWidth="1.5" />
      <ellipse cx="100" cy="150" rx="40" ry="8" fill="#C9BFA6" stroke="#242019" strokeWidth="1.5" />
      <path d="M70 95 C90 88, 110 100, 130 92" stroke="#75816A" strokeWidth="2" fill="none" opacity="0.7" />
    </>
  ),
}

export default function CeramicArt({ shape, className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      {paths[shape]}
    </svg>
  )
}
