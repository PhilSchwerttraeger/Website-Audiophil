import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../components/seo"

import blogStyles from "../pages/blog.module.scss"

import BlogPostCard from "../components/blogpostcard.js"

export const posts = graphql`
  query(
    $slug: String!
  ){
    allWordpressPost(
      filter: {
        categories: {
          elemMatch: {
            slug: {
              eq: $slug
            }
          }
        }
      }
    )
    {
      edges {
        node {
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
      totalCount
    }
    wordpressCategory(
      slug: {
        eq: $slug
      }
    ){
      name
    }
  }    
`

const CategoryPage = ({ data }) => {
  console.log(data);
  console.log(data.wordpressCategory.name);
  return (
    <Layout>
      <main className={blogStyles.main}>
        <SEO title={`Kategorie: ${data.wordpressCategory.name}`} />
        <div className={blogStyles.head}>
          <div>
            <h1>Blog</h1>
            <h2>{`Kategorie: ${data.wordpressCategory.name}`}</h2>
          </div>
          <div className={blogStyles.postsTotal}>Posts gesamt: {data.allWordpressPost.totalCount}</div>
        </div>
        <div className={blogStyles.grid}>
          {data.allWordpressPost.edges.map(post => {
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
          Posts gesamt: {data.allWordpressPost.totalCount}
        </div>

      </main>
    </Layout>
  )
}

export default CategoryPage
