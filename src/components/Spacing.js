import styled from "styled-components"

export const Spacing = styled.div`
  height: 0px;
  flex-shrink: 0;
  ${props => getSpacing(props.theme, props.amount, props.dir)}
`

const getSpacing = (theme, amount = "regular", dir = "x") => {
  const cssValue = theme.spacing[amount]
  const cssProp = dir === "x" ? "width" : "height"
  return `${cssProp}: ${cssValue};`
}
