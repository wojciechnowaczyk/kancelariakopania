import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import law from '../images/desk.jpg'
import logo from '../images/logo.png'

const Footer = () => {
  return(
  <Box>
    <BoxOpacity>
      <Col>
        <Logotype src={logo}/>
      </Col>
      <ColDesc>
        <Desc>
          Kancelaria Radcy Prawnego Joanna Kopania
        </Desc>
        <Desc>
          ul. Platynowa 28 <br />
          62-052 Komorniki Poznań
        </Desc>
        <Desc>
          Telefon: 501-498-704 <br />
          email: kancelaria@radcakopania.pl
        </Desc>
      </ColDesc>
    </BoxOpacity>
  </Box>
)}

const Box = styled.footer`
  width: 100%;
  min-height: 400px;
  background: url(${law});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Cinzel";
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
  color: white;
  font-size: 10px;
`

export default Footer
