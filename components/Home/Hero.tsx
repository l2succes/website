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
        <div className="container mx-auto py-4 pb-10">
          <Header />
          <div className="flex">
            <div className="flex-1 flex">
              <div className="grow"></div>
              <Logo size="large" />
            </div>
            <div className="flex-1 text-white px-4">
              <div className="text-3xl">Luc Succès</div>
              <br />
              <h3>
                <HeroText />
                From Paris - New York
              </h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
