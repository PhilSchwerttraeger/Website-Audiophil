import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () =>
  <footer className={footerStyles.footer}>
    © {new Date().getFullYear()}
  </footer>

export default Footer
