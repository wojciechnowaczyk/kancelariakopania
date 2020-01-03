import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll'

import logo from "../images/logo.png"

const Menu = () => {
  return(
  <Box>
    <LeftBox>
      <Logotype src={logo} />
      <TitleBox>
        <HeaderTitle>
          Kancelaria Radcy Prawnego
        </HeaderTitle>
        <HeaderTitle>
          Joanna Kopania
        </HeaderTitle>
      </TitleBox>
    </LeftBox>
    <RigthBox>
      <MenuList>
        <Line>
          <LinkButton onClick={()=> scrollTo('#content')}> O kancelarii </LinkButton>
        </Line>
        <Line>
          <LinkButton onClick={()=> scrollTo('#services')}> Usługi </LinkButton>
        </Line>
        <Line>
          <LinkButton onClick={()=> scrollTo('#horseback')}> Prawo dla miłośników koni i jeździectwa </LinkButton>
        </Line>
        <Line>
          <LinkButton onClick={()=> scrollTo('#costs')}> Wynagrodzenie </LinkButton>
        </Line>
        <Line>
          <LinkButton onClick={()=> scrollTo('#contact')}> Kontakt </LinkButton>
        </Line>
      </MenuList>
    </RigthBox>
  </Box>
)}

const Box = styled.div`
  width: 100%;
  border: 2px solid rgb(134, 89, 45);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  z-index: 1001;
  background-color: white;
`

const Logotype = styled.img`
  width: 90px;
  height: 90px;
`

const LeftBox = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const RigthBox = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const MenuList = styled.ul`
  list-style-type: none;
  margin: 0px;
`

const HeaderTitle = styled.h1`
  color: black;
  font-size: 20px;
`
const TitleBox = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-left: 20px;
`
const Line = styled.li`
  margin-top: calc(1.45rem / 2);
  float: left;
  &:hover{
    cursor: pointer;
  }

`

const LinkButton = styled.button`
  color: black;
  text-decoration: none;
  font-family: "Cinzel";
  font-size: 16px;
  margin-left: 15;
  margin-right: 15;
  border: none;
  background: none;
  cursor: pointer;
  &:focus{
    outline:none;
  }
`

const LinkStyles = {
  color: 'black',
  textDecoration: 'none',
  fontFamily: "Cinzel",
  fontSize: '16px',
  marginLeft: 15,
  marginRight: 15,
}

const ActiveStyles = {
  borderBottom: 'solid #48689A 2px',
}

export default Menu
