import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StaticImage } from "gatsby-plugin-image"

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
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  column-gap: 4em;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`
const ServiceCardContent = styled.div`
  padding-top: 1em;
`

const ServiceCard = styled.div`
  margin: 3em 0;
  min-height: 400px;
  box-shadow: var(--box-shadow);
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
          <StaticImage
            src="../images/mixed-reality.jpg"
            loading="lazy"
            width={350}
            height={250}
            placeholder="blurred"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner Image"
            style={{
              borderRadius: "10px",
              backgroundSize: "cover",

              opacity: "0.9",
            }}
          />
          <ServiceCardContent>
            <SubTitle>XR Marketing</SubTitle>
            <Paragraph>
              Transport customers to another world to create experiences they'll
              never forget.
            </Paragraph>
          </ServiceCardContent>
        </ServiceCard>
        <ServiceCard>
          <StaticImage
            src="../images/virtual-reality.jpg"
            loading="lazy"
            width={350}
            height={250}
            placeholder="blurred"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner Image"
            style={{
              borderRadius: "10px",
              backgroundSize: "cover",
              opacity: "0.9",
              objectFit: "cover",
            }}
          />
          <ServiceCardContent>
            <SubTitle>Virtual Reality</SubTitle>
            <Paragraph>
              Build interactive experiences with your audience and provide
              quantifiable results
            </Paragraph>
          </ServiceCardContent>
        </ServiceCard>
        <ServiceCard>
          <StaticImage
            src="../images/augmented-reality.jpg"
            loading="lazy"
            placeholder="blurred"
            width={350}
            height={250}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner Image"
            style={{
              borderRadius: "10px",
              backgroundSize: "cover",
              opacity: "0.9",
            }}
          />
          <ServiceCardContent>
            <SubTitle>Augmented Reality</SubTitle>
            <Paragraph>
              Boost sales and brand awareness with unforgettable AR experiences.
            </Paragraph>
          </ServiceCardContent>
        </ServiceCard>
        <ServiceCard>
          <StaticImage
            src="../images/retail-store.jpg"
            loading="lazy"
            placeholder="blurred"
            quality={95}
            width={350}
            height={250}
            formats={["auto", "webp", "avif"]}
            alt="Banner Image"
            style={{
              borderRadius: "10px",
              backgroundSize: "cover",
              opacity: "0.9",
            }}
          />
          <ServiceCardContent>
            <SubTitle>Retail Store Virtualization</SubTitle>
            <Paragraph>
              Immerse customers in a unique digital commerce experience.
            </Paragraph>
          </ServiceCardContent>
        </ServiceCard>
        <ServiceCard>
          <StaticImage
            src="../images/web-ar.jpg"
            loading="lazy"
            placeholder="blurred"
            quality={95}
            width={350}
            height={250}
            formats={["auto", "webp", "avif"]}
            alt="Banner Image"
            style={{
              borderRadius: "10px",
              backgroundSize: "cover",
              opacity: "0.9",
            }}
          />
          <ServiceCardContent>
            <SubTitle>WebAR and NativeAR</SubTitle>
            <Paragraph>
              Leverage the next generation of digital campaigns – no download
              required.
            </Paragraph>
          </ServiceCardContent>
        </ServiceCard>
        <ServiceCard>
          <StaticImage
            src="../images/metaverse.webp"
            loading="lazy"
            placeholder="blurred"
            width={350}
            height={250}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner Image"
            style={{
              borderRadius: "10px",
              backgroundSize: "cover",
              opacity: "0.9",
            }}
          />
          <ServiceCardContent>
            <SubTitle>Metaverse Services For Enterprise</SubTitle>
            <Paragraph>
              Take advantage of an exciting new spectrum of opportunities for
              building connections
            </Paragraph>
          </ServiceCardContent>
        </ServiceCard>
      </ServiceContainer>
    </Container>
  )
}

export default OurServices
