import React from 'react'
import Layout from "../layouts/zh"

import Mapbox from "../components/Map"
import Form2 from "../components/Form2"

import Stalls from '../images/wecarewc-peoples-square.jpg'


const Locations = (props) => (
  <Layout location={props.location}>
    <div className="blog-banner" style={{background: `linear-gradient(rgba(0,0,0,0.1),rgba(255,255,255,0.1)), url(${Stalls})`}}>
      <h1>Locations</h1>
    </div>
    <div className="about-wrap has-text-centered">
      <h1>We are continuing to grow rapidly around<br></br>
      China and Asia. Check out our portfolio.</h1>
      <Form2/>
    </div>
    <Mapbox map="is-hidden-mobile is-hidden-tablet"/>
  </Layout>
)

export default Locations



