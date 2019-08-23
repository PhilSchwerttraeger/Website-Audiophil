import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Willkommen.</h1>
    <p>
      Go to <Link to="/blog">Blog</Link>
    </p>
  </Layout>
)

export default IndexPage
