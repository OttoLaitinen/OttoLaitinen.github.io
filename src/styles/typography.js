import styled, { css } from "styled-components"

const HeadingStyle = css`
  font-family: ${props => props.theme.fonts.title};
`

const BodyStyle = css`
  font-family: ${props => props.theme.fonts.regular};
`

export const Title = styled.span`
  ${HeadingStyle};
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: 600;
`

export const Subtitle = styled.span`
  ${HeadingStyle};
  font-size: ${props => props.theme.fontSizes.subtitle};
`
export const Text = styled.p`
  ${BodyStyle};
  font-size: ${props => props.theme.fontSizes.regular};
`
