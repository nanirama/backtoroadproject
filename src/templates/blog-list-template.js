import React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/LandingPage/common/layout'
import BlogCard from '../components/blog/BlogCard'
import BlogFilter from '../components/blog/BlogFilter'
import Paginate from '../components/blog/paginate'
import Seo from '../components/seo'
import LandingBanner from '../components/LandingPage/LandingBanner'
const Blog = (props) => {  
    const { currentPage, numPages } = props.pageContext     
    const { PostData, BannerImage } = props.data
    return (
    <Layout>
        <Seo cpath = {props.cpath} />
        <div className="blog_blk w-100 float-left py-4">   
        <div className="container">
        <div className="row mb-3">
                <div className="col-md-8 col-xs-12">
                    <h1 className="tlt">BLOG</h1> 
                </div>
                <div className="col-md-4 col-xs-12">
                <BlogFilter/>  
                </div>
            </div>     
            <div className="row d-flex align-items-stretch">
                    { PostData.edges.map((item,index) => {
                        return (
                          <div className="col-md-4 col-sm-6 col-xs-12 align-self-stretch" key={index}>
                            <BlogCard data={item.node}/>
                          </div>
                        )
                    })}                
            </div>  
            {numPages>1 && <Paginate currentPage={currentPage} numPages={numPages} path='blog'/>}          
        </div>
        </div>
        <LandingBanner bannerImage={BannerImage}/>
    </Layout>
)
}

export const query = graphql`
query getAllPosts($skip: Int!, $limit: Int!) {
  BannerImage: file(relativePath: { eq: "landing/ban_img.png" }) {
      childImageSharp {
          gatsbyImageData(
              width: 300
          )
      }
  }
    PostData : allWpPost(skip: $skip, limit: $limit) {
        edges {
          node {
            title
            id
            slug
            excerpt
            author {
              node {
                name
              }
            }
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(height: 300, width: 400)
                  }
                }
              }
            }
            categories {
                nodes {
                  name
                }
              }
          }
        }
      }
}
`
export default Blog