import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Title, Subtitle, Text } from "../styles/typography"
import { Spacing } from "./Spacing"

const CentreLayout = ({ children }) => {
  return (
    <CentreDiv>
      <Container>
        <LogoLink to="/">
          <Title>OTTO A. LAITINEN</Title>
        </LogoLink>
        <Spacing amount="xLarge" dir="y" />

        <Row>
          <MenuLink to="/" activeStyle={{ textDecoration: "underline" }}>
            <Subtitle>Home</Subtitle>
          </MenuLink>

          <Spacing amount="large" dir="x" />

          <MenuLink
            to="/photography"
            activeStyle={{ textDecoration: "underline" }}
          >
            <Subtitle>Photography</Subtitle>
          </MenuLink>
        </Row>
        <Spacing amount="xLarge" dir="y" />

        {children}
      </Container>
    </CentreDiv>
  )
}

const CentreDiv = styled.div`
  margin: 0 auto;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  margin: 3rem 2rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const LogoLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
`

const MenuLink = styled(LogoLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.black};

  :hover {
    opacity: 0.5;
  }
`

export default CentreLayout
