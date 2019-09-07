import React, { useState } from 'react'
import Layout from '../layout/layout'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"
import Chip from "@material-ui/core/Chip"
import { navigate } from "gatsby"
import blogPostStyling from "./blogpost.module.scss"

import parse from 'html-react-parser'

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

// Lightbox Images
const images = [];

// Parsing (search and add lightbox to post content images)
const processHTML = (data, setIsOpen, setPhotoIndex) => {
  if (data && data.content) {
    let newContent = data.content;

    newContent = parse(newContent, {
      replace: domNode => {
        if (domNode.attribs && domNode.attribs.class === "blocks-gallery-item") {
          domNode.children[0].children[0].attribs.href = "";
          domNode.children[0].attribs.tabIndex = "1";
          domNode.children[0].children[0].attribs.style = "cursor: pointer";
          domNode.children[0].children[0].attribs.className = blogPostStyling.postImage;

          let src = domNode.children[0].children[0].attribs.src;
          images.push(src);
          let pos = images.indexOf(src);

          domNode.children[0].children[0].attribs.onClick = () => {
            setPhotoIndex(pos);
            setIsOpen(true);
          }
        }

        if (domNode.attribs && domNode.attribs.class === "wp-block-image") {
          domNode.children[0].attribs.href = "";
          domNode.attribs.tabIndex = "1";
          domNode.children[0].attribs.style = "cursor: pointer"
          domNode.children[0].attribs.className = "postImage";

          let src = domNode.children[0].attribs.src;
          images.push(src);
          let pos = images.indexOf(src);

          domNode.children[0].attribs.onClick = () => {
            setPhotoIndex(pos);
            setIsOpen(true);
          }
        }
      }
    });
    return newContent;
  }
}

// 

const blogpost = ({ data }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  let newContent = processHTML(data.wordpressPost, setIsOpen, setPhotoIndex);

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

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}

      </section>
    </Layout >
  )
}

export default blogpost