import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/en"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Male from '../../images/icons/restroom-type-07.svg'
import Female from '../../images/icons/restroom-type-08.svg'
import Nursing from '../../images/icons/restroom-type-05.svg'

import Placeholder from '../../images/logos/cnpc.png'


const PSquare = (props) => {

  const images = [
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140325/peoples%20square/accessible-room-1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140325/peoples%20square/accessible-room-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140331/peoples%20square/facade.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140331/peoples%20square/facade.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/urinals.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140324/peoples%20square/urinals.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/nursing-room-1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140324/peoples%20square/nursing-room-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/nursing-room-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140324/peoples%20square/nursing-room-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/accessible-room-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140324/peoples%20square/accessible-room-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/accessible-room-3.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140324/peoples%20square/accessible-room-3.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/accessible-room-4.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140324/peoples%20square/accessible-room-4.jpg',
      }
    ]

  return(
  <Layout location={props.location}>
    <div className="location-wrap has-text-centered">
      <h1>People's Square</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>About</h2>
          <p>On the edge of the world-famous People’s Square in the very heart of Shanghai lies the latest WeCare WC creation. Staged in the historical public restroom at No. 10 Wusheng Road (built in 1957), the project is a gorgeous retrofit of the pre-existing facilities; including an Accessible Room on the first floor and a Nursing Room on the second floor.</p>
          <p>The design of these facilities carefully fuses WeCare WC’s classic, sleek and intuitive aesthetics with elements of traditional Chinese culture and modern, cosmopolitan Shanghai. It is a place where over 3,000 locals and tourists daily will gain an even greater appreciation for the city and China just by stopping in to use the facilities and toilets. </p>
          <div className="is-flex image is-96x96">
            <img src={Female} alt="female-room"/><img src={Male} alt="male-room"/><img src={Nursing} alt="nursing-room"/>
          </div>
        </div>
        <div className="column">
          <h2>Location</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="Peoples Square" coords="121.477188, 31.229672"/>
          <div className="has-text-centered">
            <h3>300 Huai Hai Zhong Lu, Xuhui District, Shanghai, China</h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default PSquare
