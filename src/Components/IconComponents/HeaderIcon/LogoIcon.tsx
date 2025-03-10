export function LogoIcon() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="48.4">
    <defs>
      <linearGradient id="myLinearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#056FD4' }} />
        <stop offset="50%" style={{ stopColor: '#22377A' }} />
        <stop offset="100%" style={{ stopColor: '#620E75' }} />
      </linearGradient>
    </defs>
    
    <text x="50%" y="50%"  textAnchor="middle" dy=".35em" fill="url(#myLinearGradient)">
      VIRTUALITY
    </text>
  </svg>
    )
} 
