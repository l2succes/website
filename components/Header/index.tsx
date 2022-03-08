import React from "react"
import styled from "styled-components"
import { Flex } from "rebass"
import tw from "tailwind-styled-components"

const MenuContainer = tw.div`
  bg-black
  p-4
`

const Menu = tw.div`
  position-relative
  flex
`

const MenuItem = tw.a`
  ml-4
  text-white
`

const menuItems = [
  { name: "Home", path: "/", exact: true },
  { name: "Travel", path: "/travel/", exact: false },
  { name: "About", path: "/about/", exact: true },
]

interface HeaderProps {
  hideLogo?: boolean
}

export const Header = ({ hideLogo }: HeaderProps) => {
  return (
    <MenuContainer>
      <Menu>
        <div className="grow"></div>
        <Flex flexDirection="row" alignItems="center">
          {menuItems.map(({ path, name }) => (
            <MenuItem key={path} onClick={() => console.log(path)}>
              {name}
            </MenuItem>
          ))}
        </Flex>
      </Menu>
    </MenuContainer>
  )
}
Header.displayName = "Header"
