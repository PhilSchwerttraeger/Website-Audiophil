import React from 'react'
import navStyles from './nav.module.scss'
import { Link } from 'gatsby'

const pages = [
  {
    label: "HOME",
    link: "/"
  },
  {
    label: "BLOG",
    link: "/blog"
  },
  {
    label: "KONTAKT",
    link: "/contact"
  }
]

export default function nav() {
  return (
    <ul className={navStyles.container}>
      {pages.map(page => {
        return (
          <li>
            <Link
              className={navStyles.navItem}
              to={page.link}
              activeClassName={navStyles.itemActive}
            >
              {page.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
