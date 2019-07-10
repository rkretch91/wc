import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage'
import WecareLogo from '../images/wecarewc-logo-white.png'
import classnames from "classnames";
import MobileMenu from './Menu'

import { slide as Menu } from 'react-burger-menu'

class Header extends React.Component {
  state = {
      //This sets the state of Bulma elements
      navbarIsActive: "navbar-item dropdown is-hidden-desktop",
      prevScrollpos: function() { if (typeof window !== 'undefined') { return window.pageYOffset } },
      visible: true
  }

    //This opens the navbar dropdown
    navbarOpenDropdown = () => {
      this.setState({
        navbarIsActive: "navbar-item dropdown is-active is-hidden-desktop"
      })
    }

    //This closes the navbar dropdown
    navbarCloseDropdown = () => {
      this.setState({
        navbarIsActive: "navbar-item dropdown is-hidden-desktop"
      })
    }

    languageCheck = () => {
      if (this.props.langs[0].selected) {
        return(
          <React.Fragment>
            <Link to="/en/about/">About Us</Link>
            <a href="/en/locations/">Locations</a>
            <Link to="/en/partners/">Partners</Link>
            <Link to="/en/news/">News</Link>
            <a href="/en/about/">Impact</a>
            <button className="button"><a href="/en/about/">Get In Touch</a></button>
          </React.Fragment>
          )
      } else {
        return(
          <React.Fragment>
            <Link to="/about/">关于我们</Link>
            <Link to="/locations/">地址</Link>
            <a href="/partners/">合作公司</a>
            <Link to="/news/">新闻</Link>
            <a href="/about/">社会</a>
            <button className="button"><a href="/en/about/">联系我们</a></button>
          </React.Fragment>
          )
      }
    }

  componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
      const { prevScrollpos } = this.state;
      if (typeof window !== 'undefined') {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollpos > currentScrollPos;
      this.setState({
        prevScrollpos: currentScrollPos,
        visible
      });
      }

    };


    languageCheckMobile = () => {
      if (this.props.langs[0].selected) {
        return(
          <Menu right width={ 180 }>
            <a id="home" className="menu-item" href="/en">Home</a>
            <a id="about" className="menu-item" href="/en/about">About Us</a>
            <a id="contact" className="menu-item" href="/en/locations">Locations</a>
            <a id="contact" className="menu-item" href="/en/partners">Partners</a>
            <a id="contact" className="menu-item" href="/en/news">News</a>
            <a id="contact" className="menu-item" href="/contact">Impact</a>
            <hr/>
            <a className="menu-item--small" href="">Get In Touch</a>
          </Menu>
          )
      } else {
        return(
          <Menu right width={ 180 }>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">关于我们</a>
            <a id="contact" className="menu-item" href="/locations">地址</a>
            <a id="contact" className="menu-item" href="/partners">合作公司</a>
            <a id="contact" className="menu-item" href="/news">新闻</a>
            <a id="contact" className="menu-item" href="/contact">社会</a>
            <hr/>
            <a className="menu-item--small" href="">联系我们</a>
          </Menu>
          )
      }
    }

  render() {
    return(
      <div
        style={{
          height: '125px',
          display: 'flex',
          justifyContent: 'space-between',
          position: 'fixed',
          width: '100%',
        }} className={classnames("big-header", {
          "big-header--hidden": !this.state.visible
        })}>
        <div style={{flex: '500px'}}>
          <Link to="/">
            <div className="header-logo">
              <img src={WecareLogo} alt="wecarewc-logo" />
            </div>
          </Link>
        </div>
        <div className="nav-menu is-hidden-touch">{this.languageCheck()}</div>
        <div>{this.languageCheckMobile()}</div>
        <SelectLanguage langs={this.props.langs} />
      </div>
      )
    }
}

export default Header;
