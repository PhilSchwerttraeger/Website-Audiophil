import React from "react"
import PropTypes from "prop-types"
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

        <div className={headerStyles.nav}>
          <Nav />
        </div>

        <div className={headerStyles.social}>
          <Social />
        </div>

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
