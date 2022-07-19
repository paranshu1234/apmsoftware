import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const ImagesSection = styled.section`
  width: 100%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  max-width: 1080px;
  column-gap: 20px;
  grid-template-columns: repeat(2, minmax(10px, 1fr));
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, minmax(10px, 1fr));
  }
`

const ImageThree = styled.div`
  border-radius: 8px;
  z-index: 99;
`

const Content = styled.div`
  @media screen and (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0 1em;
    grid-template-columns: repeat(1, minmax(10px, 1fr));
  }
`

const Heading = styled.h1`
  font-size: 3em;
  line-height: 1.2em;
  color: var(--text-dark);
`

const SubTitle = styled.h3`
  font-size: 1em;
  color: var(--text-red);
  @media screen and (max-width: 576px) {
    font-size: 1.4em;
  }
`

const SubTitleContainer = styled.div`
  background: var(--bg-red);
  width: fit-content;
  padding: 1em;
  border-radius: 20px;

  @media screen and (max-width: 576px) {
    width: 100%;
    text-align: center;
    padding: 1em;
    grid-template-columns: repeat(1, minmax(10px, 1fr));
    margin-bottom: 1em;
  }
`

const Paragraph = styled.p`
  line-height: 1.8em;
  padding: 2em 0;
  color: var(--text-gray);
  @media screen and (max-width: 576px) {
    font-size: 2em;
  }
`

const ImagesArea = () => {
  return (
    <ImagesSection>
      <ImageThree>
        <StaticImage
          src="../images/headset.jpg"
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
