import React from "react";
import { Link } from "@reach/router";
import Logo from "../assets/images/logo_dark.svg";
import "./navbarS.css";

class Navbar extends React.Component {
  state = {
    showUserMenu: false,
    showMainMenu: false
  };
  componentDidMount() {
    let scrollHeight = window.scrollY;
    let header = document.getElementById("header");
    if (window.scrollY === 0) {
      header.classList.remove("slide-up");
      header.classList.add("slide-up-top");
    }
    window.onscroll = function() {
      if (window.scrollY > scrollHeight) {
        header.classList.add("slide-up");
        header.classList.remove("slide-up-top");
      } else if (window.scrollY < scrollHeight) {
        header.classList.remove("slide-up-top");
        header.classList.remove("slide-up");
      }
      if (window.scrollY === 0) {
        header.classList.remove("slide-up");
        header.classList.add("slide-up-top");
      }
      scrollHeight = window.scrollY;
    };
  }
  showUserMenu = () => {
    let temp = this.state.showUserMenu;
    this.setState({
      showUserMenu: !temp
    });
  };
  showMainMenu = () => {
    let temp = this.state.showMainMenu;
    this.setState({
      showMainMenu: !temp
    });
  };
  stopPropagation = e => {
    e.stopPropagation();
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbarTop">
          <p>
            <span>FREE DOMESTIC SHIPPING</span> ON ORDERS ABOVE ₹500
          </p>
        </div>
        <header id="header" className="navbarBottom" role="banner">
          <button className="main-menu-button" onClick={this.showMainMenu}>
            <div className="main-menu-button-a">
              <p />
              <p />
              <p />
            </div>
          </button>
          <div className="nav-links">
            <Link to="/about_us">
              <p>ABOUT US</p>
            </Link>
            <Link to="/products">
              <p>MEDICINES</p>
            </Link>
            <Link to="/contact_us">
              <p>CONTACT</p>
            </Link>
          </div>
          <Link
            to="/"
            style={{
              textDecoration: "none ",
              flex: 1
            }}
          >
            <div className="logo">
              <img src={Logo} alt="SRAS Medicines" />
              <h2>SRAS Medicines</h2>
            </div>
          </Link>
          <div className="rightLinks" />
        </header>
        <div
          onKeyPress={() => null}
          className={
            this.state.showMainMenu
              ? "main-menu-container-hidden main-menu-container"
              : "main-menu-container-hidden"
          }
          aria-hidden
          role="button"
          onClick={() => this.showMainMenu()}
        >
          <button
            className={
              this.state.showMainMenu
                ? "main-menu-hidden main-menu"
                : "main-menu-hidden"
            }
            onClick={e => this.stopPropagation(e)}
          >
            <Link to="/about_us">ABOUT US</Link>
            <Link to="/products">AYURVEDIC MEDICINES</Link>
            <Link to="/contact_us">CONTACT US</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
