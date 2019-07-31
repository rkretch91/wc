import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/zh"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Unisex from '../../images/icons/restroom-type-01.svg'
import Family from '../../images/icons/restroom-type-02.svg'
import Accessible from '../../images/icons/restroom-type-03.svg'
import Powder from '../../images/icons/restroom-type-04.svg'

import Placeholder from '../../images/logos/lilacs.png'


const Lilacs = (props) => {

  const images = [
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564583618/lilacs-international-commerce-center/powder-room-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564583618/lilacs-international-commerce-center/powder-room-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564583618/lilacs-international-commerce-center/entrance-1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564583618/lilacs-international-commerce-center/entrance-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564583618/lilacs-international-commerce-center/all-gender.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564583618/lilacs-international-commerce-center/all-gender.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564583618/lilacs-international-commerce-center/powder-room-1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564583618/lilacs-international-commerce-center/powder-room-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564583618/lilacs-international-commerce-center/entrance-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564583618/lilacs-international-commerce-center/entrance-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564583618/lilacs-international-commerce-center/accessible-room-1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564583618/lilacs-international-commerce-center/accessible-room-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564583618/lilacs-international-commerce-center/accessible-room-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564583618/lilacs-international-commerce-center/accessible-room-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564583618/lilacs-international-commerce-center/family-room-1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564583618/lilacs-international-commerce-center/family-room-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564583618/lilacs-international-commerce-center/family-room-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564583618/lilacs-international-commerce-center/family-room-2.jpg',
      },
    ]

  return(
  <Layout location={props.location}>
    <div className="location-wrap has-text-centered">
      <h1>丁香国际商业中心</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>关于</h2>
          <p>In Mid 2017, we launched Lilacs x WeCare WC. To date, this is one of our most innovative project as it encompasses many different high-need facilities hardly seen anywhere else on Earth, including a world-class Powder Room, two Family Rooms, an Accessible Room, and even an All-Gender Bathroom. Located on the ground level, visitors can truly relax from Shanghai's craziness for a few minutes in one of our tranquil restrooms.</p>
          <div className="is-flex image is-96x96">
            <img src={Unisex} alt="nursing-room"/><img src={Family} alt="nursing-room"/><img src={Accessible} alt="nursing-room"/><img src={Powder} alt="nursing-room"/>
          </div>
          <div className="is-hidden-mobile">
            <h2>位置合作伙伴</h2>
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="column">
          <h2>位置</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="Lilacs International Commercial Center" coords="121.551695, 31.225520"/>
          <div className="has-text-centered">
            <h3>上海市浦东新区丁香路858弄</h3>
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

export default Lilacs
