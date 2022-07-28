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
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: start;
`

const ImageContainer = styled.div`
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

const ContentContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: row wrap;

  @media screen and (max-width: 576px) {
    padding: 0 2rem;
  }
`

const Heading = styled.h1`
  font-size: 3em;

  line-height: 1.2em;
  color: var(--text-dark);
  @media screen and (max-width: 576px) {
    text-align: center;
    line-height: 1em;
    font-size: 1.4em;
  }
`

const SubTitle = styled.h3`
  font-size: 0.8em;
  color: var(--text-red);

  @media screen and (max-width: 576px) {
    text-align: center;
    font-size: 1em;
  }
`

const SubTitleContainer = styled.div`
  background: var(--bg-red);
  width: 100%;
  border-radius: 20px;
  margin-bottom: 1em;
  padding: 1em;

  @media screen and (max-width: 576px) {
    padding: 0.8em;
  }
`

const BannerTextSmall = styled.p`
  line-height: 1.8em;
  font-size: 1.2em;
  padding: 1em 0;
  color: var(--text-gray);

  @media screen and (max-width: 576px) {
    font-size: 1em;
    text-align: center;
  }
`

const TextContent = styled.div`
  @media screen and (max-width: 576px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

  @media screen and (max-width: 576px) {
    margin: 2rem auto;
    text-align: center;
  }
`

const LogosListSection = styled.section`
  width: 100%;
  min-height: 40vh;
  padding: 2em 0;
`

const StyledLinkItem = styled(Link)`
  color: var(--text-dark2);
  font-family: "system-ui";

  :hover {
    color: var(--text-red);
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="Leading AR/VR Metaverse Development Company" />
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
          <StyledLinkItem
            to="/contact/"
            style={{
              textDecoration: `none`,
            }}
          >
            <Button>Let's Get Started!</Button>
          </StyledLinkItem>
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
