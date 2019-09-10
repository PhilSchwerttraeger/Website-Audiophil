import React from "react"
import TextField from "@material-ui/core/TextField"
import { navigate } from 'gatsby-link'
import Button from "@material-ui/core/Button"
import Input from '@material-ui/core/Input'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

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
    setState({ ...state, [e.target.id]: e.target.value })
    console.log(state);
  }

  const handleShowFileUpload = (e) => {
    setState({ ...state, [e.target.id]: e.target.checked })
    console.log(state);
  }

  const handleAttachment = (e) => {
    setState({ ...state, [e.target.id]: e.target.files[0] })
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
            netlify="true"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            action="/thanks"
          >
            <input
              type="hidden"
              name="form-name"
              value="contact"
            />

            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </p>

            <TextField
              id="name"
              name="name"
              label="Name"
              margin="normal"
              fullWidth
              onChange={handleChange}
            />

            <TextField
              id="band"
              name="band"
              label="Künstler-/Band-/Projektname"
              margin="normal"
              fullWidth
              onChange={handleChange}
            />

            <TextField
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              label="E-Mail-Adresse"
              margin="normal"
              fullWidth
              onChange={handleChange}
            />

            <TextField
              id="message"
              name="message"
              label="Nachricht"
              multiline
              rowsMax="20"
              margin="normal"
              fullWidth
              onChange={handleChange}
            />


            <div style={{ padding: "16px 0px" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="hasFileUpload"
                    onChange={handleShowFileUpload}
                    color="primary"
                  />
                }
                label="File Upload"
              />
            </div>


            {state.hasFileUpload ?
              <div style={{ padding: "16px 0px" }}>
                <Input
                  name="attachment"
                  id="attachment"
                  type="file"
                  onChange={handleAttachment}
                />
                <div style={{ fontSize: "13px", marginTop: "16px" }}>(Dateien größer als 4MB bitte per <a
                  href="https://www.wetransfer.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  WeTransfer
                </a>, <a
                    href="https://www.dropbox.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Dropbox
                </a>
                  , o.ä. übermitteln)</div>
              </div> : <></>
            }

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
