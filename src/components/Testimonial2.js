import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Ellai from '../images/logos/ellai.png'
import Blueair from '../images/logos/blueair.png'
import Dupont from '../images/logos/dupont.png'
import Dyson from '../images/logos/dyson.png'
import Kohler from '../images/logos/kohler.png'
import Marazzi from '../images/logos/marazzi.png'
import Philips from '../images/logos/philips.png'
import VB from '../images/logos/v&b.png'


class Gallery extends React.Component {
  items = [{logo: Ellai, text: "\"宜来ELLAI与WECARE有各自的专业领域，但有共同的愿景，都致力于打造美好的卫生空间。双方深度的战略合作关系更是为未来增加了助力。\""},
  {logo: Dyson, text: "\"我们被卫葛雅为公共洗手间行业带来的专业性和激情所深深打动。他们的设计理念看起来棒呆了，并且我确信他们将会为中国的公共卫生行业带来全新标准。\""},
  {logo: Dupont, text: "\"我们对能与卫葛雅（行业翘楚）的合作感到十分荣幸，并深切期待这次合作为品牌双方及行业所带来的收益。杜邦与卫葛雅的合作是高效的，我们对合作充满自信并相信它会提升公众对于公共卫生标准的期待。\""},
  {logo: Blueair, text: "\"卫葛雅是一家富有创造力的公司并彻底地把新理念引入中国的公共洗手间行业。我们（博露雅迩）对于这次合作感到非常激动，并期待为卫葛雅的使用者提供纯净空气。\""},
  {logo: Kohler, text: "\"科勒的使命是为顾客提供高品质的，具有艺术气息的产品和豪华的生活体验而卫葛雅是能帮助我们实现这一理念的完美合作方。他们正在对中国公共卫生间设施提升做出了巨大影响。作为卫葛雅的合作方，我们为公众提供独特的，有品质的，环保的卫生解决方案。\""},
  {logo: Marazzi, text: "\"我们很期待与卫葛雅的合作，来为他们的顾客创造一份愉悦的体验。马拉齐具有创造性的设计和高品质的产品加上卫葛雅的先锋性的公共洗手间设计理念，这是双方长期深度合作的一个开始。\""},
  {logo: Philips, text: "\"WeCare WC对细节的专注与对创新性设计的坚持让我们之间的合作非常顺畅，其结果是让人赞叹的。 卫葛雅为中国公共洗手间行业设定了崭新标准，而（飞利浦）我们很荣幸能为卫葛雅洗手间的使用者提供出色又节能的用户体验。\""},
  {logo: VB, text: "\"我们的共同使命是，结合唯宝历史悠久的精湛工艺和卫葛雅的革新性的公共卫生解决方案， 来设定中国公共洗手间行业的全新标准。毕竟，无论身处何方，每一个人都值得享有一个干净舒适的空间来放松身心，恢复活力。\""},]

  state = {
    galleryItems: this.items.map((i) => (<div style={{background: 'white'}}><img key={i} src={i.logo} className="smaller-image"/><p style={{fontSize: '16px'}}>{i.text}</p></div>))
  }

  render() {
    return (
      <div style={{marginBottom: "30px"}}>
        <AliceCarousel
          buttonsDisabled={true}
          items={this.state.galleryItems}
          duration={250}
          autoPlayInterval={7000}
          autoPlay={true}
        />
      </div>
    )
  }
}

export default Gallery
