import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/zh"
import Banner from "../components/Banner"
import Mapbox from "../components/Map"

import Who from '../images/who-icon.png'
import What from '../images/what-icon.png'
import Where from '../images/where-icon.png'
import Why from '../images/why-icon.png'
import Test from '../images/test.jpg'

import Ellai from '../images/logos/ellai.png'
import Blueair from '../images/logos/blueair.png'
import Dupont from '../images/logos/dupont.png'
import Dyson from '../images/logos/dyson.png'
import Kohler from '../images/logos/kohler.png'
import Marazzi from '../images/logos/marazzi.png'
import Philips from '../images/logos/philips.png'
import VB from '../images/logos/v&b.png'

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div>
      <Banner slogan="重新定义公共卫生间"/>
      <div className="columns icons-homepage is-centered">
        <div className="column has-text-centered">
          <img src={Who}/>
          <span><h5>我们是谁</h5></span>
          <span><p>Pioneers and experts transforming the public facility experience globally.</p></span>
        </div>
        <div className="column has-text-centered">
          <img src={What} style={{width: '40px'}}/>
          <span><h5>what we do</h5></span>
          <span><p>Create hygienic and innovatively designed public facilities and restrooms.</p></span>
        </div>
        <div className="column has-text-centered">
          <img src={Where}/>
          <span><h5>where we build</h5></span>
          <span><p>Shopping malls, department stores, airports, gas stations, office buildings, stadiums…and more.</p></span>
        </div>
        <div className="column has-text-centered">
          <img src={Why}/>
          <span><h5>why we care</h5></span>
          <span><p>We believe that everyone deserves a clean space to refresh and relax. We are changing the status quo.</p></span>
        </div>
      </div>
    </div>
    <Mapbox language="我们的卫生间" />
    <div className="partners-home has-text-centered">
      <h1>我们的合作</h1>
      <p>We have an ever expanding list of partners to help make our restrooms a reality. We would love to work with you too.</p>
      <div className="partners-logos columns">
        <div className="column">
          <a href="http://www.ellai.cn/" target="_blank"><img src={Ellai}/></a>
          <a href="https://www.dyson.cn/" target="_blank"><img src={Dyson}/></a>
          <a href="http://www.dupont.cn/" target="_blank"><img src={Dupont}/></a>
          <a href="https://www.philips.com.cn/" target="_blank"><img src={Philips}/></a>
          <a href="http://www.kohler.com.cn/" target="_blank"><img src={Kohler}/></a>
          <a href="https://www.villeroy-boch.eu/en/" target="_blank"><img src={VB}/></a>
          <a href="http://www.blueair.cn/" target="_blank"><img src={Blueair}/></a>
          <a href="http://www.marazzichina.cn/" target="_blank"><img src={Marazzi}/></a>
        </div>
      </div>
      <button className="button">Become a Partner</button>
    </div>
    <div className="blog-wrapper">
      <div className="blog has-text-centered">
        <h1>新闻</h1>
        <div className="columns is-centered">
          <div className="column has-text-left spacing">
            <img src={Test}/>
            <span><h5>The Queen of Public Restrooms</h5></span>
            <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam erat justo, porta a arcu.</p></span>
          </div>
          <div className="column has-text-left spacing">
            <img src={Test}/>
            <span><h5>WeCare WC Goes Portable!</h5></span>
            <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam erat justo, porta a arcu.</p></span>
          </div>
          <div className="column has-text-left spacing">
            <img src={Test}/>
            <span><h5>WeCare WC Takes Off in Pudong Airport</h5></span>
            <span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam erat justo, porta a arcu.</p></span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
