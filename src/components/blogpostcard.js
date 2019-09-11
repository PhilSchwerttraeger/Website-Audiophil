import React from "react"
import { Link, navigate } from "gatsby"
import Chip from '@material-ui/core/Chip'
import postStyles from "./blogpostcard.module.scss"

const BlogPostCard = (props) => {
  const { title, date, categories, image, url } = props;

  /*
  if (image) {
    console.log(image);
  }
  */

  return (
    <div className={postStyles.post}>
      <Link to={`/blog/${url}`}>
        <div
          className={postStyles.coverimage}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "100% auto",
            //backgroundSize: "200px 200px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            //borderRadius: "25px",
            minHeight: 250,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,

          }}
        ></div>
      </Link>
      <div className={postStyles.textBlock}>
        <h2>
          <Link to={`/blog/${url}`} dangerouslySetInnerHTML={{ __html: title }}>
          </Link>
        </h2>
        <h3>{date}</h3>

        <div>
          {categories.map(category => {
            return (
              <Chip
                key={category.name}
                variant="outlined"
                label={<div dangerouslySetInnerHTML={{ __html: category.name }} ></div>}
                clickable
                onClick={() => navigate(`/category/${category.slug}`)}
                style={{ color: "#597F97" }}
                className={postStyles.chip}
              />
            )
          })}
        </div>
      </div>
    </div >
  )
}

export default BlogPostCard
