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
              0% { stroke-dashoffset: 500; }
              100% { stroke-dashoffset: 0; }
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
              animation-delay: 0.3s;
            }
            .letter-s {
              animation-delay: 0.5s;
            }
            .animated-border {
              stroke-dasharray: 500;
              stroke-dashoffset: 500;
              animation: drawBorder 0.8s ease-out forwards;
              animation-delay: 0s;
            }
          `}
        </style>
      )}
      <g className="fill-black">
        <path d="M0 512 l0 -512 512 0 512 0 0 512 0 512 -512 0 -512 0 0 -512z m635 338.9 c31 -6.4 57.4 -21.7 78.2 -45.4 22.7 -25.9 33.9 -55.4 34 -88.9 0 -27.9 -10.2 -61.4 -23.6 -77.6 -5.2 -6.3 -19 -18.8 -28.6 -26 -11.7 -8.9 -38 -21.4 -73 -34.7 -23.4 -8.9 -31.6 -12.8 -39.2 -18.7 -7.5 -6 -11.7 -14.2 -12.5 -24.8 -0.8 -10.7 1.3 -17.3 7.7 -23.7 9.7 -9.7 23.6 -13.3 43.5 -11.2 18.4 1.9 33.5 8.2 49 20.5 4.1 3.1 7.6 5.8 7.9 5.9 0.3 0.1 10.8 -14 23.5 -31.3 l22.9 -31.5 -4.6 -4 c-48.4 -42 -118.5 -52.3 -173.7 -25.6 -32.9 15.9 -54.6 40.8 -62.6 71.6 -1 3.8 -2.1 9.4 -2.4 12.5 -0.3 3 -0.8 7.2 -1.1 9.3 l-0.6 3.7 -47.1 -0.2 -47.2 -0.3 -0.3 -167.8 -0.2 -167.7 -45 0 -45 0 0 208 0 208 109.1 0 109.1 0 4.5 4 c16.7 14.7 48.3 31.9 88.3 48 8.5 3.4 18.4 7.7 22 9.6 20 10.4 28.4 23.5 29.7 45.8 1 17.7 -3.1 28.9 -14.6 40.6 -11.9 12 -22.6 15.5 -45.6 14.7 -21.6 -0.7 -34.6 -5 -53.3 -17.4 -8.8 -5.8 -27 -22.6 -33.2 -30.7 -1.9 -2.5 -3.8 -4.5 -4.2 -4.6 -0.6 0 -44.6 55.1 -47 58.9 -1 1.7 -0.5 2.8 3.2 7.6 12.2 15.8 44.3 40.1 67.5 51.1 31.2 14.8 70.3 19.4 104.5 12.3z" />
      </g>
      <g className="fill-white">
        <path
          d="M587.1 856.9 c-28.2 -2 -53.5 -10.2 -77.1 -24.8 -11.4 -7.1 -28.8 -20.3 -38.2 -29 -7.7 -7.1 -17.8 -19.5 -17.8 -21.8 0 -0.7 11.8 -16.1 26.2 -34.4 l26.3 -33.1 4.5 5.3 c16.5 19.7 33.2 33.8 49.5 41.9 13.7 6.8 22.4 9.1 37 9.7 19.5 0.9 31.2 -3.2 42.5 -14.6 11.2 -11.4 15.8 -23.1 14.6 -37.5 -1.3 -15.3 -7.1 -27 -17.4 -35.1 -7.5 -5.9 -15.4 -10 -34.2 -17.5 -40 -16.1 -71.6 -33.3 -88.3 -48 l-4.5 -4 -109.1 0 -109.1 0 0 -211 0 -211 48 0 48 0 0.2 167.8 0.3 167.7 44.2 0.3 44.1 0.2 0.6 -3.7 c0.3 -2.1 0.8 -6.3 1.1 -9.3 5.1 -47.3 47.3 -86.5 104 -96.5 5 -0.9 15.3 -1.9 23 -2.2 45.2 -1.8 86.8 12.8 119.9 42 l5 4.4 -2.4 3.4 c-3 4.1 -48.1 66.3 -48.6 66.8 -0.1 0.1 -3.4 -2.4 -7.2 -5.6 -17.2 -14.9 -32.8 -22.1 -52.3 -24.3 -16.6 -1.9 -29.6 1.8 -38.9 11.1 -8.8 8.8 -10 18.9 -3.9 31.7 5.4 11.2 14.5 16.8 47.9 29.5 35 13.3 61.3 25.8 73 34.7 9.6 7.2 23.4 19.7 28.6 26 9.3 11.2 18.1 33.5 21.9 55.5 2.3 13.2 2.3 36.5 0 50 -4.2 25.1 -14.8 47 -32.3 67 -20.7 23.6 -47.2 39 -78 45.4 -8 1.7 -36.8 4.6 -39.2 3.9 -0.3 0 -5.6 -0.5 -11.9 -0.9z"
          className={animated ? "animated-letter letter-s" : ""}
          stroke={animated ? "white" : "none"}
          strokeWidth={animated ? "3" : "0"}
          fill={animated ? "transparent" : "white"}
        />
      </g>
    </svg>
  )
}
