import React from "react"
import footerStyles from "./footer.module.scss"
import Grid from '@material-ui/core/Grid'
import { Link } from 'gatsby'
import Logo from './logo.js'

const Footer = () =>
  <footer className={footerStyles.footer}>
    <Grid container className={footerStyles.container}>
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <ul>
          <li>hi</li>
          <li>das</li>
          <li>dfg</li>
        </ul>
      </Grid>

      <Grid item>
        <ul>
          <li>hi</li>
          <li>das</li>
          <li>dfg</li>
        </ul>
      </Grid>

      <Grid item>

      </Grid>

      <Grid item>

        © {new Date().getFullYear()}
      </Grid>
    </Grid>
  </footer>

export default Footer
