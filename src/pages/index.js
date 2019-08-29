import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"

//let arr = Array.from({ length: 30 }, (v, i) => i);
//{arr.map(x => {return <p>{x}</p>})} 

const IndexPage = () => (
  <Layout type="hero">
    <SEO title="Home" />
    <section id="firstsection">
      <h1>Willkommen</h1>
      <p>
        Go to <Link to="/blog">Blog</Link>
      </p>
    </section>

    <section>
      <h1>Willkommen</h1>
      <p>
        Go to <Link to="/blog">Blog</Link>
      </p>
    </section>
  </Layout >
)

export default IndexPage
