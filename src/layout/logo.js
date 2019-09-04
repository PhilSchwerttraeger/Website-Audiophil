import React from 'react'
import { Link } from 'gatsby'
import logoStyles from './logo.module.scss'

export default function logo() {
  return (
    <Link to="/" className={logoStyles.unstyledLink}>
      <div className={logoStyles.logo}>
        <div className={logoStyles.logoRow1}>audiophil</div>
        <div className={logoStyles.logoRow2}>music production</div>
      </div>
    </Link>
  )
}
