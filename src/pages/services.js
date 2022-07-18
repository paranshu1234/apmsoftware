import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"
import OurServices from "../components/ourservices"

const Heading = styled.h1`
  font-size: 3em;
  line-height: 1.2em;
  color: var(--text-dark);
`

const BannerArea = styled.div`
  height: 20vh;
  text-align: center;
`
const BannerText = styled.p`
  color: var(--text-gray);
  font-size: 2em;
  padding: 1em;
`

const ServicesPage = () => (
  <Layout>
    <Seo title="Case Studies" />
    <BannerArea>
      <Heading>Services</Heading>
      <BannerText>
        We build products that automate and augment workflows.
      </BannerText>
    </BannerArea>
    <OurServices />
  </Layout>
)

export default ServicesPage
