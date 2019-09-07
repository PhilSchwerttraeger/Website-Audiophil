import React from 'react'
import Layout from '../layout/layout'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"
import Chip from "@material-ui/core/Chip"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import { navigate } from "gatsby"

import blogPostStyling from "./blogpost.module.scss"

import parse from 'html-react-parser'
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
      date(formatString: "DD. MMMM YYYY", locale: "de")
      content
      categories {
        name
      }
      acf {
        xtra_img
      }
    }
  }
`
// Parsing (search and add lightbox to post content images)
const processHTML = (data) => {
  if (data && data.content) {
    return parse(data.content, {
      replace: domNode => {
        if (domNode.attribs && domNode.attribs.class === "wp-image-2669") {
          let el =
            <div>
              <p>Jo</p>
              <div>{domNode}</div>
            </div>;
          return el;
        }
      }
    });
  }
}

const blogpost = ({ data }) => {
  let newContent = processHTML(data.wordpressPost);

  return (
    <Layout>
      <SEO title={data.wordpressPost.title} />

      <section className={blogPostStyling.container}>

        <Grid
          container
          style={{ justifyContent: "space-between" }}
          className={blogPostStyling.head}>
          <Grid item>
            <div className={blogPostStyling.back}>
              <Link to="/blog">
                <div className={blogPostStyling.alignVertically}>
                  <KeyboardArrowLeft />
                  zurück
                </div>
              </Link>
            </div>
            <h1 className={blogPostStyling.heading}>
              {data.wordpressPost.title}
            </h1>
            <span className={blogPostStyling.date}>
              {data.wordpressPost.date}
            </span>
          </Grid>
          <Grid item className={blogPostStyling.chip}>
            {console.log(data.wordpressPost.categories)}
            {data.wordpressPost.categories.map(category => {
              return (
                <Chip
                  key={category.name}
                  variant="outlined"
                  label={category.name}
                  clickable
                  onClick={() => navigate(`/${category.name}`)}
                  style={{ color: "#597F97", marginRight: "5px" }}
                />
              )
            })}
          </Grid>
        </Grid>


        <div
          className={blogPostStyling.wordpressContent}
        >{newContent}
        </div>

        <hr />

        <div className={blogPostStyling.released}>
          veröffentlicht am {data.wordpressPost.date}
        </div>

      </section>
    </Layout >
  )
}

export default blogpost