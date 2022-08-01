import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

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

const CaseStudyHeading = styled.h1`
  font-size: 1.8em;
  line-height: 1.2em;
  color: var(--text-dark);
  @media screen and (max-width: 576px) {
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

const CaseStudyContent = styled.div`
  display: flex;
  margin: 2em 0;
  flex-direction: column;
`

const StyledListItem = styled.ul`
  color: var(--text-gray);
`
const StyledListPoint = styled.li`
  margin: 1em 0;
`

const CaseStudyDetail = () => {
  return (
    <Container>
      <StaticImage
        src="../images/wind_farm.jpg"
        loading="lazy"
        placeholder="blurred"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Case Study - Wind Farm"
        style={{ marginBottom: `var(--space-3)`, borderRadius: 15 }}
      />
      <CaseStudyContent>
        <CaseStudyHeading>Client</CaseStudyHeading>
        <Paragraph>Molecular Quantum Solutions (MQS)</Paragraph>
        <CaseStudyHeading>Project</CaseStudyHeading>
        <Paragraph>
          Collaboration on a real time 3d wind farm simulation for showcasing to
          potential clients and investors
        </Paragraph>
        <CaseStudyHeading>Disciplines Used</CaseStudyHeading>
        <StyledListItem>
          <StyledListPoint>Concept development</StyledListPoint>
          <StyledListPoint>3D modelling</StyledListPoint>
          <StyledListPoint>UI/UX design</StyledListPoint>
          <StyledListPoint>Web-app development</StyledListPoint>
          <StyledListPoint>VR/AR (Planned for future)</StyledListPoint>
        </StyledListItem>
        <CaseStudyHeading>Background</CaseStudyHeading>
        <Paragraph>
          Molecular Quantum Solutions (MQS) is a start-up based in Denmark close
          to Copenhagen, was looking to create a real time 3D Wind Farm
          Simulation. Their concept was unique with significant technical
          challenges. Also, the project needed to suit a specific workflow with
          Unreal Engine. They tapped our team at APM to develop the idea and
          turn it into a functional solution.
        </Paragraph>
        <CaseStudyHeading>Challenges</CaseStudyHeading>
        <StyledListItem>
          <StyledListPoint>
            Updating 3D scenes in real time based on data from API requests
          </StyledListPoint>
          <StyledListPoint>
            {" "}
            The solution needed to integrate and work with an Unreal Engine
            workflow
          </StyledListPoint>
          <StyledListPoint>
            {" "}
            Mathematical calculations to convert raw data to 3D spatial
            information in real time to achieve certain visualization behaviour
            of the animations
          </StyledListPoint>
        </StyledListItem>
        <CaseStudyHeading>Results</CaseStudyHeading>
        <Paragraph>
          A functioning web-based and mobile friendly solution. Molecular
          Quantum Solution (MQS) is now ready to showcase the application to
          potential clients and investors. MQS and APM are collaborating on this
          project to bring it to multiple platforms including virtual and
          augmented reality in the near future.
        </Paragraph>
      </CaseStudyContent>
    </Container>
  )
}

export default CaseStudyDetail
