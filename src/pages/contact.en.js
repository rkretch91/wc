import React from 'react'
import Layout from "../layouts/en"

import ContactForm from '../components/contact.js'

const Contact = (props) => (
  <Layout location={props.location}>
    <div className="contact-wrap has-text-centered">
      <h1>We Want to Hear From You!</h1>
      <p>Do you want to partner up? Hear about jobs at WeCare WC? Provide us with some feedback? Or anything else? Send us a message below and we will get right back to you.</p>
      <ContactForm/>
    </div>
  </Layout>
)

export default Contact
