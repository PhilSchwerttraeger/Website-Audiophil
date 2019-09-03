import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Layout from "../layout/layout"
import SEO from "../components/seo"

import "../layout/blog.module.scss"

import blog_image1 from "../images/blog_image1.jpg"
import blog_image2 from "../images/blog_image2.jpg"
import blog_image3 from "../images/blog_image3.jpg"

import BlogPostCard from "../components/blogpostcard.js"

/*
const posts = [
  {
    id: 1,
    title: "Garage",
    date: "22. August 2019",
    category: "Update",
    excerpt:
      "Wir haben zuletzt oft Tage einlegen müssen, an denen wir intern nur am Umräumen waren, um weitermachen zu können. Da der Platz im Gebäude je mehr wir bauen zunehmend weniger wird, haben...",
    image: blog_image1,
    url: "/",
  },
  {
    id: 2,
    title: "Aufnahmeraum-Wände",
    date: "21. August 2019",
    category: "Update",
    excerpt:
      "Die Wände des Aufnahmeraums stehen. Wie bereits im letzten Blogpost beschrieben, haben wir die Wandmodule mit Hilfe des Trebuchets an ihre finalen Positionen transportiert und auf die...",
    image: blog_image2,
    url: "/",
  },
  {
    id: 3,
    title: "Aufstellung Wandmodule",
    date: "27. Juli 2019",
    category: "Update",
    excerpt:
      "Wir befinden uns mitten in der Aufstellphase der Wandmodule. Wir haben im Aufnahmeraum angefangen und bislang etwa die Hälfte des Raums geschafft. Es ist schön...",
    image: blog_image3,
    url: "/",
  },
]
*/

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
            return <BlogPostCard key={post.node.id} data={post.node.frontmatter} />
          })}
        </Grid>
      </section>
    </Layout>
  )
}

export default BlogPage
