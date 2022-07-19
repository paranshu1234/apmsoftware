import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
  font-size: 2em;
  line-height: 1.2em;
  color: var(--text-dark);
  margin: 1em 0 0.4em 0;
  @media screen and (max-width: 576px) {
    font-size: 1.6em;
    text-align: center;
    line-height: 1.5em;
  }
`

const Paragraph = styled.p`
  z-index: 1;
  font-size: 1.2em;

  padding: 0 0 1em 0;
  color: var(--text-gray);
  @media screen and (max-width: 576px) {
    font-size: 1em;
    text-align: center;
    line-height: 1.5em;
  }
`
const Button = styled.button`
  margin: 2em 0;
  z-index: 2;
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

  @media screen and (max-width: 576px) {
    width: 100%;
    text-align: center;
    line-height: 1.5em;
  }
`

const StyledLinkItem = styled(Link)`
  z-index: 4;
  color: var(--text-dark2);
  font-family: "system-ui";
`

function GetStarted() {
  return (
    <Container>
      <Card>
        <Heading>Get in touch</Heading>
        <Paragraph>
          Reach out to discuss your business needs and to learn how we can help
          you grow.
        </Paragraph>
        <StyledLinkItem
          to="/contact/"
          style={{
            textDecoration: `none`,
          }}
        >
          <Button>Let's Connect</Button>
        </StyledLinkItem>
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
