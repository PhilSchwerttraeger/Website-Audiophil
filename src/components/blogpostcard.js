import React from "react"
import { Link, navigate } from "gatsby"
import Chip from '@material-ui/core/Chip'
import postStyles from "./blogpostcard.module.scss"

const BlogPostCard = (props) => {
  const { title, date, categories, image, url } = props;

  return (
    <div className={postStyles.post}>
      <div
        className={postStyles.coverimage}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "100% auto",
          //backgroundSize: "200px 200px",
          backgroundRepeat: "no-repeat",
          //borderRadius: "25px",
          minHeight: 200,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      ></div>
      <div className={postStyles.textBlock}>

        <h2><Link to={`/blog/${url}`}>
          {title}
        </Link></h2>
        <h3>{date}</h3>

        <div className={postStyles.chip}>
          {categories.map(category => {
            return (
              <Chip
                key={category.name}
                variant="outlined"
                label={category.name}
                clickable
                onClick={() => navigate(`/${category.name}`)}
                style={{ color: "#597F97" }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard
