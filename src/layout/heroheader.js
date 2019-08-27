import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"

const HeroHeader = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/" className={headerStyles.title}>
        {siteTitle}
      </Link>
    </h1>

    <nav>
      <ul className={headerStyles.navList}>
        <li>
          <Link className={headerStyles.navItem} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} to="/contact">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

HeroHeader.propTypes = {
  siteTitle: PropTypes.string
}

HeroHeader.defaultProps = {
  siteTitle: ""
}

export default HeroHeader
