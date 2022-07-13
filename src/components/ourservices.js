import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Container = styled.section`
  text-align: center;
  padding: 4em 10em;
`

const Heading = styled.h1`
  font-size: 3em;
  line-height: 1.2em;
  color: var(--text-dark);
`

const SubTitle = styled.h3`
  font-size: 1em;
  color: var(--text-red);
`

const SubTitleContainer = styled.div`
  width: fit-content;
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SubTitleLine = styled.div`
  height: 3px;
  width: 2em;
  margin: 0 0.6em;
  background-color: var(--text-red);
`

const Paragraph = styled.p`
  line-height: 1.8em;
  padding: 2em 0;
  color: var(--text-gray);
`

const ServiceContainer = styled.div`
  display: grid;
  column-gap: 4em;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`

const ServiceCard = styled.div`
  margin: 3em 0;
  min-height: 400px;
  box-shadow: var(--box-shadow);
  padding: 2em;
  border-radius: 10px;
`

const OurServices = () => {
  return (
    <Container>
      <SubTitleContainer>
        <SubTitleLine></SubTitleLine>
        <SubTitle>Our Services</SubTitle>
      </SubTitleContainer>
      <Heading>Explore Our Core Services</Heading>
      <ServiceContainer>
        <ServiceCard>
          <FontAwesomeIcon
            style={{
              fontSize: "8em",
              margin: "0.4em 0",
              color: "var(--text-red)",
            }}
          />
          <SubTitle>XR Marketing</SubTitle>
          <Paragraph>
            Transport customers to another world to create experiences they'll
            never forget.
          </Paragraph>
        </ServiceCard>
        <ServiceCard>
          <FontAwesomeIcon
            style={{
              fontSize: "8em",
              margin: "0.4em 0",
              color: "var(--text-red)",
            }}
          />
          <SubTitle>Virtual Reality</SubTitle>
          <Paragraph>
            Build interactive experiences with your audience and provide
            quantifiable results
          </Paragraph>
        </ServiceCard>
        <ServiceCard>
          <SubTitle>Agumented Reality</SubTitle>
          <Paragraph>
            Boost sales and brand awareness with unforgettable AR experiences.
          </Paragraph>
        </ServiceCard>
        <ServiceCard>
          <SubTitle>Retail Store Virtualization</SubTitle>
          <Paragraph>
            Immerse customers in a unique digital commerce experience.
          </Paragraph>
        </ServiceCard>
        <ServiceCard>
          <SubTitle>WebAR and NativeAR</SubTitle>
          <Paragraph>
            Leverage the next generation of digital campaigns – no download
            required.
          </Paragraph>
        </ServiceCard>
        <ServiceCard>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M47.3,21.01c-0.58-1.6-1.3-3.16-2.24-4.66c-0.93-1.49-2.11-2.93-3.63-4.13c-1.51-1.19-3.49-2.09-5.59-2.26l-0.78-0.04 c-0.27,0.01-0.57,0.01-0.85,0.04c-0.57,0.06-1.11,0.19-1.62,0.34c-1.03,0.32-1.93,0.8-2.72,1.32c-1.42,0.94-2.55,2.03-3.57,3.15 c0.01,0.02,0.03,0.03,0.04,0.05l0.22,0.28c0.51,0.67,1.62,2.21,2.61,3.87c1.23-1.2,2.83-2.65,3.49-3.07 c0.5-0.31,0.99-0.55,1.43-0.68c0.23-0.06,0.44-0.11,0.64-0.12c0.1-0.02,0.19-0.01,0.3-0.02l0.38,0.02c0.98,0.09,1.94,0.49,2.85,1.19 c1.81,1.44,3.24,3.89,4.17,6.48c0.95,2.6,1.49,5.44,1.52,8.18c0,1.31-0.17,2.57-0.57,3.61c-0.39,1.05-1.38,1.45-2.5,1.45 c-1.63,0-2.81-0.7-3.76-1.68c-1.04-1.09-2.02-2.31-2.96-3.61c-0.78-1.09-1.54-2.22-2.26-3.37c-1.27-2.06-2.97-4.67-4.15-6.85 L25,16.35c-0.31-0.39-0.61-0.78-0.94-1.17c-1.11-1.26-2.34-2.5-3.93-3.56c-0.79-0.52-1.69-1-2.72-1.32 c-0.51-0.15-1.05-0.28-1.62-0.34c-0.18-0.02-0.36-0.03-0.54-0.03c-0.11,0-0.21-0.01-0.31-0.01l-0.78,0.04 c-2.1,0.17-4.08,1.07-5.59,2.26c-1.52,1.2-2.7,2.64-3.63,4.13C4,17.85,3.28,19.41,2.7,21.01c-1.13,3.2-1.74,6.51-1.75,9.93 c0.01,1.78,0.24,3.63,0.96,5.47c0.7,1.8,2.02,3.71,4.12,4.77c1.03,0.53,2.2,0.81,3.32,0.81c1.23,0.03,2.4-0.32,3.33-0.77 c1.87-0.93,3.16-2.16,4.33-3.4c2.31-2.51,4.02-5.23,5.6-8c0.44-0.76,0.86-1.54,1.27-2.33c-0.21-0.41-0.42-0.84-0.64-1.29 c-0.62-1.03-1.39-2.25-1.95-3.1c-0.83,1.5-1.69,2.96-2.58,4.41c-1.59,2.52-3.3,4.97-5.21,6.98c-0.95,0.98-2,1.84-2.92,2.25 c-0.47,0.2-0.83,0.27-1.14,0.25c-0.43,0-0.79-0.1-1.13-0.28c-0.67-0.35-1.3-1.1-1.69-2.15c-0.4-1.04-0.57-2.3-0.57-3.61 c0.03-2.74,0.57-5.58,1.52-8.18c0.93-2.59,2.36-5.04,4.17-6.48c0.91-0.7,1.87-1.1,2.85-1.19l0.38-0.02c0.11,0.01,0.2,0,0.3,0.02 c0.2,0.01,0.41,0.06,0.64,0.12c0.26,0.08,0.54,0.19,0.83,0.34c0.2,0.1,0.4,0.21,0.6,0.34c1,0.64,1.99,1.58,2.92,2.62 c0.72,0.81,1.41,1.71,2.1,2.63L25,25.24c0.75,1.55,1.53,3.09,2.39,4.58c1.58,2.77,3.29,5.49,5.6,8c0.68,0.73,1.41,1.45,2.27,2.1 c0.61,0.48,1.28,0.91,2.06,1.3c0.93,0.45,2.1,0.8,3.33,0.77c1.12,0,2.29-0.28,3.32-0.81c2.1-1.06,3.42-2.97,4.12-4.77 c0.72-1.84,0.95-3.69,0.96-5.47C49.04,27.52,48.43,24.21,47.3,21.01z" />
          </svg>
          <SubTitle>Metaverse Services For Enterprise</SubTitle>
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