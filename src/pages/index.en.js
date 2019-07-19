import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../layouts/en"
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
      <Banner slogan="REDEFINING PUBLIC RESTROOMS"/>
      <div className="columns icons-homepage is-centered">
        <div className="column has-text-centered">
          <img src={Who} alt="who-is-wecare-wc" />
          <span><h5>who we are</h5></span>
          <span><p>Pioneers and experts transforming the public facility experience globally.</p></span>
        </div>
        <div className="column has-text-centered">
          <img src={What} style={{width: '40px'}} alt="what-is-wecare-wc" />
          <span><h5>what we do</h5></span>
          <span><p>Create hygienic and innovatively designed public facilities and restrooms.</p></span>
        </div>
        <div className="column has-text-centered">
          <img src={Where} alt="where-is-wecare-wc" />
          <span><h5>where we build</h5></span>
          <span><p>Shopping malls, department stores, airports, gas stations, office buildings, stadiums…and more.</p></span>
        </div>
        <div className="column has-text-centered">
          <img src={Why} alt="why-wecare-wc" />
          <span><h5>why we care</h5></span>
          <span><p>We believe that everyone deserves a clean space to refresh and relax. We are changing the status quo.</p></span>
        </div>
      </div>
    </div>
    <Mapbox language="Learn more about our locations" map="" />
    <div className="partners-home has-text-centered">
      <h1>Our Partners</h1>
      <p>We have an ever expanding list of partners to help make our restrooms a reality. We would love to work with you too.</p>
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
      <Link to="#" style={{color: "#677e8a", fontSize: "13px", fontWeight: "bolder"}}>Learn More</Link><p>or</p>
      <button className="button">Become a Partner</button>
    </div>
    <div className="blog-wrapper">
      <div className="blog has-text-centered">
        <h1>新闻</h1>
        <div className="columns is-centered">
        {data.allMarkdownRemark.edges.slice(0, 6).map(({ node }) => {
          console.log(node.frontmatter.title)
          if (node.frontmatter.language === "EN") {
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
        <Link to="/en/news/"><button className="button" id="grey">See More News</button></Link>
      </div>
    </div>
  </Layout>
  )}
  />
)

export default IndexPage


