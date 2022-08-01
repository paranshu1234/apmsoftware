import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import styled from "styled-components"
import CaseStudyDetail from "../../components/casestudydetail"

const Container = styled.div`
  padding: 0 0 4em 0;
`
const mqs = () => {
  return (
    <Layout>
      <Seo title="Molecular Quantum Solutions | MQS | Case Study" />
      <Container>
        <CaseStudyDetail />
      </Container>
    </Layout>
  )
}

export default mqs
