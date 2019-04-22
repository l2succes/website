import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import { IPhone } from '../Home/iPhone'

export const Container = styled.div<{
  background?: string
  color?: string
}>`
  width: 100%;
  padding: space(1);
  background: ${p => p.background};
  color: ${p => p.color};
  min-height: 500px;

  .icon {
    width: 152px;
    height: 152px;
    overflow: hidden;
    border-radius: 30px;

    img {
      width: inherit;
      height: inherit;
    }
  }

  .icon,
  .title {
    margin: 0 20px;
  }

  .description {
    padding: 20px;
  }

  .title {
    font-size: 24px;
  }
`

const Inner = styled(Flex)`
  max-width: 1024px;
  margin: 0 auto;
`

interface WorkSectionProps {
  title: string
  description: string
  body?: string | JSX.Element
  icon: string
  images: string[]
  backgroundColor?: string
  deviceColor?: 'white' | 'black'
  color?: string
}

export const WorkSectionItem: React.SFC<WorkSectionProps> = props => {
  const {
    backgroundColor,
    body,
    color,
    deviceColor,
    icon,
    title,
    description,
    images,
  } = props

  return (
    <Container background={backgroundColor} color={color}>
      <Inner py={4}>
        <Box p={2} width={[1, 1, 3 / 4]}>
          <div className="icon">
            <img src={icon} />
          </div>
          <h3 className="title">{title}</h3>
          <div className="description">{description}</div>
          {body && <div className="body">{body}</div>}
        </Box>
        <Box width={[1, 1, 1 / 4]}>
          <IPhone color={deviceColor}>
            <IPhoneContent>
              <img src={images[0]} />
            </IPhoneContent>
          </IPhone>
        </Box>
      </Inner>
    </Container>
  )
}

export const IPhoneContent = styled.div`
  img {
    width: 100%;
  }
`

WorkSectionItem.defaultProps = {
  backgroundColor: '#FFF',
  color: '#000',
  deviceColor: 'black',
}
