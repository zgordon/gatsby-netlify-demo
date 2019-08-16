import React from "react";
import Link from "gatsby-plugin-transition-link";
import TransitionLink from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>STAGING 1</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      <Link to="/page-2/">Link to page 2</Link>
    </p>
    <p>
      <TransitionLink
        to="/page-2"
        exit={{
          trigger: ({ exit, node }) =>
            this.interestingExitAnimation(exit, node),
          length: 1
        }}
        entry={{
          delay: 0.6
        }}
      >
        TransitionLink to page 2
      </TransitionLink>
    </p>
    <p>
      <AniLink paintDrip color="rebeccapurple" to="/page-2/">
        AniLink to page 2
      </AniLink>
    </p>
    <p>
      <AniLink swipe duration={1} bg="#ffffff" to="/page-2/">
        AniLink to page 2
      </AniLink>
    </p>
  </Layout>
);

export default IndexPage;
