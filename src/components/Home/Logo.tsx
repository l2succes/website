import React from 'react'

export const Logo: React.SFC<any> = () => {
  return (
    <svg
      width="256px"
      height="auto"
      viewBox="0 0 512 512"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient x1="50%" y1="0.166279561%" x2="50%" y2="100%" id="a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#EBEBEB" offset="100%" />
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
        <rect fill="url(#a)" x={0} y={0} width={512} height={512} />
        <text
          fontFamily="George-Bold, George"
          fontSize={300}
          fontWeight="bold"
          fill="#000"
        >
          <tspan x={127} y={307}>
            L
          </tspan>
        </text>
        <text
          fontFamily="George-Bold, George"
          fontSize={300}
          fontWeight="bold"
          fill="#000"
        >
          <tspan x={217} y={424}>
            S
          </tspan>
        </text>
      </g>
    </svg>
  )
}
