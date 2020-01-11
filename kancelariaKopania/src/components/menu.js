import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll'

import logo from "../images/logo.png"

class menu extends React.Component{
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      showSubMenu: false,
    }
  }

  displaySubMenu = () => {
    this.setState(prevState => ({
      showSubMenu: !prevState.showSubMenu
    }))
  }

  closeSubMenu = () => {
    this.setState({showSubMenu: false});
  }

  scroll = (id) => {
    scrollTo(id);
    this.props.showHide(id.charAt(id.length-1));
  }
  render(){
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
          <LinkButton onClick={()=> scrollTo('#content')} onMouseEnter={()=>this.closeSubMenu()}> O kancelarii </LinkButton>
        </Line>
        <Line>
          <LinkButton onClick={()=> scrollTo('#services')} onMouseEnter={()=>this.displaySubMenu()}> Usługi </LinkButton>
          {this.state.showSubMenu &&
          <SubMenu onMouseLeave={()=>this.displaySubMenu()}>
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
          </SubMenu>
          }
        </Line>
        <Line>
          <LinkButton onClick={()=> scrollTo('#horseback')} onMouseEnter={()=>this.closeSubMenu()}> Prawo dla miłośników jeździectwa </LinkButton>
        </Line>
        <Line>
          <LinkButton onClick={()=> scrollTo('#costs')} onMouseEnter={()=>this.closeSubMenu()}> Wynagrodzenie </LinkButton>
        </Line>
        <Line>
          <LinkButton onClick={()=> scrollTo('#contact')} onMouseEnter={()=>this.closeSubMenu()}> Kontakt </LinkButton>
        </Line>
      </MenuList>
    </RigthBox>
  </Box>
)}
}

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

  @media screen and (max-width: 999px){
    display: none;
  }
`

const Logotype = styled.img`
  width: 90px;
  height: 90px;
`

const LeftBox = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const RigthBox = styled.div`
  width: 70%;
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

  @media screen and (max-width: 1305px){
    font-size: 17px;
  }

  @media screen and (max-width: 1188px){
    font-size: 15px;
  }

  @media screen and (max-width: 1060px){
    font-size: 13px;
  }
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
  font-size: 15px;
  margin-left: 20px;
  margin-right: 20px;
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  font-weight: bold;
  &:focus{
    outline:none;
  }
  &:hover{
    border-bottom: 2px solid #48689A;
  }

  @media screen and (max-width: 1305px){
    font-size: 13px;
  }

  @media screen and (max-width: 1188px){
    font-size: 11px;
  }

  @media screen and (max-width: 1060px){
    font-size: 10px;
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

const LinkSubButton = styled.button`
  color: black;
  text-decoration: none;
  font-family: "Cinzel";
  font-size: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border: none;
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

const SubMenu = styled.div`
  position: fixed;
  top: 98px;
  background-color: white;
  display: flex;
  align-items: flex-start;
  jsutofy-content: center;
  flex-direction: column;
  border: 2px solid rgb(134, 89, 45);
`

export default menu
