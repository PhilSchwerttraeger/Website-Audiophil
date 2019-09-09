import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import Layout from "../layout/layout"
import styles from "./blog.module.scss"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <section className={styles.sectionNarrow}>
      <main className={styles.main}>
        <SEO title="Kontakt" />
        <h1>Kontakt</h1>
        <form
          name="contact"
          method="post"
          netlify
          netlify-honeypot="bot-field"
        >
          <TextField
            id="name"
            label="Name"
            margin="normal"
            fullWidth
          />
          <TextField
            id="email"
            type="email"
            autoComplete="email"
            label="E-Mail"
            margin="normal"
            fullWidth
          />
          <TextField
            id="message"
            label="Nachricht"
            multiline
            rowsMax="20"
            margin="normal"
            fullWidth
          />
          <Button
            variant="contained"
            type="submit"
            size="large"
            style={{ margin: "26px" }}
          >
            Absenden
          </Button>
        </form>
      </main>
    </section>
  </Layout>
)

export default ContactPage
