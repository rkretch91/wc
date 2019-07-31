import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/en"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Female from '../../images/icons/restroom-type-08.svg'
import Male from '../../images/icons/restroom-type-07.svg'
import Family from '../../images/icons/restroom-type-02.svg'


import Placeholder from '../../images/logos/intime.png'


const Intime = (props) => {

  const images = [
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564560951/intime/urinals.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564560951/intime/urinals.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564560951/intime/entrance.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564560951/intime/entrance.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564560951/intime/mens-overview.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564560951/intime/mens-overview.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564560951/intime/mens-stalls.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564560951/intime/mens-stalls.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564560951/intime/sink.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564560951/intime/sink.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564560951/intime/cleaning-staff.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564560951/intime/cleaning-staff.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564560951/intime/overview.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564560951/intime/overview.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564560951/intime/female-stalls.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564560951/intime/female-stalls.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564560951/intime/family-room-toilets.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564560951/intime/family-room-toilets.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564560951/intime/changing-station.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564560951/intime/changing-station.jpg',
      }
    ]

  return(
  <Layout location={props.location}>
    <div className="location-wrap has-text-centered">
      <h1>Intime Hangzhou</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>About</h2>
          <p>The restroom at Intime Hangzhou has surprises around every corner, including stalls with vibrant graphics and mirrors with motivational quotes. For customers with families, there is also a family room complete with a changing station, dual adult and child toilets, and educational and amusing graphics coating the walls.</p>
          <p>One of nearly 30 in China, the prominent Hangzhou Wulin Intime Department Store lies in the city’s core. With 350,000 m2 of retail space, it is always one step ahead of others in emerging fashion trends with a number of brands hitting sales records in Hangzhou. Moreover, Intime and e-commerce giant Alibaba have developed a strong partnership with plans to implement a series of long-term growth strategies.</p>
          <div className="is-flex image is-96x96">
            <img src={Female} alt="female-room"/><img src={Male} alt="male-room"/><img src={Family} alt="family-room"/>
          </div>
          <div className="is-hidden-mobile">
            <h2>Location Partner</h2>
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="column">
          <h2>Location</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="Intime Hangzhou" coords="120.152393, 30.187239"/>
          <div className="has-text-centered">
            <h3>1204 Dongxin Ave, Binjiang District, Hangzhou, China</h3>
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

export default Intime
