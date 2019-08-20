import React from 'react'
import Layout from "../layouts/zh"
import Link from 'gatsby-link'

// About Icons
import Stalls from '../images/wecarewc-xtd-stalls.jpg'
import Icon1 from '../images/icons/about-icons-01.svg'
import Icon2 from '../images/icons/about-icons-02.svg'
import Icon3 from '../images/icons/about-icons-03.svg'
import Icon4 from '../images/icons/about-icons-04.svg'
import Icon8 from '../images/icons/about-icons-08.svg'
import Icon5 from '../images/icons/about-icons-05.svg'
import Icon6 from '../images/icons/about-icons-06.svg'
import Icon7 from '../images/icons/about-icons-07.svg'

// Type Icons
import Icon9 from '../images/icons/restroom-type-01.svg'
import Icon10 from '../images/icons/restroom-type-02.svg'
import Icon11 from '../images/icons/restroom-type-03.svg'
import Icon12 from '../images/icons/restroom-type-04.svg'
import Icon13 from '../images/icons/restroom-type-05.svg'
import Icon14 from '../images/icons/restroom-type-06.svg'
import Icon15 from '../images/icons/restroom-type-07.svg'
import Icon16 from '../images/icons/restroom-type-08.svg'

import Corian from '../images/partners/1.jpg'
import Dyson2 from '../images/partners/2.jpg'
import Ellai2 from '../images/partners/3.jpg'

const About = (props) => (
  <Layout location={props.location}>
    <div className="blog-banner" style={{background: `linear-gradient(rgba(0,0,0,0.1),rgba(255,255,255,0.3)), url(${Stalls})`}}>
      <h1>关于我们</h1>
    </div>
    <div className="about-wrap has-text-centered">
      <h1>我们是一家专业的设计工作室 +<br></br>
      零售户外广告与媒体科技公司，<br></br>
      <span style={{color: '#F70303'}}>旨在改变公共卫生间和配套设施的现状。</span></h1>
      <br></br>
      <h2>运作模式:</h2>
      <div className="columns">
        <div className="column">
          <img src={Icon8} alt="we-design" />
          <p>空间设计</p>
        </div>
        <div className="column">
          <img src={Icon4} alt="we-supply-core-materials" />
          <p>主材供应</p>
        </div>
        <div className="column">
          <img src={Icon3} alt="we-supervise-construction" />
          <p>施工监督</p>
        </div>
        <div className="column">
          <img src={Icon1} alt="we-repair"/>
          <p>维修保洁</p>
        </div>
        <div className="column">
          <img src={Icon2} alt="we-generate-revenue" />
          <p>广告收入</p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
        </div>
        <div className="column">
          <img src={Icon5} alt="we-dont-construct" />
          <p>不提供施工</p>
        </div>
        <div className="column">
          <img src={Icon6} alt="we-dont-clean-daily" />
          <p>不提供日常清洁（但是可以提供月度/半月度深度清洁服务）</p>
        </div>
        <div className="column">
          <img src={Icon7} alt="we-dont-ask-ll" />
          <p>不需要业主对零售广告或媒介进行投资</p>
        </div>
        <div className="column">
        </div>
      </div>
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
      <h2>我们设计建造各式各样的卫生间及相关设施以满足不同的需求。</h2>
      <div className="columns">
        <div className="column">
          <img src={Icon15} alt="female-restroom" />
          <p>女卫生间</p>
        </div>
        <div className="column">
          <img src={Icon16} alt="male-restroom" />
          <p>男卫生间</p>
        </div>
        <div className="column">
          <img src={Icon9} alt="all-gender-restroom" />
          <p>无性别卫生间</p>
        </div>
        <div className="column">
          <img src={Icon10} alt="family-room" />
          <p>家庭卫生间</p>
        </div>
        <div className="column">
          <img src={Icon11} alt="accessible-room" />
          <p>无障碍卫生间</p>
        </div>
        <div className="column">
          <img src={Icon12} alt="powder-room" />
          <p>化妆间</p>
        </div>
        <div className="column">
          <img src={Icon13} alt="nursing-room" />
          <p>母婴室</p>
        </div>
        <div className="column">
          <img src={Icon14} alt="moms-room" />
          <p>妈妈休息室</p>
        </div>
      </div>
      <Link to="/locations"><button className="button" id="about-button1">查看我们的设施</button></Link>
    </div>
  </Layout>
)

export default About
