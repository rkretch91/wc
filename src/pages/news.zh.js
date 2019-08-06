import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../layouts/zh"

const News = (props) => (
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
            excerpt
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
    <div className="blog-banner" id="news-banner" style={{background: `linear-gradient(rgba(0,0,0,0.1),rgba(255,255,255,0.2)), url('https://res.cloudinary.com/wecare-wc/image/upload/v1565015970/k11/urinals.jpg')`}}>
      <h1>新闻</h1>
    </div>
    <div className="blog-wrapper">
      <div className="blog has-text-centered">
        <div className="columns is-multiline">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.language === "CN") {
          return(
          <div className="column has-text-left is-one-third" key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <div className="blog-img" style={{ backgroundImage: `url('${node.frontmatter.photo}')`}}/>
              <span><h5>{node.frontmatter.title}{" "}</h5></span>
              <span><p>{node.excerpt}</p></span>
              <span className="has-text-right"><p>{node.frontmatter.date}</p></span>
            </Link>
          </div>
          )
        }})}
        </div>
      </div>
    </div>
  </Layout>
  )}
  />
)

export default News
