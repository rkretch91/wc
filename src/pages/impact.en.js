import React from 'react'
import Layout from "../layouts/en"
import Link from "gatsby-link"

// About Icons
import ImpactPic from '../images/impact.jpg'




const Impact = (props) => (
  <Layout location={props.location}>
    <div style={{backgroundColor: 'white'}}>
      <div className="blog-banner" style={{boxShadow: "none", background: `linear-gradient(rgba(0,0,0,0.0),rgba(255,255,255,0.0)), url(${ImpactPic})`}}>
      </div>
      <h1 style={{position: 'absolute', top: '30vh', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', color: 'white'}} className="has-text-centered">Impact</h1>
      <div className="about-wrap has-text-centered">
        <h2>Aside from increasing the standard of public restrooms, we are heavily involved in making<br></br>
        a positive impact on the community and the environment around us.<br></br><br></br>
        Check out some of our recent community projects below.</h2>
        <hr style={{opacity: ".3", marginBottom: '40px'}}/>
        <div className="columns">
          <div className="column is-full">
            <img src='https://res.cloudinary.com/wecare-wc/image/upload/v1563525318/tokyo2020-wecarewc/tokyo-2020-2.jpg' alt="corian-counter" id="justthisonce" />
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-left">
            <h2>WeCare WC x Tokyo 2020</h2>
            <p>The world is brimming with inspirational people, and China is at the forefront of it. Meet Jiachao, a triathlon contender for the 2020 Tokyo Paralympic games.</p>
            <p>His story is dotted by obstacles, but what he has achieved as a result of unbridled persistence few have even attempted in a lifetime. Born in the small town of Jianshui in Yunnan province, Jiachao lost his arm in an electrical accident at just five years old. Rather than letting the incident drag him down, he joined the Yunnan disabled swimming team. In just a few years, his hard work and discipline in the sport paid off, granting him a coveted spot on the national swimming team. To top it off, he later went on to become a 2012 London Paralympic champion. Retiring from the sport in 2015, he supplemented his athletic wins with academic ones and obtained a Master’s degree in Physical Education from Yunnan Normal University.</p>
            <p>But Jiachao is now back and stronger than ever; this time adding cycling and running to the mix in a triathlon. Unlike swimming, however, China does not have a national team for triathlon.</p>
            <p>At WeCare WC, highly value persistence, inspiration, and social impact, and we are beyond proud to be one of Jiachao’s officials sponsors and donors for the competition. Jiachao is living proof that anyone is capable of greatness and we look forward to being by his side up until his big win at the 2020 Tokyo Paralympic games.</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <img src='https://res.cloudinary.com/wecare-wc/image/upload/v1563525317/tokyo2020-wecarewc/tokyo-2020-4.jpg' alt="dyson-airblade" id="justthisonce" />
          </div>
          <div className="column">
            <img src='https://res.cloudinary.com/wecare-wc/image/upload/v1563525317/tokyo2020-wecarewc/tokyo-2020-5.jpg' alt="ellai-toilet" id="justthisonce" />
          </div>
        </div>
        <div className="columns">
          <div className="column is-hidden-desktop">
            <img src='https://res.cloudinary.com/wecare-wc/image/upload/v1563525318/tokyo2020-wecarewc/tokyo-2020-1.png' alt="corian-counter" id="justthisonce" />
          </div>
        </div>
        <hr style={{opacity: ".3", marginBottom: '40px'}}/>
        <h2>We are always looking for new ways to support our community.<br></br>
        Feel free to get in touch if you have an idea we can collaborate on.</h2>
        <Link to="/en/contact"><button className="button" style={{marginBottom: "40px"}}>Get in Touch</button></Link>
      </div>
    </div>
  </Layout>
)

export default Impact
