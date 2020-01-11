import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import SecondMenu from "../components/secondMenu"

import building from "../images/building.jpg"

const NotFoundPage = () => (
  <>
    <SEO title="404: Nie znaleziono strony" />
    <SecondMenu />
    <MainHeader>
      <HeaderOpacity>
        <HeaderTop>
          <TitleBox>
            <HeaderTitle>
              Strona nie została znaleziona.
            </HeaderTitle>
          </TitleBox>
        </HeaderTop>
      </HeaderOpacity>
    </MainHeader>
  </>
)

const HeaderOpacity = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const HeaderTitle = styled.h1`
  color: white;
  font-size: 50px;
  text-align:  center;
`

const TitleBox = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-left: 20px;

  @media screen and (max-width: 620px){
    margin-left: 0px;
    text-align: center;
  }
`

const HeaderTop = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 620px){
    flex-direction: column;
  }
`

const MainHeader = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${building});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:10vh;

  @media screen and (max-width: 999px){
    margin-top: 0px;
  }
`

export default NotFoundPage
