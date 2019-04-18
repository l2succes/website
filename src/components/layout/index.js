import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Provider } from 'rebass'
import theme from './theme'
import { injectGlobal } from 'styled-components'

import Header from '../Header'
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

export const Layout = ({ children }) => (
  <Provider theme={theme}>
    <div>
      <Helmet
        title="Luc Succes"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <div>{children}</div>
    </div>
  </Provider>
)

Layout.propTypes = {
  children: PropTypes.func,
}
