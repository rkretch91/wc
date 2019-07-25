import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/zh"
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
      <h1>中国石化加油站（锦绣路）</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>关于</h2>
          <p>WeCare WC作为中国首个公共卫生间品牌，以创新的理念重新定义公共卫生间标准。中国石化以“为美好生活加油”作为企业使命，与时俱进，勇于创新。此次WeCare WC 与中国石化强强联合，在上海市浦东新区锦绣路加油站落成了首个户外加油站公共卫生间。我们非常荣幸能为中国石化服务，别出心裁地将中国石化的企业文化和元素融入到卫生间设计中，打造出舒适而温馨的空间，为加油站的客户提供更好的体验服务。</p>
          <p>WeCare WC中石化卫生间有着不同寻常的产品与精细的做工，宽敞的厕所隔间，带有广告屏幕的镜字等等。当这些所有的特点结合起来，造就了独一无二、不可比拟的加油站公共卫生间。</p>
          <div className="is-flex image is-96x96">
            <img src={Female} alt="female-room"/><img src={Male} alt="male-room"/>
          </div>
          <div className="is-hidden-mobile">
            <h2>位置合作伙伴</h2>
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="column">
          <h2>位置</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="Sinopec, Jinxiu Road" coords="121.569541, 31.225983"/>
          <div className="has-text-centered">
            <h3>上海浦东新区锦绣路11号</h3>
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
