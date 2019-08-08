import React from 'react'
import Layout from "../../layouts/en"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Female from '../../images/icons/restroom-type-08.svg'
import Male from '../../images/icons/restroom-type-07.svg'
import Family from '../../images/icons/restroom-type-02.svg'
import Nursing from '../../images/icons/restroom-type-05.svg'

import Placeholder from '../../images/logos/k11.png'


const K11 = (props) => {

  const images = [
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564581257/k11/overview.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564581257/k11/overview.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564581257/k11/entrance.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564581257/k11/entrance.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564581257/k11/stall-door.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564581257/k11/stall-door.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564581257/k11/female-stalls.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564581257/k11/female-stalls.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564581257/k11/makeup-mirror.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564581257/k11/makeup-mirror.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564581257/k11/wecare-wc.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564581257/k11/wecare-wc.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564581257/k11/mens-stalls.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564581257/k11/mens-stalls.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564581257/k11/sink.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564581257/k11/sink.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564581257/k11/urinals.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564581257/k11/urinals.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564581257/k11/family-room-1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564581257/k11/family-room-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564581257/k11/family-room-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564581257/k11/family-room-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564581257/k11/family-room-3.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564581257/k11/family-room-3.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564581257/k11/nursing-room.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564581257/k11/nursing-room.jpg',
      }
    ]

  return(
  <Layout location={props.location}>
    <div className="location-wrap has-text-centered">
      <h1>K11 Art Mall</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>About</h2>
          <p>K11 Art Mall will always proudly be WeCare WC's first location. Right in the heart of Shanghai, K11 is ideal spot for our restroom as it brings together art and innovation to a world-class shopping mall.</p>
          <p>Located on Level B3, the WeCare WC x K11 facilities are an oasis away from the hustle and bustle of the mall and Shanghai. The Female and Male rooms boast floor to ceiling, graphical stalls and bright, motivational mirrors. Have a large family and dread the restroom experience? The Family room is your solution boasting a spacious floorplan with all the tools to come and leave as a family in one piece. New mother? The Nursing room will provide a tranquil space to breast feed and share a special moment with your little one.</p>
          <div className="is-flex image is-64x64">
            <img src={Female} alt="female-room"/><img src={Male} alt="male-room"/><img src={Family} alt="family-room"/><img src={Nursing} alt="nursing-room"/>
          </div>
          <div className="is-hidden-mobile">
            <h2>Location Partner</h2>
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="column">
          <h2>Location</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="K11" coords="121.473636, 31.223389"/>
          <div className="has-text-centered">
            <h3>300 Huai Hai Zhong Lu, Xuhui District, Shanghai, China</h3>
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

export default K11
