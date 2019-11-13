import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import books from "../images/books.jpg"

const Services = () => (
  <>
    <SEO title="Services" />
    <Header>
      <HeaderOpacity>
        <HeaderTitle>
          Usługi
        </HeaderTitle>
      </HeaderOpacity>
    </Header>
  </>
)

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
  background: rgba(134, 89, 45, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderTitle = styled.h1`
  color: white;
  font-size: 40px;
`

export default Services
