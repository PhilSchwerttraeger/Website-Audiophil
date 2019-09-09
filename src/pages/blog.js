import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../components/seo"

import blogStyles from "./blog.module.scss"

import BlogPostCard from "../components/blogpostcard.js"

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query{
      allWordpressPost{
        totalCount
        edges{
          node{
            title
            date(formatString: "DD. MMMM YYYY", locale: "de")
            excerpt
            slug
            id
            categories {
              name
              slug
            }
            acf {
              xtra_img {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 710) {
                      src
                    }
                  }
                }
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
        <div className={blogStyles.head}>
          <h1>Blog</h1>
          <div className={blogStyles.postsTotal}>Posts gesamt: {posts.allWordpressPost.totalCount}</div>
        </div>
        <div className={blogStyles.grid}>
          {posts.allWordpressPost.edges.map(post => {
            //console.log(post.node);
            return (
              <BlogPostCard
                key={post.node.id}
                url={post.node.slug}
                title={post.node.title}
                date={post.node.date}
                categories={post.node.categories}
                image={post.node.acf.xtra_img ? post.node.acf.xtra_img.localFile.childImageSharp.fluid.src : null}
                className={blogStyles.gridItem}
              />
            )
          })}
        </div>

        <hr />
        <div className={blogStyles.released}>
          Posts gesamt: {posts.allWordpressPost.totalCount}
        </div>

      </main>
    </Layout>
  )
}

export default BlogPage
