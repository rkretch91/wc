import React from 'react'
import Layout from "../layouts/en"

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
      <h1 style={{position: 'absolute', top: '30vh', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', color: 'white'}} className="has-text-centered">Partners</h1>
      <div className="about-wrap has-text-centered">
        <h2>We are proud to be working with the highest quality brands in the <br></br>
        industry. Together, we bring you the most innovative, <br></br>
        environmentally-friendly, and hygienic products.</h2>
        <button className="button" style={{marginBottom: "40px"}}>Become a Partner</button>
        <hr style={{opacity: ".3"}}/>
        <div className="columns">
          <div className="column">
            <img src={Ellai} alt="ellai-logo" />
            <p>"Ellai and WeCare WC share the same vision while being experts in differing fields. Both companies are devoted to creating better restroom spaces and the deep strategic cooperation will accelerate the development and growth of both brands."</p>
          </div>
          <div className="column">
            <img src={Dyson} alt="dyson-logo" />
            <p>"We are impressed by the professionalism and enthusiasm that WeCare WC brings to the industry. The design concept looks amazing and will be a completely new standard for sanitation in China."</p>
          </div>
          <div className="column">
            <img src={Dupont} alt="dupont-logo" />
            <p>"We feel very privileged to work with the WeCare WC team as they are experts in this field and we look forward to this exciting partnership for the greater good. The collaboration between Dupont and WeCare WC has been highly effective, and we are confident that the result will raise people’s expectations of how public sanitation should be defined."</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <img src={Blueair} alt="blueair-logo" />
            <p>"WeCare WC is a creative company that brings a completely new concept to public restrooms in China. We at Blueair are excited about our partnership and look forward to providing purified clean air to WeCare WC guests."</p>
          </div>
          <div className="column">
            <img src={Philips} alt="philips-logo" />
            <p>"WeCare WC's attention to detail and focus on innovative design has resulted in a very smooth and complimentary partnership. WeCare WC is setting a new standard for public facilities in China and Philips is proud to be providing superior and energy-efficient user experiences in WeCare WC restrooms."</p>
          </div>
          <div className="column">
            <img src={Kohler} alt="kohler-logo" />
            <p>"Kohler’s mission is to provide customers with high quality, artistic products and a gracious living experience. WeCare WC is the perfect partner to help us achieve this. They are making an incredibly big impact on China’s public facilities. As partners of WeCare WC, we provide unique experiences and quality, environmentally-conscious solutions to the public."</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <img src={VB} alt="vb-logo" />
            <p>"Our common mission, combining together the time-honored craftsmanship of Villeroy & Boch with WeCare WC’s innovative public sanitation solutions, is to create a new benchmark in public restrooms in China. After all, everyone deserves a clean space to relax and refresh regardless of where they are."</p>
          </div>
          <div className="column">
            <img src={Marazzi} alt="marazzi-logo" />
            <p>"Combining MARAZZI’s creative design and high quality products with WeCare WC’s pioneering public toilet concept, this is the beginning of a long-term strategic partnership."</p>
          </div>
          <div className="column">
            <img src={Ellai} alt="ellai-logo" />
            <p>"Ellai and WeCare WC share the same vision while being experts in differing fields. Both companies are devoted to creating better restroom spaces and the deep strategic cooperation will accelerate the development and growth of both brands."</p>
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
        <button className="button" style={{marginBottom: "40px"}}>Become a Partner</button>
      </div>
    </div>
  </Layout>
)

export default About
