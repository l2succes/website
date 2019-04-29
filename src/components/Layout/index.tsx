import React from 'react'
import Helmet from 'react-helmet'
import { Provider } from 'rebass'
import theme from './theme'
import { injectGlobal } from 'styled-components'
import { MediaContextProvider, createMediaStyle } from './Responsive'

import './fonts.css'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background: black;
    color: white;
    font-family: 'Open Sans', sans-serif;
  }
`

export const Layout: React.SFC<any> = ({ children }) => (
  <Provider theme={theme}>
    <MediaContextProvider>
      <Helmet
        title="Luc Succès"
        meta={[
          { name: 'description', content: 'Luc Succès - Blog' },
          { name: 'keywords', content: '' },
        ]}
      >
        <style>{createMediaStyle()}</style>
      </Helmet>
      {children}
    </MediaContextProvider>
  </Provider>
)
