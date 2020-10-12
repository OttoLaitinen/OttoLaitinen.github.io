import React, { useEffect } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Spacing } from "../components/Spacing"
import CentreLayout from "../components/CentreLayout"
import SEO from "../components/seo"

const Photography = ({ data }) => {
  const images = data.allFile.edges

  return (
    <CentreLayout>
      <SEO title="Photography" />
      <ImagesContainer>
        {images
          .sort((a, b) => a.node.base.localeCompare(b.node.base))
          .map(image => (
            <ImagesContainer>
              <Image
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
              />
              <Spacing amount="large" dir="y" />
            </ImagesContainer>
          ))}
      </ImagesContainer>
    </CentreLayout>
  )
}

const Image = styled(Img)`
  max-width: 500px;
  margin: 0 auto;
`

const ImagesContainer = styled.div`
  width: 100%;
`

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "photography" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Photography
