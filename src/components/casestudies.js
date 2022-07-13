import React from "react"
import styled from "styled-components"

const Container = styled.section`
  text-align: start;
  padding: 0 12em;
`

const Heading = styled.h1`
  font-size: 3em;
  line-height: 1.2em;
  color: var(--text-dark);
`

const SubTitle = styled.h3`
  font-size: 1em;
  padding: 2em 0;
  color: var(--text-red);
`

const CaseStudies = () => {
  return (
    <Container>
      <Heading>Case Studies</Heading>
      <SubTitle>See Our Past Work</SubTitle>
    </Container>
  )
}

export default CaseStudies
