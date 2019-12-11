import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import scrollTo from 'gatsby-plugin-smoothscroll'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"

import Menu from "../components/menu"
import Footer from "../components/footer"

import law from "../images/pattern1.png"
import costs from "../data/costs.json"
import logo from "../images/logo.png"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.content = React.createRef()
  }
  toggleBox() {
    const { showService } = this.state;
    this.setState({
      showService: !showService,
    });
  }

  handleClick = (index, visibility) => {
    console.log(visibility);
  }
  render(){
    return(
      <>
        <SEO title="O Kancelarii" />
        <Header>
          <HeaderOpacity>
            <HeaderTop>
              <Logotype src={logo} />
              <TitleBox>
                <HeaderTitle>
                  Kancelaria
                </HeaderTitle>
                <HeaderTitle>
                  Radcy Prawnego
                </HeaderTitle>
                <HeaderTitle>
                  Joanna Kopania
                </HeaderTitle>
              </TitleBox>
            </HeaderTop>
            <MenuBox>
              <LinkButton onClick={()=> scrollTo('#content')} > O kancelarii </LinkButton>
              <Link to="/services/" style={LinkStyles}> Usługi </Link>
              <Link to="/costs/" style={LinkStyles}> Wynagrodzenie </Link>
              <Link to="/contact/" style={LinkStyles}> Kontakt </Link>
            </MenuBox>
          </HeaderOpacity>
        </Header>
        <MainBody>
          <Description id='content'>
          Kancelaria Radcy Prawnego Joanna Kopania działa od 2013 roku, świadcząc szeroko rozumianą
          pomoc prawną dla przedsiębiorców i osób fizycznych. Zajmujemy się reprezentacją Klientów w
          postępowaniach sądowych i windykacyjnych, przygotowywaniem pism procesowych, wniosków,
          umów, porozumień, regulaminów i innych dokumentów wymaganych przez Klientów,
          przygotowywaniem opinii prawnych, jak również udzielaniem porad prawnych. Usługi prawne
          świadczymy w języku polskim, języku francuskim oraz języku angielskim. Chcemy aby nasze usługi
          prawne stanowiły dla Państwa rzetelne wsparcie na co dzień, dlatego zapewniamy szybką
          komunikację z prowadzącym sprawę prawnikiem oraz terminowe realizowanie powierzonych zadań.
          </Description>
        </MainBody>
        <Footer />
      </>
  )}
  }

const Header = styled.div`
  width: 100%;
  height: 99vh;
  background-image: url(${law});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderOpacity = styled.div`
  width: 100%;
  height: 99vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const HeaderTitle = styled.h1`
  color: white;
  font-size: 30px;
`

const MainBody = styled.div`
  width: 80%;
  margin-right: 1%;
  margin-left: 20%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 20px;
  padding-right: 20%;
`
const TitleBox = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-left: 20px;
`
const Description = styled.p`
  font-size: 16px;
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

const Logotype = styled.img`
  width: 200px;
  height: 200px;
`

const MenuBox = styled.div`
  flex-direction: row;
  display: flex;
  margin-top: 50px;
`
const HeaderTop = styled.div`
  flex-direction: row;
  display: flex;
`
const LinkButton = styled.button`
  color: white;
  font-family: "Cinzel";
  font-size: 16px;
  padding: 20px;
  border: none;
  background: none;
  cursor: pointer;
  &:focus{
    outline:none;
  }
`
const LinkStyles = {
  color: 'white',
  textDecoration: 'none',
  fontFamily: "Cinzel",
  fontSize: '16px',
  padding: '20px',
}

export default IndexPage
