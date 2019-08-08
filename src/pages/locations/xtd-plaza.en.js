import React from 'react'
import Layout from "../../layouts/en"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Female from '../../images/icons/restroom-type-08.svg'
import Nursing from '../../images/icons/restroom-type-05.svg'

import Placeholder from '../../images/logos/xtd-48.png'


const XTD = (props) => {

  const images = [
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563378006/XTD%20Plaza/XTD-Plaza-Entrance-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563378006/XTD%20Plaza/XTD-Plaza-Entrance-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559134935/XTD%20Plaza/XTD-Plaza-Restroom.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134935/XTD%20Plaza/XTD-Plaza-Restroom.jpg'
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559134934/XTD%20Plaza/XTD-Plaza-Sink2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134934/XTD%20Plaza/XTD-Plaza-Sink2.jpg'
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559134934/XTD%20Plaza/XTD-Plaza-Toilets.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134934/XTD%20Plaza/XTD-Plaza-Toilets.jpg'
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559134767/XTD%20Plaza/XTD-Plaza-Lounge.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134767/XTD%20Plaza/XTD-Plaza-Lounge.jpg'
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559134766/XTD%20Plaza/XTD-Plaza-Sink1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134766/XTD%20Plaza/XTD-Plaza-Sink1.jpg'
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559134765/XTD%20Plaza/XTD-Plaza-Sink.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134765/XTD%20Plaza/XTD-Plaza-Sink.jpg'
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559134765/XTD%20Plaza/XTD-Plaza-Nursing-Room.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134765/XTD%20Plaza/XTD-Plaza-Nursing-Room.jpg'
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559134765/XTD%20Plaza/XTD-Plaza-Changing-Room.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559134765/XTD%20Plaza/XTD-Plaza-Changing-Room.jpg'
      }
    ]

  return(
  <Layout location={props.location}>
    <div className="location-wrap has-text-centered">
      <h1>XTD Plaza</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>About</h2>
          <p>This is WeCare WC’s first Premium Ladies Room; a true symbol of women empowerment, inspired by all of the mothers, daughters, grandmothers, CEOs, doctors, leaders, and other women that are pivotal in making the world a better place.</p>
          <p>The room, divided into a restroom area and social lounge, embodies all of the features to make any lady’s day exceptional. On the restroom side, each woman is treated like royalty as she enters a floor to ceiling stall featuring wall-hung Geberit toilets and plenty of positive and encouraging quotes. Visitors can then wash up in style over a sleek Dupont Corian washing basin with water taps mastered by Danish brand Vola and premium Chinese brand ELLAI.</p>
          <p>After freshening up, the one-of-a-kind experience extends to the social lounge, where visitors can tend to other needs or just get some much-deserved relaxation time in. Mothers have the option of entering the nursing room and taking care of their baby in utmost comfort. For women getting ready for meetings or for a special night out, the changing room is ready to make you look great. And last but not least, the lounge area is purposefully designed with a cozy waiting couch, make-up mirrors with bubble lights, and magnifying mirrors.</p>
          <div className="is-flex image is-96x96">
            <img src={Female} alt="female-room"/><img src={Nursing} alt="nursing-room"/>
          </div>
          <div className="is-hidden-mobile">
            <h2>Location Partner</h2>
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="column">
          <h2>Location</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="XTD Plaza" coords="121.474111, 31.223162"/>
          <div className="has-text-centered">
            <h3>333 Huai hai Zhong Rd, Xuhui, Shanghai, China</h3>
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

export default XTD
