import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/en"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Female from '../../images/icons/restroom-type-08.svg'
import Nursing from '../../images/icons/restroom-type-05.svg'

import Placeholder from '../../images/logos/blueair.png'


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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas ut arcu eu finibus. Morbi dictum fermentum sapien at finibus. Quisque maximus, dui sit amet posuere accumsan, nisi ipsum gravida ante, vitae vestibulum lorem ipsum et ex. Suspendisse blandit, diam ac varius vestibulum, dolor est rhoncus nisl, semper posuere magna nisi vel nunc. Donec imperdiet a erat sed lacinia. Nam ultrices at diam vel placerat. Nulla quam turpis, posuere tincidunt hendrerit vitae, aliquam mollis diam. Curabitur varius dignissim erat eget tempor. Suspendisse potenti. Nulla id sapien tortor. Sed felis ex, porttitor in placerat id, commodo non felis. Ut augue sapien, semper eu nunc id, posuere tincidunt ante. Suspendisse facilisis turpis vitae consequat interdum. Integer tincidunt fermentum mi, nec fringilla ipsum efficitur eu. Nullam volutpat mi felis, vitae lacinia risus dictum et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <div className="is-flex image is-96x96">
            <img src={Female} alt="female-room"/><img src={Nursing} alt="nursing-room"/>
          </div>
          <h2>Location Partner</h2>
          <img src={Placeholder} alt="logo" style={{maxWidth: '200px'}}/>
        </div>
        <div className="column">
          <h2>Location</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="XTD Plaza"/>
          <div className="has-text-centered">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default XTD
