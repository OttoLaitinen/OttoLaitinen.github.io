import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Title, Subtitle, Text } from "../styles/typography"
import { Spacing } from "../components/Spacing"
import CentreLayout from "../components/CentreLayout"
import SEO from "../components/seo"

const Index = ({ data }) => {
  return (
    <CentreLayout>
      <SEO />
      <Container>
        <Title>OTTO A. LAITINEN</Title>
        <Spacing amount="large" dir="y" />

        <Avatar
          fluid={data.file.childImageSharp.fluid}
          alt="Picture of me in black and white"
        />
        <Spacing amount="xLarge" dir="y" />

        <Subtitle>About</Subtitle>
        <Spacing amount="large" dir="y" />

        <Text>
          Hi! My name is Otto. <br />
          <br />
          I'm a computer science student at Aalto University and I am most
          interested in Human Computer Interaction and UX design.
          <br />
          <br />
          This website is currently under construction and is mostly a testbed
          for me to test Gatsby and GitHub pages. Later I hope that I can use
          this site as a place to present my photography.
        </Text>
      </Container>
    </CentreLayout>
  )
}

const Container = styled.div`
  margin: 3rem 2rem;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Avatar = styled(Img)`
  border-radius: 100%;
  width: 250px;
`

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "otto_bw.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index
