import React from "react"
import styled from "styled-components"
import { IPhone } from "../Home/iPhone"
import { media } from "../Layout/Responsive"

export const Container = styled.div<{
  background?: string
  color?: string
}>`
  width: 100%;
  padding: space(1);
  color: ${(p) => p.color};
  min-height: 500px;

  .icon {
    img {
      width: 100%;
      border-radius: 30px;
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
    }

    ${media.sm`
      img {
        width: 100px;
        border-radius: 20px;
      }
    `}

    text-align: center;
  }

  .description {
    padding: 20px;
  }
`

const Title = styled.h3`
  width: inherit;
  text-align: center;
  font-size: 24px;
  margin: 10px 0;
`

const Description = styled.div`
  font-style: italic;
  font-size: 20px;
  margin-bottom: 40px;

  ${media.md`
    text-align: center;
  `}

  ${media.sm`
    font-size: 16px;
  `}
`

const PhoneContainer = styled.div`
  ${media.md`
    margin-top: -142px;
    transform: scale(0.7);
    text-align: center;
  `}

  ${media.xs`
    margin-top: -142px;
    transform: scale(0.5);
    text-align: center;
  `}
`

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

export const WorkSectionItem: React.SFC<WorkSectionProps> = (props) => {
  const { backgroundColor, body, color, deviceColor, icon, title, description, images } = props

  return (
    <Container background={backgroundColor} color={color}>
      <div className="grid">
        <div className="row-span-8">
          <div className="row-span-3 grid">
            <div className="row-span-3">
              <div className="icon">
                <img src={icon} />
                <Title>{title}</Title>
              </div>
            </div>
            <div className="row-span-9">
              <Description>{description}</Description>
              {body && <div className="body">{body}</div>}
            </div>
          </div>
        </div>
        <div className="row-span-4">
          <PhoneContainer>
            <IPhone color={deviceColor}>
              <IPhoneContent>
                <img src={images[0]} />
              </IPhoneContent>
            </IPhone>
          </PhoneContainer>
        </div>
      </div>
    </Container>
  )
}

export const IPhoneContent = styled.div`
  img {
    width: 100%;
  }
`

WorkSectionItem.defaultProps = {
  backgroundColor: "#FFF",
  color: "#000",
  deviceColor: "black",
}
