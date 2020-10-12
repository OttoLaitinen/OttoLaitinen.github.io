import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Text } from "../styles/typography"
import { Spacing } from "../components/Spacing"
import CentreLayout from "../components/CentreLayout"
import SEO from "../components/seo"

const Index = ({ data }) => {
  return (
    <CentreLayout>
      <SEO title="Home" />

      <Avatar
        fluid={data.file.childImageSharp.fluid}
        loading="eager"
        alt="Picture of me in black and white"
      />
      <Spacing amount="xLarge" dir="y" />

      <Text>
        Hi! My name is Otto. <br />
        <br />
        I'm a computer science student at Aalto University and I am most
        interested in Human Computer Interaction and UX design.
        <br />
        <br />
        In my free time I play tennis competitively and also take photographs
        which I try to post here.
      </Text>
    </CentreLayout>
  )
}

const Avatar = styled(Img)`
  border-radius: 100%;
  width: 250px;
`

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "pages/otto_bw.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Index
