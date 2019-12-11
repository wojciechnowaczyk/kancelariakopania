import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Menu = () => {
  return(
  <Box>
    <MenuList>
      <Line>
        <Link to="/#content" style={LinkStyles} activeStyle={ActiveStyles}> O kancelarii </Link>
      </Line>
      <Line>
        <Link to="/services/" style={LinkStyles} activeStyle={ActiveStyles}> Usługi </Link>
      </Line>
      <Line>
        <Link to="/costs/" style={LinkStyles} activeStyle={ActiveStyles}> Wynagrodzenie </Link>
      </Line>
      <Line>
        <Link to="/contact/" style={LinkStyles} activeStyle={ActiveStyles}> Kontakt </Link>
      </Line>
    </MenuList>
  </Box>
)}

const Box = styled.div`
  width: 14%;
  border: 2px solid rgb(134, 89, 45);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 1%;
  position: absolute;
`
const MenuList = styled.ul`
  list-style-type: none;
  margin: 0px;
`
const Line = styled.li`
  margin-top: calc(1.45rem / 2);
  &:hover{
    cursor: pointer;
  }

`

const LinkStyles = {
  color: 'black',
  textDecoration: 'none',
  fontFamily: "Cinzel",
  fontSize: '16px',
}

const ActiveStyles = {
  borderBottom: 'solid #48689A 2px',
}

export default Menu
