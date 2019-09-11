import React from "react"
import footerStyles from "./footer.module.scss"
import { Link } from 'gatsby'
import Logo from './logo'
import Social from './social'

const Footer = () =>
  <footer className={footerStyles.footer}>
    <div className={footerStyles.container}>
      <section className={footerStyles.sectionA}>
        <Logo />
      </section>
      <section className={footerStyles.sectionB}>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Kontakt
            </Link>
          </li>
        </ul>
      </section>

      <section className={footerStyles.sectionC}>
        <ul>
          <li>
            <Link to="/imprint">
              Impressum
            </Link>
          </li>
          <li>
            <Link to="/privacy">
              Datenschutz
            </Link>
          </li>
        </ul>
      </section>

      <section className={footerStyles.sectionD}>
        <Social />
        <p>
          © {new Date().getFullYear()} - Alle Rechte vorbehalten <br />
          Audiophil music production<br />
          Philipp Schwetschenau
        </p>
      </section>

      <section className={footerStyles.sectionE}>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Kontakt
            </Link>
          </li>
          <li>
            <Link to="/impressum">
              Impressum
            </Link>
          </li>
          <li>
            <Link to="/datenschutz">
              Datenschutz
            </Link>
          </li>
        </ul>
      </section>

    </div>
  </footer>

export default Footer
