import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"

const Container = styled.section`
  text-align: start;
  padding: 0 12em;
  @media screen and (max-width: 576px) {
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Heading = styled.h1`
  font-size: 3em;
  line-height: 1.2em;
  color: var(--text-dark);
  @media screen and (max-width: 576px) {
    font-size: 1.8em;
  }
`

const CaseStudyHeading = styled.h1`
  font-size: 2em;
  line-height: 1.2em;
  color: var(--text-dark);
  @media screen and (max-width: 576px) {
    font-size: 1.6em;
  }
`

const SubTitle = styled.h3`
  font-size: 1em;
  padding: 2em 0;
  color: var(--text-red);
  @media screen and (max-width: 576px) {
    padding: 1em 0;
    font-size: 1.6em;
  }
`

const Paragraph = styled.p`
  max-width: 800px;
  line-height: 1.8em;
  padding: 2em 0;
  color: var(--text-gray);
  @media screen and (max-width: 576px) {
    font-size: 1em;
  }
`

const CaseStudyCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
`

const CaseStudyContent = styled.div`
  display: flex;
  flex-direction: column;
`

const LinkWrapper = styled.div`
  width: 100%;
  margin: 1em 0;
`

const StyledInternalLinkItem = styled(Link)`
  font-size: 1.2em;
  width: fit-content;
  color: var(--text-red);
  font-family: "system-ui";
  transition: all 0.3s ease;

  :hover {
    color: var(--text-link);
  }

  @media screen and (max-width: 576px) {
    text-align: center;
    margin: 1em 0;
  }
`

const CaseStudies = () => {
  return (
    <Container>
      <Heading>Case Studies</Heading>
      <SubTitle>See Our Work</SubTitle>
      <CaseStudyCard>
        <CaseStudyContent>
          <CaseStudyHeading>
            Collaboration Project With Molecular Quantum Solutions (MQS)
          </CaseStudyHeading>
          <Paragraph>
            Molecular Quantum Solutions (MQS) is a start-up based in Denmark
            close to Copenhagen, was looking to create a real time 3D Wind Farm
            Simulation. Their concept was unique with significant technical
            challenges. Also, the project needed to suit a specific workflow
            with Unreal Engine. They tapped our team at APM to develop the idea
            and turn it into a functional solution.
          </Paragraph>
          <LinkWrapper>
            <StyledInternalLinkItem to="/case-study/mqs">
              Read More
            </StyledInternalLinkItem>
          </LinkWrapper>
        </CaseStudyContent>
        <StaticImage
          src="../images/wind_farm.jpg"
          loading="lazy"
          height={200}
          placeholder="blurred"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Case Study - Wind Farm"
          style={{ marginBottom: `var(--space-3)`, borderRadius: 15 }}
        />
      </CaseStudyCard>
    </Container>
  )
}

export default CaseStudies
