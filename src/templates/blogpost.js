import React from 'react'
import Layout from '../layout/layout'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"
import Chip from "@material-ui/core/Chip"
import { navigate } from "gatsby"
import blogPostStyling from "./blogpost.module.scss"

import parse, { domToReact } from 'html-react-parser'

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

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
    }
  }
`
// Parsing (search and add lightbox to post content images)
const processHTML = (data) => {
  if (data && data.content) {
    return parse(data.content, {
      replace: domNode => {
        if (domNode.attribs && domNode.attribs.class === "wp-image-2669") {
          let img = React.createElement(domNode.name, domNode.attribs);
          let lightbox =
            <Lightbox
              mainSrc={domNode.attribs.src}
            >

            </Lightbox>;
          return React.createElement("div", {}, [img, lightbox]);
        }
      }
    });
  }
}

// 

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
                <span>&#x2B11; zurück</span>
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