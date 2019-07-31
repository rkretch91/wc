import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/en"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Nursing from '../../images/icons/restroom-type-05.svg'

import Placeholder from '../../images/logos/airports.png'


const Hongqiao = (props) => {

  const images = [
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564397852/shanghai-hongqiao-international-airport/hongqiao-overview.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564397852/shanghai-hongqiao-international-airport/hongqiao-overview.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564397901/shanghai-hongqiao-international-airport/seating-area.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564397901/shanghai-hongqiao-international-airport/seating-area.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564397852/shanghai-hongqiao-international-airport/changing-counter.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564397901/shanghai-hongqiao-international-airport/changing-counter.jpg',
      },
    ]

  return(
  <Layout location={props.location}>
    <div className="location-wrap has-text-centered">
      <h1>Shanghai Hongqiao International Airport</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>About</h2>
          <p>In March 2017, we launched our first project with Shanghai Hongqiao International Airport. With over 40 million passengers per year, Hongqiao Airport is within the top 50 busiest airports worldwide. This project is a nursing room in the airport’s Terminal 1 featuring plenty of amenities to make the nursing experience more comfortable and practical for parents and their children before taking off. This is the first of many public facility projects with Hongqiao Airport and other airports in China.</p>
          <div className="is-flex image is-96x96">
            <img src={Nursing} alt="nursing-room"/>
          </div>
          <div className="is-hidden-mobile">
            <h2>Location Partner</h2>
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="column">
          <h2>Location</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="Shanghai Hongqiao International Airport" coords="121.333353, 31.191759"/>
          <div className="has-text-centered">
            <h3>2550 Hongqiao Rd, Changning, China, 201105</h3>
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

export default Hongqiao
