import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"

import Menu from "../components/menu"
import Footer from "../components/footer"

import agreement from "../images/agreement1.jpg"
import costs from "../data/costs.json"

class Costs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showService: false, status: [] };
    this.toggleBox = this.toggleBox.bind(this);
  }
  toggleBox() {
    const { showService } = this.state;
    this.setState({
      showService: !showService,
    });
  }

  handleClick = (index, visibility) => {
    console.log('test');
    console.log(visibility);
  }
  render(){
    return(
      <>
        <SEO title="Wynagrodzenie" />
        <Header>
          <HeaderOpacity>
            <HeaderTitle>
              Wynagrodzenie
            </HeaderTitle>
          </HeaderOpacity>
        </Header>
        <Menu />
        <MainBody>
          {costs.data.map((el, i) =>
            <div key={i}>
              <QuestionBar visible='1' onClick={(visible)=> this.handleClick(i, visible)}> {el.question} </QuestionBar>
              <AnswerBox> {el.answer} </AnswerBox>
            </div>
          )}
        </MainBody>
        <Footer />
      </>
  )}
  }

const Header = styled.div`
  width: 100%;
  height: 75vh;
  background-image: url(${agreement});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderOpacity = styled.div`
  width: 70%;
  height: 50%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderTitle = styled.h1`
  color: white;
  font-size: 60px;
`

const MainBody = styled.div`
  width: 80%;
  margin-right: 1%;
  margin-left: 20%;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-right: 10%;
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

const QuestionBar = styled.p`
  width: 90%;
  border-left: 2px solid rgb(134, 89, 45);
  padding-left: 40px;
  font-size: 20px;
  font-family: "Cinzel";
  font-weight: 600;
`

const AnswerBox = styled.p`
  width: 90%;
  border-left: 1px solid #48689A;
  margin-left: 40px;
  padding-left: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 16px;
`

export default Costs
