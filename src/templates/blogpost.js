import React from 'react'
import Layout from '../layout/layout'
import { graphql } from 'gatsby'

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
      date
      content
    }
  }
`

const blogpost = ({ data }) => {
  return (
    <div>
      <Layout>
        <h1>{data.wordpressPost.title}</h1>
        <h2>{data.wordpressPost.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}></div>
      </Layout>
    </div>
  )
}

export default blogpost