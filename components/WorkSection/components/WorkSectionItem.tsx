import React from "react"
import styled from "styled-components"
import { IPhone } from "../../Home/iPhone"
import Image from "next/image"

interface WorkSectionProps {
  title: string
  description: string
  body?: string | JSX.Element
  icon: string
  images: string[]
  backgroundColor?: string
  deviceColor?: "silver" | "black"
  color?: string
}

export const WorkSectionItem: React.FC<WorkSectionProps> = (props) => {
  const { body, deviceColor, icon, title, description, images } = props

  return (
    <div className="flex-col md:flex-row flex flex-1">
      <div className="flex-1 flex-grow">
        <div className="px-8">
          <div className="mt-8">
            <div className="icon w-[100px] h-[100px]">
              <Image src={icon} alt={`${title} icon`} width={100} height={100} />
            </div>
          </div>
          <div className="my-4 text-lg">
            <div>{description}</div>
          </div>
          <div className="my-10 text-md">{body}</div>
        </div>
      </div>
      <div className="flex">
        <PhoneContainer>
          <IPhone color={deviceColor}>
            <IPhoneContent>
              <Image src={images[0]} alt={`${title} screenshot`} width={300} height={600} />
            </IPhoneContent>
          </IPhone>
        </PhoneContainer>
      </div>
    </div>
  )
}

const PhoneContainer = styled.div`
  margin-top: -142px;
  transform: scale(0.7);
  text-align: center;
`

export const IPhoneContent = styled.div`
  img {
    width: 100%;
  }
`
