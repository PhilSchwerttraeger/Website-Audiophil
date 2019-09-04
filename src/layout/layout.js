import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import HeroHeader from "./headerhero"
import Footer from "./footer"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children, type }) => {
  if (typeof window !== 'undefined') {
    // Make scroll behavior of internal links smooth
    require('smooth-scroll')('a[href*="#"]');
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let header;
  type === "hero"
    ? header = <HeroHeader siteTitle={data.site.siteMetadata.title} />
    : header = <Header siteTitle={data.site.siteMetadata.title} />

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        {header}
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
