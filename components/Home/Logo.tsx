import React from "react"

interface LogoProps {
  size?: "small" | "large" | "xlarge"
  animated?: boolean
}

export const Logo = ({ size = "large", animated = false }: LogoProps) => {
  const { width, height } =
    size === "xlarge" ? { width: "200px", height: "200px" } :
    size === "large" ? { width: "150px", height: "150px" } :
    { width: "64px", height: "64px" }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      className="border-[0.5px] border-white"
    >
      {animated && (
        <style>
          {`
            @keyframes drawStroke {
              0% {
                stroke-dashoffset: 2000;
                fill: transparent;
              }
              70% {
                stroke-dashoffset: 0;
                fill: transparent;
              }
              100% {
                stroke-dashoffset: 0;
                fill: white;
              }
            }
            @keyframes drawBorder {
              0% {
                stroke-dashoffset: 4096;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }
            .animated-letter {
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              stroke: white;
              stroke-width: 3;
              fill: transparent;
              animation: drawStroke 2s ease-out forwards;
            }
            .letter-l {
              animation-delay: 1.1s;
            }
            .letter-s {
              animation-delay: 2.1s;
            }
            .animated-border {
              stroke-dasharray: 4096;
              stroke-dashoffset: 4096;
              stroke: white;
              stroke-width: 1;
              fill: transparent;
              animation: drawBorder 0.8s ease-out forwards;
              animation-delay: 0s;
            }
          `}
        </style>
      )}
      <rect
        x="0"
        y="0"
        width="1024"
        height="1024"
        className={animated ? "animated-border" : ""}
        fill="black"
        stroke={animated ? "white" : "none"}
        strokeWidth={animated ? "1" : "0"}
      />
      <path
        d="M587.1 856.9 c-28.2 -2 -53.5 -10.2 -77.1 -24.8 -11.4 -7.1 -28.8 -20.3 -38.2 -29 -7.7 -7.1 -17.8 -19.5 -17.8 -21.8 0 -0.7 11.8 -16.1 26.2 -34.4 l26.3 -33.1 4.5 5.3 c16.5 19.7 33.2 33.8 49.5 41.9 13.7 6.8 22.4 9.1 37 9.7 19.5 0.9 31.2 -3.2 42.5 -14.6 11.2 -11.4 15.8 -23.1 14.6 -37.5 -1.3 -15.3 -7.1 -27 -17.4 -35.1 -7.5 -5.9 -15.4 -10 -34.2 -17.5 -40 -16.1 -71.6 -33.3 -88.3 -48 l-4.5 -4 -109.1 0 -109.1 0 0 -211 0 -211 48 0 48 0 0.2 167.8 0.3 167.7 44.2 0.3 44.1 0.2 0.6 -3.7 c0.3 -2.1 0.8 -6.3 1.1 -9.3 5.1 -47.3 47.3 -86.5 104 -96.5 5 -0.9 15.3 -1.9 23 -2.2 45.2 -1.8 86.8 12.8 119.9 42 l5 4.4 -2.4 3.4 c-3 4.1 -48.1 66.3 -48.6 66.8 -0.1 0.1 -3.4 -2.4 -7.2 -5.6 -17.2 -14.9 -32.8 -22.1 -52.3 -24.3 -16.6 -1.9 -29.6 1.8 -38.9 11.1 -8.8 8.8 -10 18.9 -3.9 31.7 5.4 11.2 14.5 16.8 47.9 29.5 35 13.3 61.3 25.8 73 34.7 9.6 7.2 23.4 19.7 28.6 26 9.3 11.2 18.1 33.5 21.9 55.5 2.3 13.2 2.3 36.5 0 50 -4.2 25.1 -14.8 47 -32.3 67 -20.7 23.6 -47.2 39 -78 45.4 -8 1.7 -36.8 4.6 -39.2 3.9 -0.3 0 -5.6 -0.5 -11.9 -0.9z"
        className={animated ? "animated-letter letter-s" : ""}
        stroke={animated ? "white" : "none"}
        strokeWidth={animated ? "3" : "0"}
        fill={animated ? "transparent" : "white"}
      />
    </svg>
  )
}
