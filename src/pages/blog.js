import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Layout from "../layout/layout"
import SEO from "../components/seo"

import blogStyles from "./blog.module.scss"

/*
import blog_image1 from "../images/blog_image1.jpg"
import blog_image2 from "../images/blog_image2.jpg"
import blog_image3 from "../images/blog_image3.jpg"
*/

import BlogPostCard from "../components/blogpostcard.js"

const BlogPage = () => {

  const posts = useStaticQuery(graphql`
    query{
      allWordpressPost{
        edges{
          node{
            title
            date(formatString: "DD. MMMM YYYY", locale: "de")
            excerpt
            slug
            id
          }
        }
      }
    }    
  `)

  console.log(posts)

  return (
    <Layout>
      <SEO title="Blog" />
      <section className={blogStyles.section}>
        <h1>Blog</h1>
        <Grid container spacing={3}>
          {posts.allWordpressPost.edges.map(post => {
            return <BlogPostCard key={post.node.id} url={post.node.slug} data={post.node} />
          })}
        </Grid>
      </section>
    </Layout>
  )
}

export default BlogPage
