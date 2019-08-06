import React from 'react'
import Layout from "../layouts/zh"

import ContactForm from '../components/contact.js'

import Illustration1 from '../images/illustration-03.svg'
import Illustration2 from '../images/illustration-04.svg'
import Illustration3 from '../images/illustration-01.svg'
import Illustration4 from '../images/illustration-02.svg'

const Contact = (props) => (
  <Layout location={props.location} id="darker">
    <div className="contact-wrap has-text-centered">
      <h1>We Want to Hear From You!</h1>
      <p>Do you want to partner up? Hear about jobs at WeCare WC? Provide us with some feedback? Or anything else? Send us a message below and we will get right back to you.</p>
      <ContactForm/>
    </div>
    <img src={Illustration1} alt='womens-room-icon' id="woman-illustration"/>
    <img src={Illustration2} alt='mens-icon' id="man-illustration"/>
  </Layout>
)

export default Contact
