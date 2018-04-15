import React from 'react'
import { navigateTo } from 'gatsby-link'
import styled from 'styled-components'
import { Container, NavLink } from 'rebass'
import Logo from '../../images/Logo.svg'

const Menu = Container.extend`
  position: relative;
  color: white;
  display: flex;
  flex-direction: horizontal;
  align-items: center;
  z-index: 10;
`

const MenuItem = styled(NavLink)`
  font-weight: normal;
`

const LogoContainer = styled.img`
  display: inline-block;
  width: 40px;
  height: 40px;
`

const menuItems = [
  { name: "Home", path: "/", exact: true },
  { name: "Travel", path: "/travel/", exact: false },
  { name: "About", path: "/about/", exact: true },
  { name: "Blog", path: "/blog/", exact: false },
]

const Header = () => (
  <Menu width={1}>
    <LogoContainer src={Logo} />
    <div>
      {menuItems.map(({path, name}) => (
        <MenuItem 
          key={path}
          onClick={ () => navigateTo(path)}>
            {name}
        </MenuItem>
      ))}
    </div>
  </Menu>
)
Header.displayName = "Header"

export default Header
