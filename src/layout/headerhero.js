import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerHeroStyles from "./headerhero.module.scss"

import video from "../videos/rotation.mp4"

const HeroHeader = ({ siteTitle }) => (
  <header className={headerHeroStyles.heroHeader}>
    <div className={headerHeroStyles.fullscreenVideoWrap}>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>

    <div className={headerHeroStyles.headerOverlay}></div>

    <nav>
      <ul className={headerHeroStyles.navList}>
        <li>
          <Link className={headerHeroStyles.navItem} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={headerHeroStyles.navItem} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className={headerHeroStyles.navItem} to="/contact">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>

    <div className={headerHeroStyles.headerContent}>
      <h1>
        <Link to="/" className={headerHeroStyles.title}>
          {siteTitle} 2.0
        </Link>
      </h1>
      <p>work in progress</p>
    </div>

    <div className={headerHeroStyles.section07}>
      <a href="#firstsection"><span></span><span></span><span></span></a>
    </div>

  </header>
)

HeroHeader.propTypes = {
  siteTitle: PropTypes.string
}

HeroHeader.defaultProps = {
  siteTitle: ""
}

export default HeroHeader
