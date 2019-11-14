import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import Menu from "../components/menu"

import building from "../images/building.jpg"

const Contact = () => (
  <>
    <SEO title="Contact" />
    <Header>
      <HeaderOpacity>
        <HeaderTitle>
          Kontakt
        </HeaderTitle>
      </HeaderOpacity>
    </Header>
    <Menu />
    <MainBody>
      <SubTitle>
        Dane Teleadresowe
      </SubTitle>
      <ContactInfo>
      Kancelaria Radcy Prawnego Joanna Kopania
      </ContactInfo>
      <ContactInfo>
      ul. Platynowa 28 <br />
      62-052 Komorniki Poznań
      </ContactInfo>
      <ContactInfo>
      Telefon: 501-498-704 <br />
      email: kancelaria@radcakopania.pl
      </ContactInfo>
      <ContactInfo>
      Godziny otwarcia: <br />
      8:00-16:00 (istnieje możliwość umówienia się na spotkanie w godzinach późniejszych, jak <br />
      również możliwy jest kontakt z Kancelarią pod podanymi numerami po godzinach pracy)
      </ContactInfo>
      <ContactInfo>
      Zapewniamy Parking dla klientów
      </ContactInfo>
      <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.2127705739167!2d16.829048415781113!3d52.348426156682756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47044f8dd975788d%3A0x167eb4747791e86c!2sPlatynowa%2028%2C%2062-052%20Komorniki!5e0!3m2!1spl!2spl!4v1573763401662!5m2!1spl!2spl" ></Map>
    </MainBody>
  </>
)

const Header = styled.div`
  width: 100%;
  height: 75vh;
  background-image: url(${building});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderOpacity = styled.div`
  width: 70%;
  height: 50%;
  background: rgba(134, 89, 45, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderTitle = styled.h1`
  color: white;
  font-size: 40px;
`

const MainBody = styled.div`
  width: 60%;
  margin-left: 20%;
  margin-top: 20px;
  padding: 20px;
`

const SubTitle = styled.h2`
  font-size: 30px;
  border-bottom: 4px solid #487AF9;
`

const ContactInfo = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`

const Map = styled.iframe`
  width: 100%;
  height: 500px;
  border:0;
  frameborder: 0;
`

export default Contact
