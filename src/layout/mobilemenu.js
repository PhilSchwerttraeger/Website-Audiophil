import React from "react"
import { Link } from "gatsby"
import mobileMenuStyles from "./mobilemenu.module.scss"
import Hamburger from '../images/hamburger.png'

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openNav() {
    this.setState({
      open: true,
      width: "100%"
    });
    document.body.classList.add("fixedPosition");
  }

  closeNav() {
    this.setState({
      open: false,
      width: "0%"
    });
    document.body.classList.remove("fixedPosition");
  }

  render() {
    return (
      <div>
        <div
          id="myNav"
          className={mobileMenuStyles.overlay}
          style={{ width: this.state.width }}
        >
          <span
            className={mobileMenuStyles.closebtn}
            onClick={this.closeNav.bind(this)}
          >
            &times;
          </span>
          <div className={mobileMenuStyles.overlayContent}>
            <Link id="home" className="menu-item" to="/">
              Home
            </Link>
            <Link id="blog" className="menu-item" to="/blog">
              Blog
            </Link>
            <Link id="contact" className="menu-item" to="/contact">
              Kontakt
            </Link>
          </div>
        </div>

        <span onClick={this.openNav.bind(this)} style={{ cursor: "pointer" }}>
          <img src={Hamburger} alt="menu"></img>
        </span>
      </div >
    )
  }
}

export default MobileMenu
