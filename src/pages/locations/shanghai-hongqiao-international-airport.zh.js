import React from 'react'
import Layout from "../../layouts/zh"
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
      <h1>上海虹桥国际机场</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>关于</h2>
          <p>2017年3月，WeCare WC首个虹桥国际机场合作项目落成。作为全球最繁忙的50个机场之一，虹桥国际机场每年会接待来自世界各地四千万旅客。此次项目是虹桥T1航站楼精品母婴室，我们精心设计了许多便利设施，为父母和孩子带来更舒适的体验。这是我们与虹桥国际机场以及其他国内机场合作的首个公共设施项目。</p>
          <div className="is-flex image is-96x96">
            <img src={Nursing} alt="nursing-room"/>
          </div>
          <div className="is-hidden-mobile">
            <h2>位置合作伙伴</h2>
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="column">
          <h2>位置</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="Shanghai Hongqiao International Airport" coords="121.333353, 31.191759"/>
          <div className="has-text-centered">
            <h3>虹桥路2550号</h3>
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
