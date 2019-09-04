import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Layout from "../layout/layout"
import SEO from "../components/seo"

import blogStyles from "./blog.module.scss"

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

  console.log(posts);

  return (
    <Layout>
      <main className={blogStyles.main}>
        <SEO title="Blog" />
        <h1>Blog</h1>
        <Grid container spacing={3}>
          {posts.allWordpressPost.edges.map(post => {
            return <BlogPostCard key={post.node.id} url={post.node.slug} data={post.node} />
          })}
        </Grid>
      </main>
    </Layout>
  )
}

export default BlogPage
