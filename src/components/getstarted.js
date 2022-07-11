import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.section`
  position: relative;
  background-color: var(--bg-blue);
  width: 100%;

  svg {
    position: absolute;
    top: 0;
  }
`

const Card = styled.div`
  z-index: 1;
  margin: 0px auto;
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  padding: 4em;
`

const Heading = styled.h1`
  z-index: 1;
  margin: 1em 0;
`

const Paragraph = styled.p`
  z-index: 1;
  padding: 1em 0;
`
const Button = styled.button`
  z-index: 1;
  border: none;
  background: var(--bg-gradient-indigo);
  cursor: pointer;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-family: var(--font-poppins);
  font-weight: bold;
  box-shadow: var(--box-shadow);
  color: white;
  transition: 0.4s linear;

  :hover {
    transform: translateY(-5px);
  }
`

function GetStarted() {
  return (
    <Container>
      <Card>
        <Heading>Get Started</Heading>
        <Paragraph>
          You're here for answers. We're here to help. Dig into our resources
          section or chat with a friendly expert.
        </Paragraph>
        <Button>Get Started</Button>
      </Card>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 280"
      >
        <g fill="#fff" fill-rule="nonzero">
          <path d="M1919.999998 0v29.7237781c-223.98059 145.4796669-526.68468 188.5528329-908.11226 129.2194999C630.460153 99.609945 293.299854 122.962185.406838 229V0h1919.59316z"></path>
        </g>
      </svg>
    </Container>
  )
}

export default GetStarted
