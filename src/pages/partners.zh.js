import React from 'react'
import Layout from "../layouts/zh"
import Link from 'gatsby-link'

// About Icons
import Partners from '../images/partners.jpg'

import Ellai from '../images/logos/ellai.png'
import Blueair from '../images/logos/blueair.png'
import Dupont from '../images/logos/dupont.png'
import Dyson from '../images/logos/dyson.png'
import Kohler from '../images/logos/kohler.png'
import Marazzi from '../images/logos/marazzi.png'
import Philips from '../images/logos/philips.png'
import VB from '../images/logos/v&b.png'

import Corian from '../images/partners/corian.jpg'
import Dyson2 from '../images/partners/dyson.jpg'
import Ellai2 from '../images/partners/ellai.jpg'


const About = (props) => (
  <Layout location={props.location}>
    <div style={{backgroundColor: 'white'}}>
      <div className="blog-banner" style={{boxShadow: "none", background: `linear-gradient(rgba(0,0,0,0.0),rgba(255,255,255,0.0)), url(${Partners})`, filter: 'blur(4px)'}}>
      </div>
      <h1 style={{position: 'absolute', top: '30vh', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', color: 'white'}} className="has-text-centered">合作伙伴</h1>
      <div className="about-wrap has-text-centered">
        <h2>我们很荣幸能与在各行业顶尖的品牌合作。<br></br>
        强强联合，共同为大家带来最创新、环保、卫生的产品</h2>
        <Link to="/contact/"><button className="button" style={{marginBottom: "40px"}}>成为我们的合作伙伴</button></Link>
        <hr style={{opacity: ".3"}}/>
        <div className="columns">
          <div className="column">
            <a href="http://www.ellai.cn/" target="_blank" rel="noopener noreferrer"><img src={Ellai} alt="ellai-logo" /></a>
            <p>"宜来ELLAI与WECARE有各自的专业领域，但有共同的愿景，都致力于打造美好的卫生空间。双方深度的战略合作关系更是为未来增加了助力。"</p>
          </div>
          <div className="column">
            <a href="https://www.dyson.com/en.html" target="_blank" rel="noopener noreferrer"><img src={Dyson} alt="dyson-logo" /></a>
            <p>"我们被卫葛雅为公共洗手间行业带来的专业性和激情所深深打动。他们的设计理念看起来棒呆了，并且我确信他们将会为中国的公共卫生行业带来全新标准。"</p>
          </div>
          <div className="column">
            <a href="http://www.dupont.com/" target="_blank" rel="noopener noreferrer"><img src={Dupont} alt="dupont-logo" /></a>
            <p>"我们对能与卫葛雅（行业翘楚）的合作感到十分荣幸，并深切期待这次合作为品牌双方及行业所带来的收益。杜邦与卫葛雅的合作是高效的，我们对合作充满自信并相信它会提升公众对于公共卫生标准的期待。"</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
             <a href="https://www.blueair.com/" target="_blank" rel="noopener noreferrer"><img src={Blueair} alt="blueair-logo" /></a>
            <p>"卫葛雅是一家富有创造力的公司并彻底地把新理念引入中国的公共洗手间行业。我们（博露雅迩）对于这次合作感到非常激动，并期待为卫葛雅的使用者提供纯净空气。"</p>
          </div>
          <div className="column">
            <a href="https://www.philips.com/global" target="_blank" rel="noopener noreferrer"><img src={Philips} alt="philips-logo" /></a>
            <p>"WeCare WC对细节的专注与对创新性设计的坚持让我们之间的合作非常顺畅，其结果是让人赞叹的。 卫葛雅为中国公共洗手间行业设定了崭新标准，而（飞利浦）我们很荣幸能为卫葛雅洗手间的使用者提供出色又节能的用户体验。"</p>
          </div>
          <div className="column">
            <a href="https://www.us.kohler.com/us/" target="_blank" rel="noopener noreferrer"><img src={Kohler} alt="kohler-logo" /></a>
            <p>"科勒的使命是为顾客提供高品质的，具有艺术气息的产品和豪华的生活体验而卫葛雅是能帮助我们实现这一理念的完美合作方。他们正在对中国公共卫生间设施提升做出了巨大影响。作为卫葛雅的合作方，我们为公众提供独特的，有品质的，环保的卫生解决方案。"</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <a href="https://www.villeroy-boch.eu/en/" target="_blank" rel="noopener noreferrer"><img src={VB} alt="vb-logo" /></a>
            <p>"我们的共同使命是，结合唯宝历史悠久的精湛工艺和卫葛雅的革新性的公共卫生解决方案， 来设定中国公共洗手间行业的全新标准。毕竟，无论身处何方，每一个人都值得享有一个干净舒适的空间来放松身心，恢复活力。"</p>
          </div>
          <div className="column">
            <a href="https://www.marazzigroup.com/" target="_blank" rel="noopener noreferrer"><img src={Marazzi} alt="marazzi-logo" /></a>
            <p>"我们很期待与卫葛雅的合作，来为他们的顾客创造一份愉悦的体验。马拉齐具有创造性的设计和高品质的产品加上卫葛雅的先锋性的公共洗手间设计理念，这是双方长期深度合作的一个开始。"</p>
          </div>
          <div className="column">
            <img src={Ellai} alt="ellai-logo" />
            <p>"宜来ELLAI与WECARE有各自的专业领域，但有共同的愿景，都致力于打造美好的卫生空间。双方深度的战略合作关系更是为未来增加了助力。"</p>
          </div>
        </div>
        <hr style={{opacity: ".3", marginBottom: '40px'}}/>
        <div className="columns">
          <div className="column">
            <img src={Corian} alt="corian-counter" id="justthisonce" />
          </div>
          <div className="column">
            <img src={Dyson2} alt="dyson-airblade" id="justthisonce" />
          </div>
          <div className="column">
            <img src={Ellai2} alt="ellai-toilet" id="justthisonce" />
          </div>
        </div>
        <Link to="/contact/"><button className="button" style={{marginBottom: "40px"}}>成为我们的合作伙伴</button></Link>
      </div>
    </div>
  </Layout>
)

export default About
