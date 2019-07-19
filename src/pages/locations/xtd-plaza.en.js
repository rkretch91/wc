import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/en"
import ImageGallery from 'react-image-gallery';


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
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} />
    </div>
  </Layout>
  )
}

export default XTD
