import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MobileMenu from "./mobilemenu"

import headerStyles from "./header.module.scss"

import Logo from './logo'
import Nav from './nav'
import Social from './social'


const HeroHeader = ({ siteTitle }) => (
  <header className={headerStyles.normalHeader}>
    <div className={headerStyles.topBar}>
      <div className={headerStyles.topBarContainer}>
        <Logo />

        <div className={headerStyles.spacer}></div>

        <div className={headerStyles.menu}>
          <MobileMenu />
        </div>

        <Nav />

        <Social />

      </div>
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
