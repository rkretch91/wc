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
  items = [{logo: Ellai, text: "\"Ellai and WeCare WC share the same vision while being experts in differing fields. Both companies are devoted to creating better restroom spaces and the deep strategic cooperation will accelerate the development and growth of both brands.\""},
  {logo: Dyson, text: "\"We are impressed by the professionalism and enthusiasm that WeCare WC brings to the industry. The design concept looks amazing and will be a completely new standard for sanitation in China.\""},
  {logo: Dupont, text: "\"We feel very privileged to work with the WeCare WC team as they are experts in this field and we look forward to this exciting partnership for the greater good. The collaboration between Dupont and WeCare WC has been highly effective.\""},
  {logo: Blueair, text: "\"WeCare WC is a creative company that brings a completely new concept to public restrooms in China. We at Blueair are excited about our partnership and look forward to providing purified clean air to WeCare WC guests.\""},
  {logo: Kohler, text: "\"Kohler’s mission is to provide customers with high quality, artistic products and a gracious living experience. WeCare WC is the perfect partner to help us achieve this. They are making an incredibly big impact on China’s public facilities.\""},
  {logo: Marazzi, text: "\"Combining MARAZZI’s creative design and high quality products with WeCare WC’s pioneering public toilet concept, this is the beginning of a long-term strategic partnership.\""},
  {logo: Philips, text: "\"WeCare WC's attention to detail and focus on innovative design has resulted in a very smooth and complimentary partnership. WeCare WC is setting a new standard for public facilities in China and Philips is proud to be providing superior and energy-efficient user experiences in WeCare WC restrooms.\""},
  {logo: VB, text: "\"Our common mission, combining together the time-honored craftsmanship of Villeroy & Boch with WeCare WC’s innovative public sanitation solutions, is to create a new benchmark in public restrooms in China. After all, everyone deserves a clean space to relax and refresh regardless of where they are.\""},]

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
