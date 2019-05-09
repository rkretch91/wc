import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/en"
import Banner from "../components/Banner"
import Mapbox from "../components/Map"

import Who from '../images/who-icon.png'
import What from '../images/what-icon.png'
import Where from '../images/where-icon.png'
import Why from '../images/why-icon.png'

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div>
      <Banner slogan="REDEFINING PUBLIC RESTROOMS"/>
      <div className="columns icons-homepage is-centered">
        <div className="column has-text-centered">
          <img src={Who}/>
          <span><h5>who we are</h5></span>
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
    <Mapbox/>
  </Layout>
)

export default IndexPage
