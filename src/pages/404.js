import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Ups. Nix gefunden.</h1>
    <p>Die Seite gibt es leider nicht. Da ist wohl was schief gelaufen.</p>
  </Layout>
)

export default NotFoundPage
