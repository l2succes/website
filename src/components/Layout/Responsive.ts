import { createMedia } from '@artsy/react-responsive-media'
import { css } from 'styled-components'
import theme from './theme'

export const { MediaContextProvider, Media, createMediaStyle } = createMedia({
  breakpoints: theme.flexboxgrid.breakpoints,
  interactions: {
    hover: '(hover: hover)',
    notHover: '(hover: none)',
  },
})

const sizes = theme.flexboxgrid.breakpoints

type Media = { [S in keyof typeof sizes]: typeof css }

export const media: Media = Object.keys(sizes).reduce((accumulator, label) => {
  // using px in breakpoints to maintain uniform units with flexbox-grid
  // https://zellwk.com/blog/media-query-units/
  const pxSize = sizes[label]
  accumulator[label] = (strings, ...args) => css`
    @media (max-width: ${pxSize}px) {
      ${css(strings, ...args)};
    }
  `
  return accumulator
}, {}) as Media
