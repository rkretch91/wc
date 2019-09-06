import React from 'react'
import Link from 'gatsby-link'

import QR from '../images/wecarewc_qrcode.png'

class Footer extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="footer columns is-mobile is-multiline">
            <div className="mailer-footer column is-two-fifths-desktop is-half-mobile">
              <h1>订阅</h1>
              <form name="Mailer Form" method="POST" data-netlify="true" action="/thank-you">
                <input type="hidden" name="form-name" value="Mailer Form" />
                <div className="field">
                  <div className="control" style={{paddingBottom: '10px'}} >
                    <input className="input" type="email" placeholder="例如. ilovetoilets@gmail.com" name="email" />
                  </div>
                  <div className="control">
                    <button className="button" id="grey">提交</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="nav-menu-footer column is-one-fifth-desktop is-half-mobile">
              <div className="center-that-text">
                <h1>菜单</h1>
                <Link to="/en/about/"><p>关于我们</p></Link>
                <Link to="/en/locations/"><p>我们在哪</p></Link>
                <Link to="/en/partners/"><p>合作伙伴</p></Link>
                <Link to="/en/news/"><p>最新消息</p></Link>
                <Link to="/en/impact/"><p>社会责任</p></Link>
                <Link to="/en/contact/"><p>职业发展</p></Link>
              </div>
            </div>
            <div className="wechat-icon-footer column is-one-fifth-desktop is-half-mobile">
              <h1>联系我们</h1>
              <h2>微信</h2>
              <img src={QR} alt="WeCare WC Qr Code"/>
            </div>
            <div className="address-phone-footer column is-one-fifth-desktop is-half-mobile">
              <h2>地址</h2>
              <p>中国上海市黄浦区<br/>南京西路819号3楼</p>
              <br/>
              <h2>客服</h2>
              <p><span className="bold">电话：</span> +86(0)21-51853537</p>
              <p><span className="bold">邮箱：</span> curious@wecarewc.com</p>
              <br/>
              <h2>其他需求</h2>
              <Link to="contact"><button className="button is-primary">联系我们</button></Link>
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
