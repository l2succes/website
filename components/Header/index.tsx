import React from "react"
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

const menuItems: { name: string; path: string; exact: boolean }[] = []

interface HeaderProps {
  hideLogo?: boolean
}

export const Header = ({ hideLogo }: HeaderProps) => {
  return (
    <MenuContainer>
      <Menu>
        <div className="grow"></div>
        <div className="flex flex-row items-center">
          {menuItems.map(({ path, name }) => (
            <MenuItem key={path} onClick={() => console.log(path)}>
              {name}
            </MenuItem>
          ))}
        </div>
      </Menu>
    </MenuContainer>
  )
}
Header.displayName = "Header"
