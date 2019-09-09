import React from "react"
import TextField from "@material-ui/core/TextField"
import { navigate } from 'gatsby-link'
import Button from "@material-ui/core/Button"
import Input from '@material-ui/core/Input'

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

  const handleAttachment = (e) => {
    setState({ ...state, [e.target.id]: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    console.log(state);

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
          <h1>Alles klar</h1>
          <p>Wir haben dein Formular erhalten. Wir melden uns demnächst bei dir zurück.</p>
          <p>Falls dir das nicht schnell genug gehen sollte, kannst du uns auch unter den verlinkten Social Media Plattformen per Chat erreichen.</p>
        </main>
      </section>
    </Layout>
  )
}

export default ContactPage
