import React from 'react'
import Layout from '../layout/layout'
import { graphql } from 'gatsby'
import SEO from "../components/seo"

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
      date(formatString:"MMMM Do, YYYY")
      content
    }
  }
`

const blogpost = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.wordpressPost.title} />
      <h1>{data.wordpressPost.title}</h1>
      <h2>{data.wordpressPost.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}></div>
    </Layout>
  )
}

export default blogpost