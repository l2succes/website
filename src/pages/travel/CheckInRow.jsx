import React, { Component } from 'react'
import styled from 'styled-components'

const Row = styled.div`
  font-family: 'Open Sans', sans-serif;
  padding: 20px;
  border-width: 0px;
  border-bottom: 1px;
  border-color: white;
  border-style: solid;
`

const Categories = styled.div`
  margin: 5px 0;
`

const Name = styled.div`
  font-family: George, Helvetica, sans-serif;
  color: #FF8900;
  letter-spacing: 1.1px;
  margin-bottom: 2px;
  font-weight: normal;
  font-size: 16px;
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
  const { id, venue } = props.checkIn;

  return (
  <Row key={id}>
    <Name>{venue.name}</Name>
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