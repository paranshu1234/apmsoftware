import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import LogoList from "../components/logolist"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import ImagesArea from "../components/imagesarea"
import OurServices from "../components/ourservices"
import GetStarted from "../components/getstarted"
import CaseStudies from "../components/casestudies"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const ContainerBanner = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: start;
`

const ImageContainer = styled.div`
  max-width: 600px;
`

const Title = styled.span`
  display: block;
  font-weight: bold;
  font-size: 2.8em;
  line-height: 1.4em;
`

const ContentContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: row wrap;
`

const TextContent = styled.div``

const Paragraph = styled.p`
  color: var(--text-gray);
  font-size: 1.2em;
  line-height: 1.4em;
`

const Button = styled.button`
  border: none;
  background: var(--bg-gradient-indigo);
  cursor: pointer;
  margin: 2rem 0;
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

const SmallTitle = styled.p`
  color: var(--text-red);
  font-size: 1em;
  line-height: 1.8em;
`

const LogosListSection = styled.section`
  width: 100%;
  height: 40vh;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Award Winning AR/VR Development Company" />
    <ContainerBanner>
      <ContentContainer>
        <TextContent>
          <SmallTitle>Leading AR/VR Development Company</SmallTitle>
          <Title>We help businesses</Title>
          <Title>create virtual experiences</Title>
          <Paragraph>
            APM excels at creating outstanding virtual experiences
          </Paragraph>
          <Button>Let's Get Started!</Button>
        </TextContent>
        <ImageContainer>
          <StaticImage
            src="../images/console-dev.jpg"
            loading="lazy"
            placeholder="blurred"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Banner Image"
            style={{ marginBottom: `var(--space-3)` }}
          />
        </ImageContainer>
      </ContentContainer>
    </ContainerBanner>
    <LogosListSection>
      <LogoList />
    </LogosListSection>
    <ImagesArea />
    <OurServices></OurServices>
    <CaseStudies />
    <GetStarted />
  </Layout>
)

export default IndexPage
