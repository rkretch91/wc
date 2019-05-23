import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage'

import WecareLogo from '../images/wecarewc-logo-white.png'
import QR from '../images/wecarewc_qrcode.png'

class Footer extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="footer columns is-mobile is-multiline">
            <div className="mailer-footer column is-two-fifths-desktop is-half-mobile">
              <h1>Mailing List</h1>
              <div className="field">
                <label className="label">Email</label>
                <div className="control" style={{paddingBottom: '10px'}} >
                  <input className="input" type="email" placeholder="e.g. ilovetoilets@gmail.com" />
                </div>
                <div className="control">
                  <button className="button" id="grey">Submit</button>
                </div>
              </div>
            </div>
            <div className="nav-menu-footer column is-one-fifth-desktop is-half-mobile">
              <div className="center-that-text">
                <h1>Menu</h1>
                <a href="#"><p>About Us</p></a>
                <a href="#"><p>Location</p></a>
                <a href="#"><p>Partners</p></a>
                <a href="#"><p>News</p></a>
                <a href="#"><p>Impact</p></a>
                <a href="#"><p>Careers</p></a>
              </div>
            </div>
            <div className="wechat-icon-footer column is-one-fifth-desktop is-half-mobile">
              <h1>Get In Touch</h1>
              <h2>WeChat</h2>
              <img src={QR} alt="WeCare WC Qr Code"/>
            </div>
            <div className="address-phone-footer column is-one-fifth-desktop is-half-mobile">
              <h2>Address</h2>
              <p>Wework Nanjing West Road<br/>819 Nanjing West Road<br/>(near Taixing Road)<br/>3rd Floor<br/>200040 Shanghai P.R. China</p>
              <br/>
              <h2>Customer Service</h2>
              <p><span id="bold">Phone:</span> +86(0)21-51853537</p>
              <p><span id="bold">Email:</span> curious@wecarewc.com</p>
              <br/>
              <h2>Other Inquires</h2>
              <button className="button is-primary">Get In Touch</button>
            </div>
        </div>
        <div className="copyright has-text-centered">
          <p>{(new Date().getFullYear())} WeCare WC. All Rights Reserved.</p>
        </div>
      </React.Fragment>
      )
    }
}

export default Footer;
