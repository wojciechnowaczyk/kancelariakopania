import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import logo from '../images/logo.png'

const Footer = () => {
  return(
    <BorderBox>
      <Box>
          <Col>
            <Logotype src={logo} alt="logotype"/>
          </Col>
          <ColDesc>
            <Desc>
              Kancelaria Radcy Prawnego Joanna Kopania
            </Desc>
            <Desc>
              <b>Biuro <br />
              ul. Platynowa 28 <br />
              62-052 Komorniki Poznań </b><br />
              (Adres do korespondencji: ul. Naramowicka 217d/44, 61-611 Poznań)
            </Desc>
            <Desc>
              Telefon: 501-498-704 <br />
              email: kancelaria@radcakopania.pl
            </Desc>
            <Link to='/privacy-policy' style={LinkStyles}> Polityka prywatności </Link>
          </ColDesc>
      </Box>
      <Author href="https://www.linkedin.com/in/wojciech-nowaczyk-a1506211a/" target="_blank" rel="noopener noreferrer">
        Made by Wojciech Nowaczyk
      </Author>
    </BorderBox>
)}
const BorderBox = styled.footer`
  border: 2px solid rgb(134, 89, 45);
  width: 100%;
`
const Box = styled.div`
  width: 60%;
  margin-left: 20%;
  padding: 20px;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lato";
  font-size: 15px;

  @media screen and (max-width: 750px){
    width: 100%;
    margin-left: 0%;
  }
`

const BoxOpacity = styled.div`
  width: 70%;
  height: 300px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logotype = styled.img`
  width: 200px;
  height: auto;
`
const Col = styled.div`
  width: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`
const ColDesc = styled.div`
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`

const Desc = styled.p`
  text-align: left;
  color: black;
  font-size: 13px;
`

const LinkStyles = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '13px',
  cursor: 'pointer',
  border: '1px solid black',
  padding: '5px 10px 5px 10px',
  marginTop: '10px',
}

const Author = styled.a`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  font-family: "Lato";
  font-size: 12px;
  cursor: pointer;
  color: black;
  text-decoration: none;
`

export default Footer
