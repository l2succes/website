import React, { Component } from 'react'
import styled from 'styled-components'

const Row = styled.div`
  font-family: 'Open Sans', sans-serif;
  padding: 20px;
  border-width: 0px;
  border-bottom: 1px;
  border-color: gray;
  border-style: solid;
  background: ${p => p.selected ? 'rgba(100,100,100,0.3)' : 'transparent'};
`

const Categories = styled.div`
  margin: 5px 0;
`

const IndexLabel = styled.span`
  display: inline-block;
  background-color: ${p => p.selected ? '#FF8900' : 'transparent'};
  width: 20px;
  height: 20px;
  color: ${p => p.selected ? 'white' : '#FF8900'};
  font-size: 13px;
  border-radius: 40px;
  margin-right: 10px;
  line-height: 20px;
  text-align: center;
`

const Name = styled.div`
  font-family: George, Helvetica, sans-serif;
  color: #FF8900;
  letter-spacing: 1.1px;
  margin-bottom: 2px;
  font-weight: normal;
  font-size: 16px;
  vertical-align: middle;
`

const Address = styled.div`
  & span {
    display: block;
    font-weight: normal;
    font-size: 14px;
  }
`

const CategoryLabel = styled.span`
  background: rgba(255, 255, 255, 0.5);
  color: black;
  height: 20px;
  border-radius: 10px;
  padding: 2px 10px;
  margin-right: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const CheckInRow = (props) => {
  const { id, venue, index } = props.checkIn;
  const selected = props.selected || false

  return (
  <Row key={id} onClick={props.onClick} selected={selected}>
    <Name><IndexLabel selected={selected}>{index}.</IndexLabel>{venue.name}</Name>
    <Categories>
      {(venue.categories || []).map(category => (
        <CategoryLabel key={category.id}>{category.name}</CategoryLabel>
      ))}
    </Categories>
    <Address>
      {(venue.location.formattedAddress || []).map((line, i) => (
        <span key={i}>{line}</span>
      ))}
    </Address>
  </Row>
  )
}

export default CheckInRow