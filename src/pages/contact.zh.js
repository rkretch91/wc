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
      <h1>我们期待您的消息！</h1>
      <p>你想与我们合作吗？听说WeCare WC在招聘？给我们一些反馈？或者其他什么！在下面给我们发一条信息，我们会尽快回复您。</p>
      <ContactForm/>
    </div>
    <img src={Illustration1} alt='womens-room-icon' id="woman-illustration"/>
    <img src={Illustration2} alt='mens-icon' id="man-illustration"/>
  </Layout>
)

export default Contact
