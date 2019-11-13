import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"

import Menu from "../components/menu"

import books from "../images/books.jpg"

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showService: false };
    this.toggleBox = this.toggleBox.bind(this);
  }
  toggleBox() {
  const { showService } = this.state;
  this.setState({
    showService: !showService,
  });
}
  render(){
    return(
      <>
        <SEO title="Services" />
        <Header>
          <HeaderOpacity>
            <HeaderTitle>
              Usługi
            </HeaderTitle>
          </HeaderOpacity>
        </Header>
        <Menu />
        <MainBody>
          <ServiceBox onClick={this.state.toggleBox}>
            <ServiceTitle>
              Zakładanie i obsługa prawna spółek, KRS
            </ServiceTitle>
            {this.state.showService === true && <ServiceBody>
            Prowadzenie każdej firmy wymaga rzetelnej, profesjonalnej i skutecznej obsługi prawnej. Kompleksowo dbamy o kwestie prawne Państwa firmy, dlatego:
            <ul>
              <li>Doradzamy przy założeniu spółki</li>
              <li>Kompletujemy wymagane dokumenty </li>
              <li>Przeprowadzamy rejestrację spółek oraz dokonujemy późniejszych zmian w KRS</li>
              <li>Przeprowadzamy audyt prawny (badanie spółek)</li>
              <li>Reprezentujemy w postępowaniach w sprawie nieważności uchwał</li>
              <li>Prowadzimy sprawy korporacyjne – w tym przygotowywanie dokumentacji na Zgromadzenia Wspólników oraz posiedzenia Zarządu</li>
              <li>Opracowujemy projekty uchwał</li>
              <li>Świadczymy kompleksową pomoc w łączeniu bądź podziale spółek</li>
              <li>Sporządzamy umowy handlowe i pracownicze</li>
              <li>Reprezentujemy spółki przed sądami</li>
              <li>Wszczynamy oraz monitorujemy przebieg postępowania egzekucyjnego i zabezpieczającego</li>
              <li>Prowadzimy windykację należności</li>
              <li>Podejmujemy działania zmierzające do ochrony przed nieuczciwą konkurencją</li>
            </ul>
            </ServiceBody>}
          </ServiceBox>
        </MainBody>
      </>
  )}
  }

const Header = styled.div`
  width: 100%;
  height: 75vh;
  background-image: url(${books});
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
  width: 70%;
  margin-left: 15%;
  margin-top: 20px;
  padding: 20px;
`

const ServiceBox = styled.div`
  width: 500px;
  border: 1px solid black;
`

const ServiceTitle = styled.p`
  border: 1px solid green;
`

const ServiceBody = styled.div`
  border: 1px solid red;
`

export default Services
