import React from "react"

import Layout from "../layout/layout"
import styles from "./blog.module.scss"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <main className={styles.main}>
      <SEO title="Kontakt" />
      <h1>Kontakt</h1>
    </main>
  </Layout>
)

export default ContactPage
