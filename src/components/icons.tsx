// Using simple geometric shapes for flags to avoid complex paths.
// All flags are designed to have a consistent look and feel.

const svgClassName = "h-6 w-8 rounded-sm"

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
