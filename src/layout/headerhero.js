import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MobileMenu from "./mobilemenu"

import headerHeroStyles from "./headerhero.module.scss"

import video from "../videos/rotation.mp4"
import fb from "../images/fb.png"
import tw from "../images/tw.png"
import ig from "../images/ig.png"
import yt from "../images/yt.png"
//import hamburger from "../images/hamburger.png"

const socialmedia = [
  {
    name: "facebook",
    url: "https://www.facebook.com/pg/audiophil.musicproduction",
    icon: fb,
  },
  {
    name: "twitter",
    url: "https://twitter.com/audiophil_",
    icon: tw,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/flippazoid/",
    icon: ig,
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/channel/UCFXHUOqNlbU1AccXNPWju6A",
    icon: yt,
  },
]

const HeroHeader = ({ siteTitle }) => (
  <header className={headerHeroStyles.heroHeader}>
    <div className={headerHeroStyles.fullscreenVideoWrap}>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>

    <div className={headerHeroStyles.headerOverlay}></div>

    <div className={headerHeroStyles.topBar}>
      <div className={headerHeroStyles.topBarContainer}>
        <Link to="/" className={headerHeroStyles.unstyledLink}>
          <div className={headerHeroStyles.logo}>
            <div className={headerHeroStyles.logoRow1}>audiophil</div>
            <div className={headerHeroStyles.logoRow2}>music production</div>
          </div>
        </Link>

        <div className={headerHeroStyles.spacer}></div>

        <div className={headerHeroStyles.menu}>
          <MobileMenu />
        </div>

        <ul className={headerHeroStyles.navList}>
          <li>
            <Link
              className={headerHeroStyles.navItem}
              to="/"
              activeStyle={{ textDecoration: "underline" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerHeroStyles.navItem}
              to="/blog"
              activeStyle={{ textDecoration: "underline" }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerHeroStyles.navItem}
              to="/contact"
              activeStyle={{ textDecoration: "underline" }}
            >
              Kontakt
            </Link>
          </li>
        </ul>

        <div className={headerHeroStyles.socialContainer}>
          {socialmedia.map(social => {
            return (
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <img
                  className={headerHeroStyles.icon}
                  src={social.icon}
                  alt={social.name}
                ></img>
              </a>
            )
          })}
        </div>
      </div>
    </div>

    <div className={headerHeroStyles.headerContent}>
      <Link to="/" className={headerHeroStyles.title}>
        <h1>{siteTitle} 2.0</h1>
        <p>work in progress</p>
      </Link>
    </div>

    <div className={headerHeroStyles.section07}>
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
