import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/en"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Female from '../../images/icons/restroom-type-08.svg'
import Male from '../../images/icons/restroom-type-07.svg'

import Placeholder from '../../images/logos/cnpc.png'


const CNPC = (props) => {

  const images = [
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-sink.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-sink.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559139150/Shanghai%20Pudong%20International%20Airport/entrance-1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559139150/Shanghai%20Pudong%20International%20Airport/entrance-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-3.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-3.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-4.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-4.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-sink-3.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-sink-3.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559139150/Shanghai%20Pudong%20International%20Airport/entrance-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559139150/Shanghai%20Pudong%20International%20Airport/entrance-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559139150/Shanghai%20Pudong%20International%20Airport/accessible-room-sink-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559139150/Shanghai%20Pudong%20International%20Airport/accessible-room-sink-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559139150/Shanghai%20Pudong%20International%20Airport/accessible-room-toilets-1',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559139150/Shanghai%20Pudong%20International%20Airport/accessible-room-toilets-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559139150/Shanghai%20Pudong%20International%20Airport/accessible-room-corian',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559139150/Shanghai%20Pudong%20International%20Airport/accessible-room-corian.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-sink-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559139150/Shanghai%20Pudong%20International%20Airport/family-room-sink-2.jpg',
      }
    ]

  return(
  <Layout location={props.location}>
    <div className="location-wrap has-text-centered">
      <h1>CNPC, Wuzhong Road</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>About</h2>
          <p>WeCare WC is ecstatic to unleash another creation in time for the new year; this time at China National Petroleum Corporation (CNPC) petrol station on Wuzhong Road in Shanghai! The stylish, quaint, and intuitively-designed male and female restroom marks our first of many collaborations with CNPC. The project could not have happened at a better station; which is frequented by world leaders and diplomats visiting Shanghai and in need of a car refill including past US presidents and the German chancellor.</p>
          <p>CNPC consistently ranks in the Top 3 for the Fortune Global 500 and is truly international with a global pipeline network that reaches over 80,000 kilometers. The company makes in mark in all corners of the world.</p>
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
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="CNPC, Wuzhong Road" coords="121.414515, 31.187487"/>
          <div className="has-text-centered">
            <h3>Wuzhong Road, Minhang, Shanghai, China</h3>
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

export default CNPC
