import React from 'react'
import { navigateTo } from 'gatsby-link'
import styled from 'styled-components'
import { NavLink } from 'rebass'
import Logo from '../../images/Logo.svg'
import { Media } from '../Layout/Responsive'
import { MenuIcon } from '../Icons/Menu'
import { useSpring, animated } from 'react-spring'
import { Grid, Row } from 'react-flexbox-grid'

const MenuContainer = styled.div`
  background: black;
  padding: 5px;
`

const Menu = styled(Grid)`
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

const LogoContainer = styled.img<{ hideLogo?: boolean }>`
  display: inline-block;
  width: 40px;
  height: 40px;
  ${p => (p.hideLogo ? 'visibility: hidden;' : '')};
  margin-right: 10px;
`

const menuItems = [
  { name: 'Home', path: '/', exact: true },
  { name: 'Travel', path: '/travel/', exact: false },
  { name: 'About', path: '/about/', exact: true },
  { name: 'Blog', path: '/blog/', exact: false },
]

const LanguageSwitcher = () => {
  return (
    <>
      <Language>🇺🇸</Language>
      <Language>🇫🇷</Language>
      <Language>🇪🇸</Language>
    </>
  )
}

const Language = styled.div`
  display: inline-block;
  margin: 0 5px;
`

interface HeaderProps {
  hideLogo?: boolean
}

export const Header = ({ hideLogo }: HeaderProps) => {
  const animationProps = useSpring({
    width: hideLogo ? 0 : 50,
    opacity: hideLogo ? 0 : 1,
  })

  return (
    <MenuContainer>
      <Menu>
        <Row>
          <animated.div style={animationProps}>
            <LogoContainer src={Logo} />
          </animated.div>
          <Media at="xs">
            <MenuIcon />
          </Media>
          <Media greaterThan="xs">
            <div>
              {menuItems.map(({ path, name }) => (
                <MenuItem key={path} onClick={() => navigateTo(path)}>
                  {name}
                </MenuItem>
              ))}
            </div>
          </Media>
        </Row>
      </Menu>
    </MenuContainer>
  )
}
Header.displayName = 'Header'
