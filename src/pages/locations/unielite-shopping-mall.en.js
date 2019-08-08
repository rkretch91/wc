import React from 'react'
import Layout from "../../layouts/en"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Female from '../../images/icons/restroom-type-08.svg'
import Male from '../../images/icons/restroom-type-07.svg'

import Placeholder from '../../images/logos/unielite.png'

const UniElite = (props) => {

  const images = [
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563526005/unielite-shopping-mall/entranceway.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563526005/unielite-shopping-mall/entranceway.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563526005/unielite-shopping-mall/overview.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563526005/unielite-shopping-mall/overview.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563526005/unielite-shopping-mall/sinks-and-mirrors.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563526005/unielite-shopping-mall/sinks-and-mirrors.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563526005/unielite-shopping-mall/mirror-shot.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563526005/unielite-shopping-mall/mirror-shot.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563526005/unielite-shopping-mall/stall.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563526005/unielite-shopping-mall/stall.jpg',
      },
    ]

  return(
  <Layout location={props.location}>
    <div className="location-wrap has-text-centered">
      <h1>UniElite Shopping Mall</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>About</h2>
          <p>Nestled among charming Xintiandi’s famous historical buildings, winding alleys, and modern skyscrapers is a sparkling new WeCare WC public restroom at UniElite Shopping Mall (featuring 30,000 square meters of boutique space). Customers looking to take a break from shopping can retreat to Level B2 for the highest standards of hygiene and innovation a restroom can offer.</p>
          <p>Featuring the archetypal WeCare WC design, visitors will be WOWed by impressively spacious and private stalls with impactful graphics, motivational messages on mirrors, and glistening surfaces. Much like Xintiandi around it, the restroom’s design is a perfect blend of Chinese and Western culture along with the ancient and the contemporary.</p>
          <p>As with all of our WeCare WC experiences, you will leave feeling fresher, satisfied, and ready to take on more of what UniElite and Shanghai has to offer.</p>
          <div className="is-flex image is-96x96">
            <img src={Female} alt="female-room"/><img src={Male} alt="male-room"/>
          </div>
          <div className="is-hidden-mobile">
            <h2>Location Partner</h2>
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="column">
          <h2>Location</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="UniElite Shopping Mall" coords="121.476011, 31.218197"/>
          <div className="has-text-centered">
            <h3>No. 838 South Huangpi Road, Xintiandi, Huangpu District</h3>
          </div>
          <div className="is-hidden-tablet location-logo">
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px', paddingTop: "20px"}}/>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default UniElite
