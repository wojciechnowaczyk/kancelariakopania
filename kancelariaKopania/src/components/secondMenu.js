import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import logo from "../images/logo.png"
import back from "../images/back.png"

class secondMenu extends React.Component{
  constructor(props) {
    super(props);
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
    <RightBox>
        <Link to='/' style={LinkStyles}>
        <BackArrow src={back}/>
        <HeaderTitleBack>
          Wróć do strony głównej
        </HeaderTitleBack>
        </Link>
    </RightBox>
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
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 1001;
  background-color: white;

  @media screen and (max-width: 999px){
  }
`

const HeaderTitle = styled.h1`
  color: black;
  font-size: 20px;

  @media screen and (max-width: 650px){
    display: none;
  }
`

const HeaderTitleBack = styled.h1`
  color: #48689A;
  font-size: 15px;
`

const TitleBox = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-left: 20px;
`

const Logotype = styled.img`
  width: 9vh;
  height: 9vh;
`

const BackArrow = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`

const LeftBox = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 30px;
`

const RightBox = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
`

const LinkStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
}



export default secondMenu
