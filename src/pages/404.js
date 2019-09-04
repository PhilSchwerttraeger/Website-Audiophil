import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import blogStyles from "./blog.module.scss"

const NotFoundPage = () => (
  <Layout>
    <main className={blogStyles.main}>
      <SEO title="404: Not found" />
      <div style={{ margin: "60px 0px 60px", textAlign: "center" }}>
        <h1>Ups. Nix gefunden.</h1>
        <p>Die Seite gibt es leider nicht. Da ist wohl was schief gelaufen.</p>
      </div>
    </main>
  </Layout >
)

export default NotFoundPage
