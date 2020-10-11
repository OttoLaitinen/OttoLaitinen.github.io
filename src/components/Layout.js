import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "../themes/theme"

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Layout
