import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import law from '../images/law.jpg'

const Footer = () => {
  return(
  <Box>
    <BoxOpacity />
  </Box>
)}

const Box = styled.footer`
  width: 100%;
  min-height: 300px;
  background: url(${law});
  background-position: center;
  background-size: cover;
`

const BoxOpacity = styled.div`
  width: 100%;
  height: 300px;
  background: rgba(134, 89, 45, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Footer
