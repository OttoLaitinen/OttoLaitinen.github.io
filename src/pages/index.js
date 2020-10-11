import React from "react"
import styled from "styled-components"

const User = props => (
  <UserWrapper>
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)
export default function UsersList() {
  return (
    <Container>
      <h1>Otto A. Laitinen</h1>
      <Excerpt>Hi! It's me Otto.</Excerpt>
      <User
        username="Site under construction"
        excerpt="Currently this site is only used for testing what I can do with Gatsby and GitHub pages."
      />
    </Container>
  )
}

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Rubik";
`
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`
const Avatar = styled.img`
  flex: 0 0 96px;
  height: 96px;
  margin: 0;
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
  font-family: "Rubik";
`
const Excerpt = styled.p`
  margin: 0;
  font-family: ${props => props.theme.fonts.regular};
`
