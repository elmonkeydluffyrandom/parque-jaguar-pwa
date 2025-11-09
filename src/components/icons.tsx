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

export const UKFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 30"
    className={svgClassName}
  >
    <clipPath id="a">
      <path d="M0 0h60v30H0z" />
    </clipPath>
    <path d="M0 0v30h60V0z" fill="#012169" />
    <path
      d="M0 0l60 30m0-30L0 30"
      stroke="#fff"
      strokeWidth="6"
      clipPath="url(#a)"
    />
    <path
      d="M0 0l60 30m0-30L0 30"
      stroke="#C8102E"
      strokeWidth="4"
      clipPath="url(#a)"
    />
    <path
      d="M30 0v30M0 15h60"
      stroke="#fff"
      strokeWidth="10"
      clipPath="url(#a)"
    />
    <path
      d="M30 0v30M0 15h60"
      stroke="#C8102E"
      strokeWidth="6"
      clipPath="url(#a)"
    />
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
