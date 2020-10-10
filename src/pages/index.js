import React from "react"
import styled from "styled-components"

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)
export default function UsersList() {
  return (
    <Container>
      <h1>Site under construction</h1>
      <p>
        This is a test to see if I can get Gatsby site to work on GitHub pages.
        Oh and btw that's me there :D
      </p>
      <User
        username="Otto A. Laitinen"
        avatar="https://live.staticflickr.com/65535/48602711261_8d099ef806_m.jpg"
        excerpt="Hi! It's me Otto. That great photo of me is by Stefan Rua."
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
`
const Excerpt = styled.p`
  margin: 0;
`
