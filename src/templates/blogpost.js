import React from 'react'
import Layout from '../layout/layout'
import { graphql } from 'gatsby'

export const query = graphql`
  query(
    $slug: Date!
  ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const blogpost = ({ data }) => {
  return (
    <div>
      <Layout>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <h2>{data.markdownRemark.frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
      </Layout>
    </div>
  )
}

export default blogpost