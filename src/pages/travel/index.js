import React from 'react'
import { Container, Column } from 'rebass'
import { getCheckins, getCities } from './api'
import CheckInRow from './CheckInRow'
import Map from './map'
import styled from 'styled-components'

const MapWrapper = styled.div`
  position: fixed;
  right: 0;
  height: 100%;
  left: 50%;
  top: 0;
  z-index: 0;
`

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

const CheckInsContainer = styled.div`
  position: relatiee;
  right: 0;
  width: 50%;
  left: 0;
  top: 0;
  z-index: 0;
`

const Content = styled(Column).attrs({
  width: 1
})`
  max-width: 512px;
  margin-left: auto;
`

class LocationMap extends React.Component {
  state = {
    checkIns: []
  }

  componentDidMount() {
    this.renderCheckins()
  }

  async renderCheckins() {
    const checkIns = await getCheckins()
    const cities = await getCities()
    this.setState({
      checkIns: checkIns.items
    })
  }

  render() {
    return (
      <div>
        <MapWrapper>
          <Map checkIns={this.state.checkIns} />
        </MapWrapper>
        {/* <Overlay /> */}
        <CheckInsContainer>
          <Content>
            {this.state.checkIns.map(checkIn => (
                <CheckInRow key={checkIn.id} checkIn={checkIn} />
              ))}
          </Content>
        </CheckInsContainer>
      </div>
    )
  }
}

export default LocationMap