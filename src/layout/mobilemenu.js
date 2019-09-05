import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import mobileMenuStyles from "./mobilemenu.module.scss"


class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openNav() {
    console.log(this.state);
    this.setState({
      open: true,
      width: "100%"
    });
  }

  closeNav() {
    console.log(this.state);
    this.setState({
      open: false,
      width: "0%"
    });
  }

  render() {
    return (
      <div>
        <div id="myNav" className={mobileMenuStyles.overlay}>

          <button className={mobileMenuStyles.closebtn} onClick={this.closeNav.bind(this)}>&times;</button>

          <div className={mobileMenuStyles.overlayContent} style={{ width: this.state.width }}>
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

        <button
          onClick={this.openNav.bind(this)}
        >
          open
        </button>
      </div >



    )
  }
}

export default MobileMenu
