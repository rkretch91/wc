import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/en"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Female from '../../images/icons/restroom-type-08.svg'
import Male from '../../images/icons/restroom-type-07.svg'

import Placeholder from '../../images/logos/Sinopec.svg'


const Sinopec = (props) => {

  const images = [
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563999925/sinopec-jinxiu-road/entrance.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563999925/sinopec-jinxiu-road/entrance.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563999925/sinopec-jinxiu-road/cleaning-staff-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563999925/sinopec-jinxiu-road/cleaning-staff-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563999925/sinopec-jinxiu-road/male-stall-1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563999925/sinopec-jinxiu-road/male-stall-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563999925/sinopec-jinxiu-road/male-stall-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563999925/sinopec-jinxiu-road/male-stall-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563999925/sinopec-jinxiu-road/urinal.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563999925/sinopec-jinxiu-road/urinal.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563999925/sinopec-jinxiu-road/sink.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563999925/sinopec-jinxiu-road/sink.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563999925/sinopec-jinxiu-road/cleaning-staff-1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563999925/sinopec-jinxiu-road/cleaning-staff-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563999925/sinopec-jinxiu-road/stall-door.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563999925/sinopec-jinxiu-road/stall-door.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563999925/sinopec-jinxiu-road/female-stall.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563999925/sinopec-jinxiu-road/female-stall.jpg',
      }
    ]

  return(
  <Layout location={props.location}>
    <div className="location-wrap has-text-centered">
      <h1>Sinopec, Jinxiu Road</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>About</h2>
          <p>WeCare WC, as China’s first public restroom brand, is a pioneer in transforming public restrooms using innovative concepts. Sinopec has “better energy for better living” as a corporate mission, keeping pace with the times with creative initiatives. WeCare WC and Sinopec together is a powerful combination. At the Jinxiu Road station in Shanghai’s Pudong district, we completed the first outdoor gas station public restroom. We are honored to be working for Sinopec, bringing its culture and elements of Sinopec into restroom design, to create a warm and comfortable space and provide a better experience for gas station customers.</p>
          <p>The restrooms feature some incredible products and craftsmanship with private and spacious toilet stalls, motivational mirrors with advertising built in, and more. When combined together, something truly unique and one-of-a-kind is created. There is no other gas station restroom quite like it.</p>
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
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="Sinopec, Jinxiu Road" coords="121.569541, 31.225983"/>
          <div className="has-text-centered">
            <h3>No.11 Jinxiu Road, Pudong District, Shanghai, China</h3>
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

export default Sinopec
