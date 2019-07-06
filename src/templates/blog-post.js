import React from 'react';
import Layout from '../layouts/index';
import { graphql } from 'gatsby'

function BlogPost(props) {
    const post = props.data.markdownRemark;
    const {title} = post.frontmatter;
    return (
        <Layout location={props.location}>
            <div className="blog-banner" style={{ backgroundImage: `url('${post.frontmatter.photo}')`}}>
            </div>
            <div className="blog-post">
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <p style={{paddingTop: '20px'}}>{post.frontmatter.date}</p>
            </div>
        </Layout>
    )
}

export default BlogPost
export const query = graphql`
 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        photo
        date
       }
   }
}
`
