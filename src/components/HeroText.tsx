import React from 'react'
import Typist from 'react-typist'

export class HeroText extends React.Component<any> {
  render() {
    return (
      <h1>
        <Typist>
          Hola! Soy Luc Succès
          <Typist.Backspace count={20} delay={2000} />
          Bonjour! Je suis Luc Succès
          <Typist.Backspace count={27} delay={2000} />
          Hello! I'm Luc Succès
        </Typist>
      </h1>
    )
  }
}
