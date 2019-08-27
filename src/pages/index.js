import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"

//let arr = Array.from({ length: 30 }, (v, i) => i);
//{arr.map(x => {return <p>{x}</p>})} 

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
