import React from "react"
import { HeroText } from "../HeroText"
import { Header } from "../Header"
import { Logo } from "./Logo"

export class Hero extends React.Component<any> {
  state = {
    isSticky: false,
  }

  render() {
    return (
      <div className="bg-black">
        <div className="container mx-auto py-4 items-center justify-center flex-row">
          <Header />
          <div className="items-center text-center pb-20">
            <div className="text-white mx-10 my-6 flex-1">
              <div className="font-sans text-4xl mb-1">Luc Succès</div>
              <div className="text-md text-neutral-500">Coder. Designer. Startup founder</div>
            </div>
            <div className="mt-10 flex justify-center">
              <Logo size="large" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
