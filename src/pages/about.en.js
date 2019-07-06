import React from 'react'
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
import Icon15 from '../images/icons/restroom-type-07.svg'
import Icon16 from '../images/icons/restroom-type-08.svg'

const About = (props) => (
  <Layout location={props.location}>
    <div className="blog-banner" style={{background: `linear-gradient(rgba(0,0,0,0.1),rgba(255,255,255,0.3)), url(${Stalls})`}}>
      <h1>About Us</h1>
    </div>
    <div className="about-wrap has-text-centered">
      <h1>We are a professional design house +<br></br>
      retail OOH ads and media technology company<br></br>
      <span style={{color: '#F70303'}}>changing the status quo of public restrooms and facilities.</span></h1>
      <br></br>
      <h2>How It Works:</h2>
      <div className="columns">
        <div className="column">
          <img src={Icon8} alt="we-design" />
          <p>We design.</p>
        </div>
        <div className="column">
          <img src={Icon4} alt="we-supply-core-materials" />
          <p>We supply core materials.</p>
        </div>
        <div className="column">
          <img src={Icon3} alt="we-supervise-construction" />
          <p>We supervise construction.</p>
        </div>
        <div className="column">
          <img src={Icon1} alt="we-repair"/>
          <p>We repair and maintain.</p>
        </div>
        <div className="column">
          <img src={Icon2} alt="we-generate-revenue" />
          <p>We generate revenue with OOH ads.</p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
        </div>
        <div className="column">
          <img src={Icon5} alt="we-dont-construct" />
          <p>We don't do construction ourselves.</p>
        </div>
        <div className="column">
          <img src={Icon6} alt="we-dont-clean-daily" />
          <p>We don't do daily cleanings (but can provide monthly/semi-monthly service).</p>
        </div>
        <div className="column">
          <img src={Icon7} alt="we-dont-ask-ll" />
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
          <img src={Icon15} alt="female-restroom" />
          <p>Female Restrooms</p>
        </div>
        <div className="column">
          <img src={Icon16} alt="male-restroom" />
          <p>Male Restrooms</p>
        </div>
        <div className="column">
          <img src={Icon9} alt="all-gender-restroom" />
          <p>All-Gender Restrooms</p>
        </div>
        <div className="column">
          <img src={Icon10} alt="family-room" />
          <p>Family Rooms</p>
        </div>
        <div className="column">
          <img src={Icon11} alt="accessible-room" />
          <p>Accessible Rooms</p>
        </div>
        <div className="column">
          <img src={Icon12} alt="powder-room" />
          <p>Powder Rooms</p>
        </div>
        <div className="column">
          <img src={Icon13} alt="nursing-room" />
          <p>Nursing Rooms</p>
        </div>
        <div className="column">
          <img src={Icon14} alt="moms-room" />
          <p>Mom's Rooms</p>
        </div>
      </div>
      <button className="button" id="about-button1">See Our Facilities</button>
    </div>
  </Layout>
)

export default About

