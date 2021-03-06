import React, { Component } from 'react'
import { Column } from 'rebass'
import { getCheckins, getCitiesByCountry } from '../../data/checkins/api'
import CheckInRow from '../../components/Travel/CheckInRow'
import Map from '../../components/Travel/map'
import styled from 'styled-components'
import { Layout } from '../../components/Layout'
import { Header } from '../../components/Header'

const MapWrapper = styled.div`
  position: fixed;
  right: 0;
  height: 100%;
  left: 50%;
  top: 0;
  z-index: 0;
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
  width: 1,
})`
  max-width: 512px;
  margin-left: auto;
`

const CountryTitle = styled.h3`
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 4px;
  font-family: George, Helvetica, sans-serif;
`

const CityHeader = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  letter-spacing: 1.1px;
  padding: 10px;
  color: gray;
`
class CityContainer extends Component<any> {
  state = { active: false, selected: null }

  toggle = () => {
    this.setState({
      active: !this.state.active,
    })
  }

  onSelected(checkIn) {
    this.setState({
      selected: checkIn,
    })
    this.props.onCheckInSelected(checkIn)
  }

  render() {
    return (
      <div>
        <CityHeader onClick={this.toggle}>{this.props.city.name}</CityHeader>
        {this.state.active &&
          this.props.city.items.map(checkIn => (
            <CheckInRow
              key={checkIn.id}
              checkIn={checkIn}
              onClick={this.onSelected.bind(this, checkIn)}
              selected={(this.state.selected || {}).id === checkIn.id}
            />
          ))}
      </div>
    )
  }
}

class LocationMap extends React.Component {
  state = {
    checkIns: [],
    countries: {},
    selectedCheckIn: null,
  }

  componentDidMount() {
    this.renderCheckins()
  }

  async renderCheckins() {
    const checkIns = await getCheckins()
    const countries = await getCitiesByCountry()
    this.setState({
      checkIns: checkIns.items,
      countries,
    })
  }

  onCheckInSelected = checkIn => {
    this.setState({
      selectedCheckIn: checkIn,
    })
  }

  render() {
    return (
      <Layout>
        <Header />
        <MapWrapper>
          <Map
            checkIns={this.state.checkIns}
            selectedCheckIn={this.state.selectedCheckIn}
          />
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
                    return (
                      <CityContainer
                        key={cityKey}
                        city={city}
                        onCheckInSelected={this.onCheckInSelected}
                      />
                    )
                  })}
                </div>
              )
            })}
          </Content>
        </CheckInsContainer>
      </Layout>
    )
  }
}

export default LocationMap
