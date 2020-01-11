import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll'

import logo from "../images/logo.png"
import hamburger from "../images/hamburger.png"
import close from "../images/close.png"

class RWDMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
  }

  displayMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }))
  }

  scroll = (id) => {
    scrollTo(id);
    this.displayMenu();
    this.props.showHideMenu(id.match(/\d+/g).map(Number));
  }
  render(){
  return(
  <>
    <HamburgerMenu onClick={()=>this.displayMenu()} >
    {this.state.showMenu === false &&
    <Icons src={hamburger} />
    }
    {this.state.showMenu === true &&
    <Icons src={close} />
    }
    </HamburgerMenu>
    {this.state.showMenu &&
    <Box>
      <RigthBox>
        <MenuList>
          <Line>
            <LinkButton onClick={()=> scrollTo('#content')}> O kancelarii </LinkButton>
          </Line>
          <Line>
            <LinkButton onClick={()=> scrollTo('#services')}> Usługi </LinkButton>
            <ul>
              <LinkSubButton onClick={()=> this.scroll('#services0')}> Zakładanie i obsługa prawna spółek, KRS </LinkSubButton>
              <LinkSubButton onClick={()=> this.scroll('#services1')}> Prawo cywilne, umowy, postępowania przed sądami</LinkSubButton>
              <LinkSubButton onClick={()=> this.scroll('#services2')}> Prawo pracy i ubezpieczeń społecznych – ZUS</LinkSubButton>
              <LinkSubButton onClick={()=> this.scroll('#services3')}> Prawo karne gospodarcze i karnoskarbowe</LinkSubButton>
              <LinkSubButton onClick={()=> this.scroll('#services4')}> Postępowania sądowe, egzekucyjne, windykacja należności</LinkSubButton>
              <LinkSubButton onClick={()=> this.scroll('#services5')}> Bieżące konsultacje oraz weryfikacja dokumentów</LinkSubButton>
              <LinkSubButton onClick={()=> this.scroll('#services6')}> Klienci indywidualni</LinkSubButton>
              <LinkSubButton onClick={()=> this.scroll('#services7')}> Prawo i postępowanie karne oraz wykroczeniowe</LinkSubButton>
              <LinkSubButton onClick={()=> this.scroll('#services8')}> Prawo cywilne, odszkodowania</LinkSubButton>
              <LinkSubButton onClick={()=> this.scroll('#services9')}> Prawo rodzinne</LinkSubButton>
              <LinkSubButton onClick={()=> this.scroll('#services10')}> Prawo pracy</LinkSubButton>
            </ul>
          </Line>
          <Line>
            <LinkButton onClick={()=> scrollTo('#horseback')}> Prawo dla miłośników jeździectwa </LinkButton>
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
    }
  </>
)}
}

const Box = styled.div`
  width: 50vw;
  border: 2px solid rgb(134, 89, 45);
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 1001;
  background-color: white;
  position: fixed;
  right: 0px;
  display: none;
  padding: 20px;
  height: 100%;

  @media screen and (max-width: 999px){
    display: flex;
  }

  @media screen and (max-width: 740px){
    width: 80vw;
  }
`

const RigthBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const MenuList = styled.ul`
  list-style-type: none;
  margin: 0px;
`

const TitleBox = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-left: 20px;
`
const Line = styled.li`
  margin-bottom: 0px;
  &:hover{
    cursor: pointer;
  }

`

const LinkButton = styled.button`
  color: black;
  text-decoration: none;
  font-family: "Cinzel";
  font-size: 15px;
  margin-left: 20px;
  margin-right: 20px;
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  text-align: left;
  &:focus{
    outline:none;
  }
  &:hover{
    border-bottom: 2px solid #48689A;
  }
`

const LinkSubButton = styled.button`
  color: black;
  text-decoration: none;
  font-family: "Cinzel";
  font-size: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border: none;
  width: 100%;
  text-align: left;
  background: none;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &:focus{
    outline:none;
  }
  &:hover{
    border-bottom: 2px solid #48689A;
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

const HamburgerMenu = styled.div`
  width: 40px;
  height: 40px;
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #48689A;
  z-index: 1002;
  display: none;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  @media screen and (max-width: 999px){
    display: flex;
  }
`

const Icons = styled.img`
  width: 30px;
  height: 30px;
  fill:  white !important;
`

const ActiveStyles = {
  borderBottom: 'solid #48689A 2px',
}

export default RWDMenu
