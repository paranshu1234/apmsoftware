import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"

const Container = styled.section`
  max-width: 1080px;
  margin: 0 auto;

  padding: 2em 0;
`

const ContentContainer = styled.div``

const Heading = styled.h1`
  padding: 1em 0;
  font-size: 3em;
  line-height: 1.2em;
  color: var(--text-dark);
`

const Paragraph = styled.p`
  line-height: 2em;
  padding: 0.4em 0;
  font-size: 1.4em;
  color: var(--text-gray);
`

const Email = styled.p`
  color: var(--text-dark);
  font-weight: bold;
`

const OpeningsContainer = styled.section``

const OpeningHeading = styled.h1`
  font-size: 2em;
  line-height: 1.2em;
  color: var(--text-dark);
  padding: 2em;
  text-align: center;
`

const OpeningCard = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`

const CardHeading = styled.h1`
  font-size: 1em;
  line-height: 1.2em;
  color: var(--text-dark);
  padding: 2em 0;
  text-align: center;
`
const CardText = styled.p`
  font-size: 1em;
  line-height: 1.2em;
  color: var(--text-gray);

  text-align: center;
`

const CardContentWrapper = styled.div``

const CareerPage = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Container>
      <ContentContainer>
        <Heading>Join The APM Family</Heading>
        <Paragraph>
          We are growing very fast and looking for energetic, talented young
          people to join our family.
        </Paragraph>
        <Paragraph>
          You are one step away from a next big opportunity.
        </Paragraph>
        <Paragraph>
          Apply now, because there's never a perfect time to seize the
          opportunity.
        </Paragraph>
      </ContentContainer>

      <OpeningsContainer>
        <OpeningHeading>Current Openings</OpeningHeading>
        <OpeningCard>
          <CardContentWrapper>
            <CardHeading>Junior C# Developer</CardHeading>
            <CardText>Required experience - 0 to 2 years</CardText>
          </CardContentWrapper>
          <CardContentWrapper>
            <CardHeading>Potiions</CardHeading>
            <CardText>1</CardText>
          </CardContentWrapper>
          <CardContentWrapper>
            <CardHeading>Send CV</CardHeading>
            <CardText>info@apmsoftware.co.in</CardText>
          </CardContentWrapper>
        </OpeningCard>
      </OpeningsContainer>
    </Container>
  </Layout>
)

export default CareerPage
