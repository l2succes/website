import React from "react"
import Typist from "react-typist"

export class HeroText extends React.Component<any> {
  render() {
    return (
      <h1 className="text-white text-xl">
        <Typist>
          Hola!
          <Typist.Backspace count={20} delay={2000} />
          Bonjour!
          <Typist.Backspace count={27} delay={2000} />
          Hello!
        </Typist>
      </h1>
    )
  }
}
