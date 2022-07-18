/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  :root {
    --text-gray : #808291;
    --text-link: #dd2476;
    --text-white: #f8f9fa;
    --text-light: #f6f6f6;
    --text-dark : #15274F;
    --text-dark2 : #1A3760D4;
    --text-red : #ff4d6d;
    --box-shadow: 0px 0px 50px 0px rgb(0 0 0 / 10%);
    --bg-blue: rgb(249, 243, 255);
    --bg-red: rgb(254, 247, 252);
    --bg-yellow:rgb(255, 255, 246);
    --bg-purple: rgb(246, 255, 255);
    
      --bg-gradient : linear-gradient(to right, #ff512f, #dd2476); 
        --bg-gradient-indigo: linear-gradient(to right, #8e2de2, #4a00e0);
        --bg-gradient-peach: linear-gradient(to right, #fff7f3, #fff7f3);
  }

  body{
  font-family: "system-ui";

}

  a
  {
    text-decoration: none;
  }

ul
  {
      list-style-type: none;
  }

  *>* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
