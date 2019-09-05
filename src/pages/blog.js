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
            categories {
              name
            }
            _links {
              wp_featuredmedia {
                href
              }
            }
          }
        }
      }
    }    
  `)

  return (
    <Layout>
      <main className={blogStyles.main}>
        <SEO title="Blog" />
        <h1>Blog</h1>
        <Grid container spacing={3}>
          {posts.allWordpressPost.edges.map(post => {
            return (
              <BlogPostCard
                key={post.node.id}
                url={post.node.slug}
                title={post.node.title}
                date={post.node.date}
                categories={post.node.categories}
                image={post.node._links.wp_featuredmedia}

              />
            )
          })}
        </Grid>
      </main>
    </Layout>
  )
}

export default BlogPage
