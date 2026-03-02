// src/components/Logo.tsx
export const Logo = () => (
  <svg 
    viewBox="0 0 320 80" 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-16 w-auto" // Tu peux ajuster la taille ici avec Tailwind
  >
    <defs>
      <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="25%" stopColor="#f59e0b" />
        <stop offset="50%" stopColor="#10b981" />
        <stop offset="75%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>

    {/* Cercle Bleu OnlyCats */}
    <circle cx="40" cy="40" r="35" fill="#A1C9F2" />
    
    {/* Grosse Patte Blanche Anatomique (Code optimisé) */}
    <g fill="white">
      <path d="M40 62c-8 0-14-5-14-12 0-6 4-9 9-9h10c5 0 9 3 9 9 0 7-6 12-14 12z" />
      <ellipse cx="27" cy="38" rx="5" ry="7" transform="rotate(-20 27 38)" />
      <ellipse cx="36" cy="31" rx="5" ry="8" />
      <ellipse cx="45" cy="31" rx="5" ry="8" />
      <ellipse cx="54" cy="38" rx="5" ry="7" transform="rotate(20 54 38)" />
    </g>

    {/* Texte "nlyCats" */}
    <text 
      x="85" 
      y="58" 
      fontFamily="ui-sans-serif, system-ui, sans-serif" 
      fontWeight="900" 
      fontStyle="italic" 
      fontSize="52" 
      letterSpacing="-2"
    >
      <tspan fill="#A1C9F2">nly</tspan>
      <tspan fill="url(#rainbow)">Cats</tspan>
    </text>
  </svg>
);