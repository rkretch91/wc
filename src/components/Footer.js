import React from 'react'
import Link from 'gatsby-link'

import QR from '../images/wecarewc_qrcode.png'

class Footer extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="footer columns is-mobile is-multiline">
            <div className="mailer-footer column is-two-fifths-desktop is-half-mobile">
              <h1>Mailing List</h1>
              <form name="Mailer Form" method="POST" data-netlify="true" action="/thank-you">
                <input type="hidden" name="form-name" value="Mailer Form" />
                <div className="field">
                  <div className="control" style={{paddingBottom: '10px'}} >
                    <input className="input" type="email" placeholder="e.g. ilovetoilets@gmail.com" name="email" />
                  </div>
                  <div className="control">
                    <button className="button" id="grey">Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="nav-menu-footer column is-one-fifth-desktop is-half-mobile">
              <div className="center-that-text">
                <h1>Menu</h1>
                <Link to="/en/about/"><p>About Us</p></Link>
                <Link to="/en/locations/"><p>Locations</p></Link>
                <Link to="/en/partners/"><p>Partners</p></Link>
                <Link to="/en/news/"><p>News</p></Link>
                <Link to="/en/impact/"><p>Impact</p></Link>
                <Link to="/en/contact/"><p>Careers</p></Link>
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
              <Link to="contact"><button className="button is-primary">Get In Touch</button></Link>
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
