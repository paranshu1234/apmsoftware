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

const BannerTextSmall = styled.p`
  line-height: 1.8em;
  padding: 2em 0;
  color: var(--text-gray);
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
  padding: 2em 0;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Award Winning AR/VR Development Company" />
    <ContainerBanner>
      <ContentContainer>
        <TextContent>
          <SubTitleContainer>
            <SubTitle>Leading AR/VR Development Company</SubTitle>
          </SubTitleContainer>
          <Heading>We help businesses</Heading>
          <Heading>create virtual experiences</Heading>
          <BannerTextSmall>
            APM excels at creating outstanding virtual experiences
          </BannerTextSmall>
          <Button>Let's Get Started!</Button>
        </TextContent>
        <ImageContainer>
          <StaticImage
            src="../images/Hero.webp"
            loading="lazy"
            height={500}
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
