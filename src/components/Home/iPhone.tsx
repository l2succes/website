import React from 'react'

import '../../styles/devices.css'

interface IPhoneProps {
  device?: 'iphone5s'
  color?: 'white' | 'black'
}

export const IPhone: React.SFC<IPhoneProps> = ({ color, children, device }) => {
  const classes = `marvel-device ${device} ${color}`

  return (
    <div className={classes}>
      <div className="top-bar" />
      <div className="sleep" />
      <div className="volume" />
      <div className="camera" />
      <div className="sensor" />
      <div className="speaker" />
      <div className="screen">{children}</div>
      <div className="home" />
      <div className="bottom-bar" />
    </div>
  )
}

IPhone.defaultProps = {
  color: 'black',
  device: 'iphone5s',
}
