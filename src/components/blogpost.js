import React from "react"
import postStyles from "../layout/blogpost.module.scss"
import { Link } from "@material-ui/core"

const BlogPost = data => {
  const { title, date, category, excerpt, image, url } = data.data

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
        <Link to={url}>
          <h2>{title}</h2>
        </Link>
        <h3>{date}</h3>
        <h4>{category}</h4>
        <p>{excerpt}</p>
      </div>
    </div>
  )
}

export default BlogPost
