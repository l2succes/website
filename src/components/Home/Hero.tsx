import React from 'react'
import { Box, Flex } from 'rebass'
import { Grid, Col, Row } from 'react-flexbox-grid'
import styled from 'styled-components'
import { HeroText } from '../HeroText'
import { Logo } from './Logo'
import { Header } from '../Header'
import { Media } from '../Layout/Responsive'
import StickyHeader from 'react-sticky-header'

import 'react-sticky-header/styles.css'

export class Hero extends React.Component<any> {
  state = {
    isSticky: false,
  }

  render() {
    return (
      <StickyHeader
        header={<Header hideLogo={!this.state.isSticky} />}
        onSticky={isSticky => this.setState({ isSticky })}
      >
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <Media at="xs">
                <Logo size="small" />
              </Media>
              <Media greaterThan="xs">
                <Logo size="large" />
              </Media>
            </Col>
            <Col xs={12} md={9}>
              <HeroText />
              <h3>
                I'm a Software Engineer from Paris, based in New York.
                <br />
              </h3>
            </Col>
          </Row>
        </Container>
      </StickyHeader>
    )
  }
}

const Container = styled(Grid)`
  margin: 40px auto;
`
