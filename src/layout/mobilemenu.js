import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

class MobileMenu extends React.Component {
  render() {
    var styles = {
      bmBurgerButton: {
        position: "relative",
        width: "30px",
        height: "24px",
        zIndex: 1,
      },
      bmBurgerBars: {
        background: "white",
      },
      bmBurgerBarsHover: {
        background: "#a90000",
      },
      bmCrossButton: {
        margin: "20px",
        height: "24px",
        width: "24px",
      },
      bmCross: {
        background: "#bdc3c7",
      },
      bmMenuWrap: {
        position: "fixed",
        top: "0px",
        height: "100%",
        zIndex: 3,
      },
      bmMenu: {
        background: "#49697B",
        padding: "2.5em 1.5em 0",
        fontSize: "1.3rem",
      },
      bmMorphShape: {
        fill: "#373a47",
      },
      bmItemList: {
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
      },
      bmItem: {
        color: "white",
        display: "inline-block",
        margin: "20px 0px",
        textDecoration: "none",
      },
    }

    return (
      <Menu right noOverlay styles={styles}>
        <Link id="home" className="menu-item" to="/">
          Home
        </Link>
        <Link id="blog" className="menu-item" to="/blog">
          About
        </Link>
        <Link id="contact" className="menu-item" to="/contact">
          Contact
        </Link>
      </Menu>
    )
  }
}

export default MobileMenu
