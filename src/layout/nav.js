import React from 'react'
import navStyles from './nav.module.scss'
import { Link } from 'gatsby'

export default function nav() {
  return (
    <ul className={navStyles.container}>
      <li>
        <Link
          className={navStyles.navItem}
          to="/"
          activeStyle={{ textDecoration: "underline" }}
        >
          Home
      </Link>
      </li>
      <li>
        <Link
          className={navStyles.navItem}
          to="/blog"
          activeStyle={{ textDecoration: "underline" }}
        >
          Blog
      </Link>
      </li>
      <li>
        <Link
          className={navStyles.navItem}
          to="/contact"
          activeStyle={{ textDecoration: "underline" }}
        >
          Kontakt
      </Link>
      </li>
    </ul>
  )
}
