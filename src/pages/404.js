import React from 'react'
import Layout from "../layouts/zh"
import Link from 'gatsby-link'

import Illustration1 from '../images/illustration-03.svg'
import Illustration2 from '../images/illustration-04.svg'

import Crying from '../images/crying-wecarewc.png'

const NotFound = (props) => (
  <Layout location={props.location}>
    <div className="contact-wrap has-text-centered" style={{height: '100vh'}}>
      <img src={Crying} alt="Crying WeCare WC" style={{height: '200px'}}/>
      <h1>You may be a little bit lost.</h1>
      <h1>But don't worry!</h1>
      <Link to="/en/"><button className="button" id="grey">Take Me Home</button></Link>
    </div>
  </Layout>
)

export default NotFound
