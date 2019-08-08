import React from 'react'
import Layout from "../../layouts/zh"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Family from '../../images/icons/restroom-type-02.svg'
import Accessible from '../../images/icons/restroom-type-03.svg'

import Placeholder from '../../images/logos/airports.png'


const Pudong = (props) => {

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
      <h1>上海浦东国际机场</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>关于</h2>
          <p>WeCare WC近日在上海浦东国际机场–中国最为忙碌的交通枢纽落成了最新的项目。浦东国际机场每年服务来自全球超过7000万旅客，通过两间家庭卫生间和两间无障碍卫生间的改造，旅客们不管是起飞前还是到达后，都能够享用更舒适更放松的公共卫生空间。</p>
          <p>这一改造解决了旅行中常常遇到的痛点，尤其是那些全家出行的旅客。家庭卫生间内划分为四个区域：哺乳区，有舒适的哺乳椅和临时婴儿床，供妈妈吸奶哺乳；玩耍区，有帐篷、益智玩具、平板电脑和书籍，供儿童游玩和阅读；休息区，有伸缩椅 ，供旅客暂时休息；婴儿护理区，有尿布台、奶粉冲饮机，供爸爸妈妈给宝宝换尿布、冲奶粉等。</p>
          <div className="is-flex image is-96x96">
            <img src={Family} alt="female-room"/><img src={Accessible} alt="male-room"/>
          </div>
          <div className="is-hidden-mobile">
            <h2>位置合作伙伴</h2>
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="column">
          <h2>位置</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="Shanghai Pudong International Airport" coords="121.805551, 31.151481"/>
          <div className="has-text-centered">
            <h3>迎宾大道6000号</h3>
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

export default Pudong
