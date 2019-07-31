import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../../layouts/zh"
import ImageGallery from 'react-image-gallery';
import Mapbox from "../../components/SmallMap"

import Female from '../../images/icons/restroom-type-08.svg'
import Nursing from '../../images/icons/restroom-type-05.svg'

import Placeholder from '../../images/logos/xtd-48.png'


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
      <h1>新天地广场</h1>
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} showFullscreenButton={false} />
    </div>
    <div className="location-wrap2">
      <div className="columns">
        <div className="column">
          <h2>关于</h2>
          <p>WeCare WC首个女性尊享公共卫生间，是这个社会对女性权利尊重认可的象征。这一设计的灵感来自于母亲、女儿、祖母、CEO、医生、领导人和其他各行各业的女性，她们是让这个世界变得更加美好的动力与关键所在。</p>
          <p>整个空间被分成卫生间区域与社交休息区域，整合了女性的需求，与众不同。 卫生间区域，每一个使用者都会享受到皇家般的对待。她们会进入一个从顶到地完全满足私密性的卫生间隔间，隔间内有挂墙吉博力马桶，墙面上还贴满了正能量的话语。使用者们可以在光滑无缝的杜邦可丽耐洗手台上梳洗打扮，所使用的龙头是丹麦品牌Vola和中国原创高端品牌宜来。</p>
          <p>如厕完毕后，使用者就可以步入独一无二的社交休息体验区，满足自己的其他需要。妈妈们可以在母婴室中，在如家般舒适的环境中，照顾自己的宝宝。对于那些准备参加会议或者任何重要约会或派对的女生来说，更衣室可以满足更衣的需要，立刻光鲜亮丽。最后，我们在休息区专门设计了一个等待区，有着舒适的沙发，泡泡灯化妆镜和放大镜，供女生们补妆闲谈。</p>
          <div className="is-flex image is-96x96">
            <img src={Female} alt="female-room"/><img src={Nursing} alt="nursing-room"/>
          </div>
          <div className="is-hidden-mobile">
            <h2>位置合作伙伴</h2>
            <img src={Placeholder} alt="logo" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="column">
          <h2>位置</h2>
          <Mapbox map="is-hidden-mobile is-hidden-tablet" locale="XTD Plaza" coords="121.474111, 31.223162"/>
          <div className="has-text-centered">
            <h3>上海市徐汇区淮海中路333号</h3>
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

export default XTD
