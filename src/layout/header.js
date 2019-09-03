import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MobileMenu from "./mobilemenu"

import headerStyles from "./header.module.scss"

import fb from "../images/fb.png"
import tw from "../images/tw.png"
import ig from "../images/ig.png"
import yt from "../images/yt.png"

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
  <header className={headerStyles.normalHeader}>
    <div className={headerStyles.topBar}>
      <div className={headerStyles.topBarContainer}>
        <Link to="/" className={headerStyles.unstyledLink}>
          <div className={headerStyles.logo}>
            <div className={headerStyles.logoRow1}>audiophil</div>
            <div className={headerStyles.logoRow2}>music production</div>
          </div>
        </Link>

        <div className={headerStyles.spacer}></div>

        <div className={headerStyles.menu}>
          <MobileMenu />
        </div>

        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/"
              activeStyle={{ textDecoration: "underline" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/blog"
              activeStyle={{ textDecoration: "underline" }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/contact"
              activeStyle={{ textDecoration: "underline" }}
            >
              Kontakt
            </Link>
          </li>
        </ul>

        <div className={headerStyles.socialContainer}>
          {socialmedia.map(social => {
            return (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={headerStyles.icon}
                  src={social.icon}
                  alt={social.name}
                ></img>
              </a>
            )
          })}
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
