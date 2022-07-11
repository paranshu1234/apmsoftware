import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const ImagesSection = styled.section`
  width: 100%;
  margin: 0 auto;
  display: grid;
  max-width: 1080px;
  column-gap: 10px;
  grid-template-columns: repeat(2, minmax(10px, 1fr));
`

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(16, minmax(10px, 1fr));
  grid-template-rows: repeat(8, minmax(100px, 1fr));
`

const ImageOne = styled.div`
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 2;
  grid-row-end: 5;
  background-size: cover;
  border-radius: 8px;
  filter: blur(0.6px);
`
const ImageTwo = styled.div`
  display: flex;
  grid-column-start: 9;
  grid-column-end: 16;
  grid-row-start: 1;
  grid-row-end: 4;
  background-size: cover;
  border-radius: 8px;
  filter: blur(0.6px);
`
const ImageThree = styled.div`
  grid-area: 3 / 2 / 8 / 10;
  background-size: cover;
  border-radius: 8px;
  z-index: 99;
`

const Content = styled.div``

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
  background: var(--bg-red);
  width: fit-content;
  padding: 1em;
  border-radius: 20px;
`

const Paragraph = styled.p`
  line-height: 1.8em;
  padding: 2em 0;
  color: var(--text-gray);
`

const ImagesArea = () => {
  return (
    <ImagesSection>
      <ImagesGrid>
        <ImageOne>
          <StaticImage
            src="../images/console-dev.jpg"
            loading="lazy"
            placeholder="blurred"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner Image"
          />
        </ImageOne>
        <ImageTwo>
          <StaticImage
            src="../images/Augmented-Reality.png"
            loading="lazy"
            placeholder="blurred"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner Image"
          />
        </ImageTwo>
        <ImageThree>
          <StaticImage
            src="../images/unreal5.jpg"
            loading="lazy"
            placeholder="blurred"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner Image"
            style={{
              borderRadius: "10px",
              backgroundSize: "cover",
            }}
          />
        </ImageThree>
      </ImagesGrid>
      <Content>
        <SubTitleContainer>
          <SubTitle>Metaverse Development Company</SubTitle>
        </SubTitleContainer>
        <Heading>Ranked #1 AR/VR Development Company</Heading>
        <Paragraph>
          APM Software is an mixed reality developemnt agency building
          exceptional digital solutions. We've helped hundreds of brands create
          world-class custom virtual experiences. We offer services with
          cost-effective packages and on time delivery.
        </Paragraph>
      </Content>
    </ImagesSection>
  )
}

export default ImagesArea
