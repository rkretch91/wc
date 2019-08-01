import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage'
import WecareLogo from '../images/wecarewc-logo-white.png'
import classnames from "classnames";

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
            <Link to="/en/locations/">Locations</Link>
            <Link to="/en/partners/">Partners</Link>
            <Link to="/en/news/">News</Link>
            <a href="/en/about/">Impact</a>
            <button className="button"><Link to="/en/contact/">Get In Touch</Link></button>
          </React.Fragment>
          )
      } else {
        return(
          <React.Fragment>
            <Link to="/about/">关于我们</Link>
            <Link to="/locations/">地址</Link>
            <Link to="/partners/">合作公司</Link>
            <Link to="/news/">新闻</Link>
            <a href="/about/">社会</a>
            <button className="button"><Link to="/contact/">联系我们</Link></button>
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
            <Menu width={ '70%' }>
              <Link id="home" className="menu-item" to="/en">Home</Link>
              <Link id="about" className="menu-item" to="/en/about">About Us</Link>
              <Link id="location" className="menu-item" to="/en/locations">Locations</Link>
              <Link id="partners" className="menu-item" to="/en/partners">Partners</Link>
              <Link id="news" className="menu-item" to="/en/news">News</Link>
              <a id="contact" className="menu-item" to="/en/news">Impact</a>
              <hr/>
              <Link className="menu-item--small" to="/en/contact/">Get In Touch</Link>
            </Menu>
          )
      } else {
        return(
            <Menu width={ '70%' }>
              <Link id="home" className="menu-item" to="/">Home</Link>
              <Link id="about" className="menu-item" to="/about">关于我们</Link>
              <Link id="contact" className="menu-item" to="/locations">地址</Link>
              <Link id="contact" className="menu-item" to="/partners">合作公司</Link>
              <Link id="contact" className="menu-item" to="/news">新闻</Link>
              <a id="contact" className="menu-item" href="/contact">社会</a>
              <hr/>
              <Link className="menu-item--small" to="/contact">联系我们</Link>
            </Menu>
          )
      }
    }

  render() {
    return(
      <React.Fragment>
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
        <SelectLanguage langs={this.props.langs} />
      </div>
      <div style={{
          zIndex: '1000'}}>{this.languageCheckMobile()}</div>
      </React.Fragment>
      )
    }
}

export default Header;
