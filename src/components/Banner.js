import React from 'react'
import Div100vh from 'react-div-100vh';

const Banner = props => (
  <Div100vh>
    <div className="banner foo">
      <span className="slogan">{props.slogan}</span>
    </div>
  </Div100vh>
)

export default Banner;
