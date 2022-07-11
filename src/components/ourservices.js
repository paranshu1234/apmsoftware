import React from "react"
import styled from "styled-components"

const Container = styled.section`
  text-align: center;
  padding: 4em 10em;
`

const Title = styled.span``

const BigTitle = styled.h2``

const ServiceContainer = styled.div`
  display: grid;
  column-gap: 2em;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`

const ServiceCard = styled.div`
  margin: 1em 0;
  min-height: 200px;
  box-shadow: var(--box-shadow);
  padding: 2em;
  border-radius: 10px;
`

const Paragraph = styled.p`
  margin: 1em 0;
`

const OurServices = () => {
  return (
    <Container>
      <Title>Our Services</Title>
      <BigTitle>Explore Our Core Services</BigTitle>
      <ServiceContainer>
        <ServiceCard>
          <h1>XR Marketing</h1>
          <Paragraph>
            Transport customers to another world to create experiences they'll
            never forget.
          </Paragraph>
        </ServiceCard>
        <ServiceCard>
          <h1>Virtual Reality</h1>
          <Paragraph>
            Build interactive experiences with your audience and provide
            quantifiable results
          </Paragraph>
        </ServiceCard>
        <ServiceCard>
          <h1>Agumented Reality</h1>
          <Paragraph>
            Boost sales and brand awareness with unforgettable AR experiences.
          </Paragraph>
        </ServiceCard>
        <ServiceCard>
          <h1>Retail Store Virtualization</h1>
          <Paragraph>
            Immerse customers in a unique digital commerce experience.
          </Paragraph>
        </ServiceCard>
        <ServiceCard>
          <h1>WebAR and NativeAR</h1>
          <Paragraph>
            Leverage the next generation of digital campaigns – no download
            required.
          </Paragraph>
        </ServiceCard>
        <ServiceCard>
          <h1>Metaverse Services For Enterprise</h1>
          <Paragraph>
            Take advantage of an exciting new spectrum of opportunities for
            building connections
          </Paragraph>
        </ServiceCard>
      </ServiceContainer>
    </Container>
  )
}

export default OurServices
