import React from "react"
import TextField from "@material-ui/core/TextField"
import { navigate } from 'gatsby-link'
import Button from "@material-ui/core/Button"

import Layout from "../layout/layout"
import styles from "./blog.module.scss"
import SEO from "../components/seo"

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

const ContactPage = () => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleAttachment = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <section className={styles.sectionNarrow}>
        <main className={styles.main}>
          <SEO title="Kontakt" />
          <h1>Kontakt</h1>
          <form
            name="contact"
            method="post"
            netlify
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            action="/thanks"
          >
            <input type="hidden" name="form-name" value="file-upload" />

            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </p>

            <TextField
              id="name"
              label="Name"
              margin="normal"
              fullWidth
              onChange={handleChange}
            />

            <TextField
              id="email"
              type="email"
              autoComplete="email"
              label="E-Mail"
              margin="normal"
              fullWidth
              onChange={handleChange}
            />

            <TextField
              id="message"
              label="Nachricht"
              multiline
              rowsMax="20"
              margin="normal"
              fullWidth
              onChange={handleChange}
            />

            <p>
              <label>
                File:
                <br />
                <input type="file" name="attachment" onChange={handleAttachment} />
              </label>
            </p>

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
}

export default ContactPage
