import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Layout from "../layout/layout"
import SEO from "../components/seo"

import "../layout/blog.module.scss"

/*
import blog_image1 from "../images/blog_image1.jpg"
import blog_image2 from "../images/blog_image2.jpg"
import blog_image3 from "../images/blog_image3.jpg"
*/

import BlogPostCard from "../components/blogpostcard.js"

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
              category
              excerpt
            }
            id
            fields{
              slug
            }
          }
        }
      }
    }
  `)

  console.log(posts)

  return (
    <Layout>
      <SEO title="Blog" />
      <section>
        <h1>Blog</h1>
        <Grid container spacing={3}>
          {posts.allMarkdownRemark.edges.map(post => {
            return <BlogPostCard key={post.node.id} url={post.node.fields.slug} data={post.node.frontmatter} />
          })}
        </Grid>
      </section>
    </Layout>
  )
}

export default BlogPage
