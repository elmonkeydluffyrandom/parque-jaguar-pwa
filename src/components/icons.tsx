// Using simple geometric shapes for flags to avoid complex paths.
// All flags are designed to have a consistent look and feel.

const svgClassName = "h-6 w-8 rounded-sm"

export const JaguarIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10.79 3.25a1.5 1.5 0 0 0-1.58 0C6.23 4.41 4 7.63 4 10.5c0 2.65 1.89 4.88 4.34 5.66" />
      <path d="M13.21 3.25a1.5 1.5 0 0 1 1.58 0c2.98 1.16 5.21 4.38 5.21 7.25 0 2.65-1.89 4.88-4.34 5.66" />
      <path d="M7 14.5c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5" />
      <path d="M12 21a2 2 0 0 0 2-2V11" />
      <path d="M12 21a2 2 0 0 1-2-2V11" />
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z" />
      <path d="M6 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z" />
      <path d="M16 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z" />
    </svg>
  );

export const SpainFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 750 500"
    className={svgClassName}
  >
    <rect width="750" height="500" fill="#c60b1e" />
    <rect y="125" width="750" height="250" fill="#ffc400" />
  </svg>
)

export const USFlag = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 28 15"
        className={svgClassName}
    >
        <rect width="28" height="15" fill="#BF0A30"/>
        <rect width="28" height="13" fill="#fff"/>
        <rect width="28" height="11" fill="#BF0A30"/>
        <rect width="28" height="9" fill="#fff"/>
        <rect width="28" height="7" fill="#BF0A30"/>
        <rect width="28" height="5" fill="#fff"/>
        <rect width="28" height="3" fill="#BF0A30"/>
        <rect width="28" height="1" fill="#fff"/>
        <rect width="12" height="7" fill="#002868"/>
    </svg>
)

export const FranceFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 600"
    className={svgClassName}
  >
    <rect width="900" height="600" fill="#fff" />
    <rect width="300" height="600" fill="#002654" />
    <rect x="600" width="300" height="600" fill="#ED2939" />
  </svg>
)

export const ItalyFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1500 1000"
    className={svgClassName}
  >
    <rect width="1500" height="1000" fill="#fff" />
    <rect width="500" height="1000" fill="#009246" />
    <rect x="1000" width="500" height="1000" fill="#ce2b37" />
  </svg>
)
