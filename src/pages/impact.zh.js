import React from 'react'
import Layout from "../layouts/zh"
import Link from "gatsby-link"

// About Icons
import ImpactPic from '../images/impact.jpg'




const Impact = (props) => (
  <Layout location={props.location}>
    <div style={{backgroundColor: 'white'}}>
      <div className="blog-banner" style={{boxShadow: "none", background: `linear-gradient(rgba(0,0,0,0.0),rgba(255,255,255,0.0)), url(${ImpactPic})`}}>
      </div>
      <h1 style={{position: 'absolute', top: '30vh', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', color: 'white'}} className="has-text-centered">社会责任</h1>
      <div className="about-wrap has-text-centered">
        <h2>除了提高公共厕所的标准外，我们还大量参与社会活动，希望对我们周围的社区和环境产生积极影响。<br></br>
        查看我们最近的一些社区项目。<br></br><br></br></h2>
        <hr style={{opacity: ".3", marginBottom: '40px'}}/>
        <div className="columns">
          <div className="column is-full">
            <img src='https://res.cloudinary.com/wecare-wc/image/upload/v1563525318/tokyo2020-wecarewc/tokyo-2020-2.jpg' alt="corian-counter" id="justthisonce" />
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-left">
            <h2>WeCare WC x Tokyo 2020</h2>
            <p>世界充满了有积极感染力的人，他们的人生具有强烈的启发性和激动人心的情节，正如走在世界前沿的中国一样。王家超，他将作为中国第一名残疾铁人三项运动员，代表国家角逐2020年东京残奥会。</p>
            <p>他的生活充满了意外，但肆无忌惮的顽强与乐观使他取得的成就，是许多人一生中都未曾尝试过的。家超出生于建水，位于云南的一个小县城，5岁时因电击失去左臂。生活给的意外从不能让他屈服，在付出超乎常人的努力后10岁时进入云南省残疾游泳队。他惊人的顽强与自制力，使他在短短几年迎得人生的一次蜕变并成为国家游泳队梦寐以求的一员。2012年他再一次的超越自己并取得了伦敦残奥会冠军。他的梦想从未局限于单一维度，2015年退役后转项铁人三项，同年在云南在云南师范大学获得体育教育硕士学位。</p>
            <p>完成了人生一次次飞跃后，如今他再次出发比以往任何时候都更强大，这次增加了自行车和跑步在三项全能中的组合。区别于游泳比赛，中国目前没有针对残疾铁人三项而设立国家队。</p>
            <p>在此WeCare WC也被他的伟大梦想所感动，他对待梦想的执着、直面困难的启发、充满积极能量的社会影响力，感谢他带来的这一切美好的精神食粮。我们也不胜荣幸的成为家超的官方赞助方之一 ，帮助他在所热爱的赛道纵横驰骋。家超始终以积极乐观的榜样形象，向我们诠释每个人都有具备成为一个强者的能力，我们期待着与他并肩作战，直到他在2020年东京残奥会上取得重大胜利。</p>
            <p>为梦想而战，为热爱而活！</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <img src='https://res.cloudinary.com/wecare-wc/image/upload/v1563525317/tokyo2020-wecarewc/tokyo-2020-4.jpg' alt="dyson-airblade" id="justthisonce" />
          </div>
          <div className="column">
            <img src='https://res.cloudinary.com/wecare-wc/image/upload/v1563525317/tokyo2020-wecarewc/tokyo-2020-5.jpg' alt="ellai-toilet" id="justthisonce" />
          </div>
        </div>
        <div className="columns">
          <div className="column is-hidden-desktop">
            <img src='https://res.cloudinary.com/wecare-wc/image/upload/v1563525318/tokyo2020-wecarewc/tokyo-2020-1.png' alt="corian-counter" id="justthisonce" />
          </div>
        </div>
        <hr style={{opacity: ".3", marginBottom: '40px'}}/>
        <h2>我们一直在寻找能够回馈社会的方式，如果你有合作的好主意，联系我们吧。</h2>
        <Link to="/en/contact"><button className="button" style={{marginBottom: "40px"}}>联系我们</button></Link>
      </div>
    </div>
  </Layout>
)

export default Impact
