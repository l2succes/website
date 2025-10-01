import React from "react"
import { NewWorkSection } from "../WorkSection/NewWorkSection"

export const WorkSectionWrapper: React.FC = () => {
  return (
    <>
      <div className="flex flex-1 border-y border-x-black my-10"></div>
      <div id="work">
        <NewWorkSection />
      </div>
    </>
  )
}
