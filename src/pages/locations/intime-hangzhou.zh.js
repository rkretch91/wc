import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/zh"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Female from '../../images/icons/restroom-type-08.svg'
import Male from '../../images/icons/restroom-type-07.svg'
import Family from '../../images/icons/restroom-type-02.svg'


import Placeholder from '../../images/logos/cnpc.png'


const Intime = (props) => {

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
      <h1>杭州银泰百货</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>关于</h2>
          <p>WeCare WC公共卫生间在杭州银泰百货，每个角落都充满了惊喜：沉浸式体验的厕所隔间—-每打开一扇门就是一个不同的“世界”、带有正能量字句的镜子、好莱坞式的化妆镜等等，带小朋友出行的爸爸妈妈也不需要担心，我们还特地设计了一个家庭卫生间，里面配备大人、儿童马桶以及方便给小宝宝换尿布的尿布台。</p>
          <p>杭州武林银泰百货位于杭州市中心，这座年近30年的建筑见证了这个城市的发展并始终引领新兴时尚潮流的脚步，其中的许多品牌也都在杭州创下销售纪录。此外，银泰和电商巨头阿里巴巴也正在进行一系列紧密合作。</p>
          <div className="is-flex image is-96x96">
            <img src={Female} alt="female-room"/><img src={Male} alt="male-room"/><img src={Family} alt="family-room"/>
          </div>
          <div className="is-hidden-mobile">
            <h2>位置合作伙伴</h2>
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="column">
          <h2>位置</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="Intime Hangzhou" coords="120.152393, 30.187239"/>
          <div className="has-text-centered">
            <h3>浙江省杭州市滨江区东信大道1204号</h3>
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

export default Intime
