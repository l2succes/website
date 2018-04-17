import React, { Component } from 'react'
import ReactMapGL, { Marker, LinearInterpolator, FlyToInterpolator } from 'react-map-gl'
import DeckGL, {IconLayer, WebMercatorViewport } from 'deck.gl'
import rbush from 'rbush'
import { easeCubic } from 'd3-ease'
import styled from 'styled-components'

import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css'

const Dot = styled(Marker)`
  width: 10px;
  height: 10px;
  background-color: #FF8900;
  border-radius: 10px;
`

class Map extends Component {
  state = {
    viewport: {
      width: 0,
      height: 0,
      latitude: 6.208922918834555,
      longitude:  -75.56700488331215,
      zoom: 10
    }
  }

  componentWillReceiveProps(newProps) {
    const { selectedCheckIn } = newProps
    if (!selectedCheckIn) return

    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude: selectedCheckIn.venue.location.lat,
        longitude: selectedCheckIn.venue.location.lng,
        zoom: 15,
        transitionDuration: 3000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: easeCubic
      }
    })
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({
      viewport: { 
        ...this.state.viewport,
        width: window.innerWidth / 2,
        height: window.innerHeight
      }
    });
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
        {
          this.props.checkIns.map((checkIn) => {
            const { location } = checkIn.venue
            return (
              <Dot key={checkIn.id} latitude={location.lat} longitude={location.lng}>
              </Dot>
            )
          })
        }
      </ReactMapGL>
    )
  }
}

export default Map