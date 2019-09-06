import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../layouts/zh"
import Banner from "../components/Banner"
import Mapbox from "../components/Map"

import Who from '../images/who-icon.png'
import What from '../images/what-icon.png'
import Where from '../images/where-icon.png'
import Why from '../images/why-icon.png'

import Ellai from '../images/logos/ellai.png'
import Blueair from '../images/logos/blueair.png'
import Dupont from '../images/logos/dupont.png'
import Dyson from '../images/logos/dyson.png'
import Kohler from '../images/logos/kohler.png'
import Marazzi from '../images/logos/marazzi.png'
import Philips from '../images/logos/philips.png'
import VB from '../images/logos/v&b.png'

const IndexPage = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
              photo
              language
            }
            fields {
            slug
            }
            excerpt(pruneLength: 100)
            timeToRead
            html

          }
        }
      }
    }
  `
}
  render={data => (
  <Layout location={props.location}>
    <div>
      <Banner slogan="重新定义公共卫生间"/>
      <div className="columns icons-homepage is-centered">
        <div className="column has-text-centered">
          <img src={Who} alt="who-is-wecare-wc" />
          <span><h5>我们是谁</h5></span>
          <span><p>作为行业的先驱者，我们专 业、热情、富有经验，并始 终致力于改善中国以及亚洲 的公共卫生间体验。</p></span>
        </div>
        <div className="column has-text-centered">
          <img src={What} alt="what-is-wecare-wc" style={{width: '40px'}}/>
          <span><h5>我们做什么</h5></span>
          <span><p>我们专注于公共卫生间领 域，几近苛求的卫生标准， 简洁直观的人性化设计以及合作品牌的优质产品组成了 我们的解决方案。</p></span>
        </div>
        <div className="column has-text-centered">
          <img src={Where} alt="where-is-wecare-wc" />
          <span><h5>我们在哪里</h5></span>
          <span><p>办公楼，商场，购物中心，机场，体育馆……只要是公共卫生间，WeCare WC都希望能为大众服务。</p></span>
        </div>
        <div className="column has-text-centered">
          <img src={Why} alt="why-wecare-wc" />
          <span><h5>我们为什么在乎</h5></span>
          <span><p>我们相信每个人都值得拥有一个干净的空间去放松自我。 我们要改变公共卫生间的现状并树立全新的公共卫生间标准。</p></span>
        </div>
      </div>
    </div>
    <Mapbox language="发现更多我们的地点" map="" links="/locations/" />
    <div className="partners-home has-text-centered">
      <h1>合作伙伴</h1>
      <p>我们有一个不断扩大的合作伙伴队伍一起携手，将卫生间愿景变成现实。我们也期待与您合作。</p>
      <div className="partners-logos columns">
        <div className="column">
          <a href="http://www.ellai.cn/" target="_blank" rel="noopener noreferrer"><img src={Ellai} alt="Ellai-logo" /></a>
          <a href="https://www.dyson.com/en.html" target="_blank" rel="noopener noreferrer"><img src={Dyson} alt="Dyson-logo" /></a>
          <a href="http://www.dupont.com/" target="_blank" rel="noopener noreferrer"><img src={Dupont} alt="Dupont-logo" /></a>
          <a href="https://www.philips.com/global" target="_blank" rel="noopener noreferrer"><img src={Philips} alt="Philips-logo" /></a>
          <a href="https://www.us.kohler.com/us/" target="_blank" rel="noopener noreferrer"><img src={Kohler} alt="Kohler-logo" /></a>
          <a href="https://www.villeroy-boch.eu/en/" target="_blank" rel="noopener noreferrer"><img src={VB} alt="VB-logo"/></a>
          <a href="https://www.blueair.com/" target="_blank" rel="noopener noreferrer"><img src={Blueair} alt="Blueair-logo" /></a>
          <a href="https://www.marazzigroup.com/" target="_blank" rel="noopener noreferrer"><img src={Marazzi} alt="Marazzi-logo" /></a>
        </div>
      </div>
      <Link to="/partners" style={{color: "#677e8a", fontSize: "13px", fontWeight: "bolder"}}>了解更多关于我们的合作伙伴</Link><p>或者</p>
      <button className="button"><Link to="/contact/" style={{color: "white"}}>成为我们的合作伙伴</Link></button>
    </div>
    <div className="blog-wrapper">
      <div className="blog has-text-centered">
        <h1>新闻</h1>
        <div className="columns is-centered">
        {data.allMarkdownRemark.edges.slice(0, 6).map(({ node }) => {
          if (node.frontmatter.language === "CN") {
          return(
          <div className="column has-text-left spacing" key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <div className="blog-img" style={{ backgroundImage: `url('${node.frontmatter.photo}')`}}/>
              <span><h5>{node.frontmatter.title}{" "}</h5></span>
              <span><p>{node.excerpt}</p></span>
            </Link>
          </div>
          )
        }})}
        </div>
        <Link to="/news/"><button className="button" id="grey">查看更多讯息</button></Link>
      </div>
    </div>
  </Layout>
  )}
  />
)

export default IndexPage
