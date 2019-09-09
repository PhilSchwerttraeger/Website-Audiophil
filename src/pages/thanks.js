import React from "react"
import Layout from "../layout/layout"
import styles from "./blog.module.scss"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <section className={styles.sectionNarrow}>
        <main className={styles.main}>
          <SEO title="Kontakt" />
          <h1>Alles klar!</h1>
          <p>Wir haben dein Formular erhalten und werden uns bei dir melden.</p>
          <p>Falls dir das nicht schnell genug gehen sollte, kannst du uns auch über die verlinkten Social Media Plattformen per Chat erreichen.</p>
        </main>
      </section>
    </Layout>
  )
}

export default ContactPage
