import React from 'react'
import Layout from '../layout/layout'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"

import blogPostStyling from "./blogpost.module.scss"

export const query = graphql`
  query(
    $slug: String!
  ) {
    wordpressPost (
      slug: {
        eq: $slug
      }
    ) {
      title
      date(formatString: "DD. MMMM YYYY", locale: "de")
      content
    }
  }
`

const blogpost = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.wordpressPost.title} />

      <section className={blogPostStyling.container}>

        <div
          className={blogPostStyling.head}>
          <Grid item>
            <h1 className={blogPostStyling.heading}>
              {data.wordpressPost.title}
            </h1>
          </Grid>
          <Grid item>
            <span className={blogPostStyling.date}>
              {data.wordpressPost.date}
            </span>
          </Grid>
        </div>


        <div
          dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
          className={blogPostStyling.wordpressContent}
        >
        </div>

      </section>
    </Layout >
  )
}

export default blogpost