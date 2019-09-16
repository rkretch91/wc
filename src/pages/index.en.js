import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../layouts/en"
import Banner from "../components/Banner"
import Gallery from "../components/Testimonial"

import Who from '../images/who-icon.png'
import What from '../images/what-icon.png'
import Where from '../images/where-icon.png'
import Why from '../images/why-icon.png'

import Corian from '../images/partners/1.jpg'
import Dyson2 from '../images/partners/2.jpg'
import Ellai2 from '../images/partners/4.jpg'

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
            excerpt(pruneLength: 200)
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
          <span><p>Pioneers and experts transforming the public restroom and facility experience globally.</p></span>
        </div>
        <div className="column has-text-centered">
          <img src={What} style={{width: '40px'}} alt="what-is-wecare-wc" />
          <span><h5>what we do</h5></span>
          <span><p>Create hygienic and innovatively designed public restrooms and facilities.</p></span>
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
    <div className="home-wrap">
      <div className="columns">
        <div className="column">
          <img src={Corian} alt="corian-counter" id="justthisonce" />
        </div>
        <div className="column">
          <img src={Dyson2} alt="dyson-airblade" id="justthisonce" />
        </div>
        <div className="column">
          <img src={Ellai2} alt="ellai-toilet" id="justthisonce" />
        </div>
      </div>
    </div>
    <div className="partners-home has-text-centered">
      <h1>Our Partners</h1>
      <p style={{marginBottom: '30px'}}>We have an ever-expanding list of partners to help make our restrooms a reality. We would love to work with you too.</p>
      <Gallery/>
      <button className="button"><Link to="/en/contact/" style={{color: "white"}}>Become a Partner</Link></button>
    </div>
    <div className="blog-wrapper">
      <div className="blog has-text-centered">
        <h1>News</h1>
        <div className="columns is-centered">
        {data.allMarkdownRemark.edges.slice(0, 6).map(({ node }) => {
          if (node.frontmatter.language === "EN") {
          return(
          <div className="column has-text-left spacing" key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <div className="blog-card">
                <div className="blog-img" style={{ backgroundImage: `url('${node.frontmatter.photo}')`}}/>
                <span><h5>{node.frontmatter.title}{" "}</h5></span>
                <span><p>{node.excerpt}</p></span>
              </div>
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


