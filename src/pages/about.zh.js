import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/zh"

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

import Sinopec from '../images/wecarewc-sinopec-ads.jpg'


const SecondPage = (props) => (
  <Layout location={props.location}>
    <div className="blog-banner" style={{background: ` linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(${Stalls})`}}>
      <h1>关于我们</h1>
    </div>
    <div className="about-wrap has-text-centered">
      <h1>We are a professional design house +<br></br>
      retail OOH ads and media technology company<br></br>
      <span style={{color: '#F70303'}}>changing the status quo of public restrooms and facilities.</span></h1>
      <br></br>
      <h2>How It Works:</h2>
      <div className="columns">
        <div className="column">
          <img src={Icon8}/>
          <p>We design.</p>
        </div>
        <div className="column">
          <img src={Icon4}/>
          <p>We supply core materials.</p>
        </div>
        <div className="column">
          <img src={Icon3}/>
          <p>We supervise construction.</p>
        </div>
        <div className="column">
          <img src={Icon1}/>
          <p>We repair and maintain.</p>
        </div>
        <div className="column">
          <img src={Icon2}/>
          <p>We generate revenue with OOH ads.</p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
        </div>
        <div className="column">
          <img src={Icon5}/>
          <p>We don't do construction ourselves.</p>
        </div>
        <div className="column">
          <img src={Icon6}/>
          <p>We don't do daily cleanings (but can provide monthly/semi-monthly service).</p>
        </div>
        <div className="column">
          <img src={Icon7}/>
          <p>We don't ask landlords to invest in equipment for retail ads or media space.</p>
        </div>
        <div className="column">
        </div>
      </div>
    </div>
    <div className="parallax"/>
    <div className="about-wrap has-text-centered">
      <h2>We design and implement restrooms and facilities for any type of need.</h2>
      <div className="columns">
        <div className="column">
          <img src={Icon9}/>
          <p>Female, Male, and Unisex Restrooms</p>
        </div>
        <div className="column">
          <img src={Icon10}/>
          <p>Family Rooms</p>
        </div>
        <div className="column">
          <img src={Icon11}/>
          <p>Accessible Rooms</p>
        </div>
        <div className="column">
          <img src={Icon12}/>
          <p>Powder Rooms</p>
        </div>
        <div className="column">
          <img src={Icon13}/>
          <p>Nursing Rooms</p>
        </div>
        <div className="column">
          <img src={Icon14}/>
          <p>Mom's Rooms</p>
        </div>
      </div>
      <button className="button" id="about-button1">See Our Facilities</button>
    </div>
  </Layout>
)

export default SecondPage
