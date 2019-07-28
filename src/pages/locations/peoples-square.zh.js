import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/zh"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Male from '../../images/icons/restroom-type-07.svg'
import Female from '../../images/icons/restroom-type-08.svg'
import Nursing from '../../images/icons/restroom-type-05.svg'

import Placeholder from '../../images/logos/cnpc.png'


const PSquare = (props) => {

  const images = [
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140325/peoples%20square/accessible-room-1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140325/peoples%20square/accessible-room-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140331/peoples%20square/facade.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140331/peoples%20square/facade.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/urinals.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140324/peoples%20square/urinals.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/nursing-room-1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140324/peoples%20square/nursing-room-1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/nursing-room-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140324/peoples%20square/nursing-room-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/accessible-room-2.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140324/peoples%20square/accessible-room-2.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/accessible-room-3.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140324/peoples%20square/accessible-room-3.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1559140324/peoples%20square/accessible-room-4.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1559140324/peoples%20square/accessible-room-4.jpg',
      }
    ]

  return(
  <Layout location={props.location}>
    <div className="location-wrap has-text-centered">
      <h1>上海人民广场景区</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>关于</h2>
          <p>在上海中心地带闻名中外的人民广场，落成了WeCare WC最新的项目。武胜路10号的公共卫生间始建于1957年，WeCare WC参与了这一项目的翻新，改造了一楼的无障碍卫生间和二楼的母婴室。</p>
          <p>武胜路卫生间翻新前在全市超过400所公共卫生间的年度检查中位列前茅，如今再造后，增加了旅游资讯功能，更将成为首屈一指的特色公共卫生间。这是一个旅游城市从卫生间的角度关心游客的缩影与开端。</p>
          <div className="is-flex image is-96x96">
            <img src={Female} alt="female-room"/><img src={Male} alt="male-room"/><img src={Nursing} alt="nursing-room"/>
          </div>
        </div>
        <div className="column">
          <h2>位置</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="Peoples Square" coords="121.477188, 31.229672"/>
          <div className="has-text-centered">
            <h3>黄浦区人民广场，武胜路10号</h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default PSquare
