import React from 'react'
import Typist from 'react-typist'

export class HeroText extends React.Component<any> {
  render() {
    return (
      <h1>
        <Typist>
          Hello!
          <Typist.Backspace count={6} delay={2000} />
          Bonjour!
          <Typist.Backspace count={8} delay={2000} />
          Hola!
        </Typist>
      </h1>
    )
  }
}
