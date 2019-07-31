import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/zh"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Moms from '../../images/icons/restroom-type-06.svg'

import Placeholder from '../../images/logos/icc.png'

const ICC = (props) => {

  const images = [
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564558772/icc/room1b.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564558772/icc/room1b.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564558772/icc/entrance.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564558772/icc/entrance.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564558772/icc/room2a.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564558772/icc/room2a.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564558772/icc/wecare-wc.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564558772/icc/wecare-wc.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564558772/icc/lockers1.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564558772/icc/lockers1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564558772/icc/room1a.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564558772/icc/room1a.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564558772/icc/room1c.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564558772/icc/room1c.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1564558772/icc/sink.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1564558772/icc/sink.jpg',
      }
    ]

  return(
  <Layout location={props.location}>
    <div className="location-wrap has-text-centered">
      <h1>上海环贸广场</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>关于</h2>
          <p>ICC x WeCare WC 妈妈休息室就是为了解决这个难题而打造的。休息室设计的出发点是提供极致的舒适性和隐私性，因此从进入的那一刻起，妈妈们就能感受到无微不至的贴心设计。通过一个公共走廊，妈妈们可以使用一张定制的钥匙卡进入两个独立吸奶室中的任意一个。每个房间都拥有特别定制的墙纸——绘有简洁而优雅的花卉图案，一张瑞典制造的PVC地毯，一个光滑的带有洗手盆的一体式可丽耐台面，一面全身镜与美妆镜，一个宜来卫浴水龙头，舒适的哺乳吸奶椅和边桌。妈妈们可以在这里不被打扰地吸奶，享受宁静的气氛。</p>
          <p>吸完奶后，通过走廊，是一排设有密码锁的储物柜，供妈妈们储存吸奶器和其他设备，同时还设有一个储存母乳的冰柜。</p>
          <div className="is-flex image is-96x96">
            <img src={Moms} alt="moms-room"/>
          </div>
          <div className="is-hidden-mobile">
            <h2>位置合作伙伴</h2>
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="column">
          <h2>位置</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="ICC (Shanghai International Commerce Center)" coords="121.458522, 31.216515"/>
          <div className="has-text-centered">
            <h3>上海市徐汇区淮海中路999号</h3>
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
