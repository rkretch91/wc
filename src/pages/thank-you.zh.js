import React from 'react'
import Layout from "../layouts/zh"
import Link from 'gatsby-link'

import Illustration1 from '../images/illustration-03.svg'
import Illustration2 from '../images/illustration-04.svg'

const TY = (props) => (
  <Layout location={props.location}>
    <div className="contact-wrap has-text-centered" style={{height: '70vh'}}>
      <h1>Thank you for your submission! You will hear from us soon.</h1>
      <Link to="/en/"><button className="button" id="grey">Take Me Home</button></Link>
    </div>
    <img src={Illustration1} alt='womens-room-icon' id="man-illustration"/>
    <img src={Illustration2} alt='mens-icon' id="woman-illustration"/>
  </Layout>
)

export default TY
