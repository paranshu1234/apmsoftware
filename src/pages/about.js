import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const MeetOurTeam = styled.section`
  max-width: 100%;
  padding: 2em 0;
`

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`
const Heading = styled.h1`
  grid-column-start: 1;
  grid-column-end: 4;
  text-align: center;
  margin: 1em 0;
  font-size: 3em;
  line-height: 1.2em;
  color: var(--text-dark);

  @media screen and (max-width: 576px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
`

const MemberHeading = styled.h1`
  font-size: 1.4em;
  line-height: 1.2em;
  color: var(--text-dark);
`

const MemberPosition = styled.p`
  font-size: 1em;
  line-height: 1.2em;
  color: var(--text-dark);
`

const BannerText = styled.p`
  font-size: 1.4em;
  line-height: 1.5em;
  padding: 1em;
  text-align: center;
  color: var(--text-dark);
`

const TeamGrid = styled.div`
  justify-content: center;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, minmax(100px, 300px));

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, minmax(10px, 1fr));
    place-items: center;
  }
`

const TeamMember = styled.div`
  border-radius: 10px;
  min-height: 400px;
`
const MemberContentContainer = styled.div`
  text-align: center;
  padding: 1em 0;
`

const AboutPage = () => (
  <Layout>
    <Seo title="About Us" />
    <MeetOurTeam>
      <Container>
        <Heading>Your Reliable XR Development Partner</Heading>
        <BannerText>
          APM Software is a Leading creative technology company next-generation
          XR (Extended Reality) experiences for brands of every size. We are
          best known for our work in AR (Augmented Reality), VR (Virtual
          Reality), WebGL, and Metaverse Application development for advertising
          and marketing, sales enablement.
        </BannerText>
        <TeamGrid>
          <Heading>Meet Core Our Team</Heading>
          <TeamMember>
            <StaticImage
              src="../images/team/Founder.jpg"
              loading="lazy"
              width={300}
              placeholder="blurred"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Banner Image"
              transformOptions={{ position: "bottom" }}
              style={{
                borderRadius: "10px",
                backgroundSize: "cover",
              }}
            />
            <MemberContentContainer>
              <MemberHeading>Paranshu Makwana</MemberHeading>
              <MemberPosition>Developer & Founder</MemberPosition>
            </MemberContentContainer>
          </TeamMember>
          <TeamMember>
            <StaticImage
              src="../images/team/botond.png"
              loading="lazy"
              width={300}
              placeholder="blurred"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Banner Image"
              transformOptions={{ position: "bottom" }}
              style={{
                borderRadius: "10px",
                backgroundSize: "cover",
              }}
            />
            <MemberContentContainer>
              <MemberHeading>Botond Hovarth</MemberHeading>
              <MemberPosition>Software Developer</MemberPosition>
            </MemberContentContainer>
          </TeamMember>
          <TeamMember>
            <StaticImage
              src="../images/team/Ruchit.jpg"
              loading="lazy"
              width={300}
              placeholder="blurred"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Banner Image"
              transformOptions={{ position: "bottom" }}
              style={{
                borderRadius: "10px",
                backgroundSize: "cover",
              }}
            />
            <MemberContentContainer>
              <MemberHeading>Ruchit Patel</MemberHeading>
              <MemberPosition>Lead Mobile Architect</MemberPosition>
            </MemberContentContainer>
          </TeamMember>
          <TeamMember>
            <StaticImage
              src="../images/team/Rukshan.jpg"
              loading="lazy"
              width={300}
              placeholder="blurred"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Banner Image"
              transformOptions={{ position: "bottom" }}
              style={{
                borderRadius: "10px",
                backgroundSize: "cover",
              }}
            />
            <MemberContentContainer>
              <MemberHeading>Rukshan Pokharel</MemberHeading>
              <MemberPosition>Back End Engineer</MemberPosition>
            </MemberContentContainer>{" "}
          </TeamMember>
          <TeamMember>
            <StaticImage
              src="../images/team/Vlad.jpg"
              loading="lazy"
              width={300}
              placeholder="blurred"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Banner Image"
              transformOptions={{ position: "bottom" }}
              style={{
                borderRadius: "10px",
                backgroundSize: "cover",
              }}
            />
            <MemberContentContainer>
              <MemberHeading>Vlad Andrei</MemberHeading>
              <MemberPosition>Unity Developer</MemberPosition>
            </MemberContentContainer>
          </TeamMember>
          <TeamMember>
            <StaticImage
              src="../images/team/Jannick.jpg"
              loading="lazy"
              width={300}
              placeholder="blurred"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Banner Image"
              transformOptions={{ position: "bottom" }}
              style={{
                borderRadius: "10px",
                backgroundSize: "cover",
              }}
            />
            <MemberContentContainer>
              <MemberHeading>Jannick Pederson</MemberHeading>
              <MemberPosition>Software Architect</MemberPosition>
            </MemberContentContainer>
          </TeamMember>
        </TeamGrid>
      </Container>
    </MeetOurTeam>
  </Layout>
)

export default AboutPage
