import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/en"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Moms from '../../images/icons/restroom-type-06.svg'

import Placeholder from '../../images/logos/icc.png'

const ICC = (props) => {

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
      <h1>ICC (Shanghai International Commerce Center)</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>About</h2>
          <p>The ICC x WeCare WC Mom’s Room was conceived to solve the dilemma of not having a suitable space to breast pump/feed after finishing maternity leave and going back to work. Designed with utmost comfort and privacy in mind, moms will feel cared for from the moment they enter. Joined by a common corridor, moms can enter one of two private breast pumping rooms using a custom key card. Each room features tailor-made wallpaper with simple, but elegant flower patterns, plush Swedish-made carpet, a sleek one-piece Corian counter with a wash basin, a full length mirror along with a grandiose beauty mirror, an Ellai tap, comfortable nursing armchairs and side table, and bottle disinfectant. Moms can pump in peace while listening taking in the serene atmosphere around them. </p>
          <p>After pumping, the corridor leading out is lined with lockers secured with password-locks for moms to store their breast pumping machine and other equipment along with a freezer for storing milk.</p>
          <div className="is-flex image is-96x96">
            <img src={Moms} alt="moms-room"/>
          </div>
          <div className="is-hidden-mobile">
            <h2>Location Partner</h2>
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="column">
          <h2>Location</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="ICC (Shanghai International Commerce Center)" coords="121.458522, 31.216515"/>
          <div className="has-text-centered">
            <h3>999 Huaihai Middle Rd，Xuhui District, Shanghai, China</h3>
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

export default ICC
