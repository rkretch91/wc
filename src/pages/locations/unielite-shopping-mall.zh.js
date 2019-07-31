import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/zh"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Female from '../../images/icons/restroom-type-08.svg'
import Male from '../../images/icons/restroom-type-07.svg'

import Placeholder from '../../images/logos/unielite.png'

const UniElite = (props) => {

  const images = [
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563526005/unielite-shopping-mall/entranceway.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563526005/unielite-shopping-mall/entranceway.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563526005/unielite-shopping-mall/overview.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563526005/unielite-shopping-mall/overview.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563526005/unielite-shopping-mall/sinks-and-mirrors.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563526005/unielite-shopping-mall/sinks-and-mirrors.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563526005/unielite-shopping-mall/mirror-shot.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563526005/unielite-shopping-mall/mirror-shot.jpg',
      },
      {
        original: 'https://res.cloudinary.com/wecare-wc/image/upload/v1563526005/unielite-shopping-mall/stall.jpg',
        thumbnail: 'https://res.cloudinary.com/wecare-wc/image/upload/c_thumb,w_200,g_face/v1563526005/unielite-shopping-mall/stall.jpg',
      },
    ]

  return(
  <Layout location={props.location}>
    <div className="location-wrap has-text-centered">
      <h1>中海环宇荟</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>关于</h2>
          <p>作为上海核心商务中心，新天地商圈历来以石库门历史建筑、老上海风情、小资生活专属地著称，以中西合璧、新旧交融的姿态完美展示着魔都这座城市的风貌。就在这老上海风情与现代化完美结合的环境中, WeCare WC联手中海环宇荟在B2层打造了新颖洁净的公共卫生间。</p>
          <p>环宇荟B2卫生间，有着WeCare WC独特的设计风格，使用者为被宽敞的空间、隐私又有趣的图案、带有正能量字句的镜子、洁净闪亮的台面所震撼。就像周围的新天地商圈一样，卫生间设计是中西文化与古代当代的完美融合。</p>
          <p>在这里你会体验到在所有WeCare WC中能体验到的感觉，更清新，更满足，并准备好去接受更多UniElite和上海所带来的惊喜。</p>
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
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="UniElite Shopping Mall" coords="121.476011, 31.218197"/>
          <div className="has-text-centered">
            <h3>黄埔区新天地商圈，黄陂南路838号</h3>
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

export default UniElite
