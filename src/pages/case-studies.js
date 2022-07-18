import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"
import CaseStudies from "../components/casestudies"

const Container = styled.div`
  padding: 0 0 4em 0;
`

const CaseStudiesPage = () => (
  <Layout>
    <Seo title="Case Studies" />
    <Container>
      <CaseStudies />
    </Container>
  </Layout>
)

export default CaseStudiesPage
