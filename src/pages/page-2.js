import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p>
      <AniLink swipe top="exit" to="/">
        Go back to the homepage
      </AniLink>
    </p>
    <p>
      <AniLink cover to="/">
        AniLink to page 2
      </AniLink>
    </p>
  </Layout>
)

export default SecondPage
