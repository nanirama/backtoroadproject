import React, { useState} from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/LandingPage/common/layout'
import SEO from '../components/seo'
const Blog = (props) => {       
    const { PostData } = props.data
    const [posts, setPosts] = useState(PostData);
    console.log('All Posts List', posts); 
    return (
    <Layout>
        <SEO cpath = {props.cpath} />
        <div className="blog_blk w-100 float-left py-4">   
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-xs-12">
                    <h2 className="tlt">BLOG</h2> 
                </div>
            </div>     
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    { posts.edges.map((item,index) => {
                        return (
                            <h2>welcome</h2>
                        )
                    })}
                    <h4>Blog Listing</h4>
                </div>
            </div>             
        </div>
        </div>
    </Layout>
)
}
export const pageQuery = graphql`
  query{
    PostData : allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          node {
            id
            slug
            title
            excerpt
            date
            author {
              node {
                name
              }
            }
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 500)
                  }
                }
              }
            }
          }
        }
      }
  }
`
export default Blog