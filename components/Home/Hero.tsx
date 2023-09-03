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
        <div className="container mx-auto py-4 pb-10 h-screen items-center justify-center flex-row">
          {/* <Header /> */}
          <div className="flex flex-row mx-20 items-center flex-1">
            <Logo size="large" />
            <div className="text-white mx-10 my-6">
              <div className="text-7xl">Luc Succès</div>
              <br />
              <div className="text-3xl ">startup founder, coder + designer</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
