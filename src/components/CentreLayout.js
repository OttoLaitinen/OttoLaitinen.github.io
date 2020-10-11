import React from "react"
import styled from "styled-components"

const CentreLayout = ({ children }) => {
  return <CentreDiv>{children}</CentreDiv>
}

const CentreDiv = styled.div`
  margin: 0 auto;
  max-width: 650;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default CentreLayout
