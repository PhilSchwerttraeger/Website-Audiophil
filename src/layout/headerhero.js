import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"
import Logo from './logo'
import Nav from './nav'
import Social from './social'
import MobileMenu from "./mobilemenu"

import video from "../videos/rotation.mp4"

const HeroHeader = ({ siteTitle }) => (
  <header className={headerStyles.heroHeader}>
    <div className={headerStyles.fullscreenVideoWrap}>
      <video autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </div>

    <div className={headerStyles.headerOverlay}></div>

    <div className={headerStyles.topBarHero}>
      <div className={headerStyles.topBarContainer}>
        <Logo />

        <div className={headerStyles.spacer}></div>

        <div className={headerStyles.menu}>
          <MobileMenu />
        </div>

        <div className={headerStyles.nav}>
          <Nav />
        </div>

        <div className={headerStyles.social}>
          <Social />
        </div>

      </div>
    </div>

    <div className={headerStyles.headerContent}>
      <Link to="/" className={headerStyles.title}>
        <h1>{siteTitle} 2.0</h1>
        <p>work in progress</p>
      </Link>
    </div>

    <div className={headerStyles.section07}>
      <a href="#section-a">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  </header>
)

HeroHeader.propTypes = {
  siteTitle: PropTypes.string,
}

HeroHeader.defaultProps = {
  siteTitle: "",
}

export default HeroHeader
