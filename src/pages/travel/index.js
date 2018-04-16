import React, { Component } from 'react'
import { Container, Column } from 'rebass'
import { getCheckins, getCitiesByCountry } from './api'
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
  position: relative;
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

const CountryTitle = styled.h3`
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 1.1px;
  font-family: 'Open Sans', sans-serif;
`

const CityHeader = styled.div`
  font-size: 20px;
  letter-spacing: 1.1px;
  padding: 10px;
`

class CityContainer extends Component {
  state = { active: false }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div>
        <CityHeader onClick={this.toggle}>
          {this.props.city.name}
        </CityHeader>
        {this.state.active && this.props.city.items.map(checkIn => (
          <CheckInRow key={checkIn.id} checkIn={checkIn} />
        ))}
      </div>
    )
  }
}

class LocationMap extends React.Component {
  state = {
    checkIns: [],
    countries: {}
  }

  componentDidMount() {
    this.renderCheckins()
  }

  async renderCheckins() {
    const checkIns = await getCheckins()
    const countries = await getCitiesByCountry()
    this.setState({
      checkIns: checkIns.items,
      countries
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
            {Object.keys(this.state.countries).map((countryName, i) => {
              const country = this.state.countries[countryName]

              return (
                <div key={countryName}>
                  <CountryTitle>{country.name}</CountryTitle>
                  {Object.keys(country.cities).map(cityKey => {
                    const city = country.cities[cityKey]
                    return <CityContainer key={cityKey} city={city} />
                  })}
                </div>
              )
            })}
          </Content>
        </CheckInsContainer>
      </div>
    )
  }
}

export default LocationMap