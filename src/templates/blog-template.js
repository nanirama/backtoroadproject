import React from "react"
import { graphql } from "gatsby"
import Image from '../components/LandingPage/image'
import Layout from '../components/LandingPage/common/layout'
import Seo from '../components/seo'
import { FaUserAlt } from 'react-icons/fa';
import { CgCalendarDates } from 'react-icons/cg';
import RecentBlogs from '../components/blog/RecentBlogs'
import LandingBanner from '../components/LandingPage/LandingBanner'
import Share from '../components/blog/Share'
const Blog = (props) => {
  const { postDetails, site, RecentPosts, BannerImage } = props.data
  let iconStyles = { color: "gray", fontSize: "1.5em", marginRight:"5px" };
  let iconStyles2 = { color: "gray", fontSize: "1.9em", marginRight:"5px" };

  

  
  const metaDescription = postDetails.seo.metaDesc || site.siteMetadata.description
  const defaultTitle = postDetails.seo.title || site.siteMetadata.title
  const siteURL = site.siteMetadata.siteUrl 
  const siteTitle = postDetails.seo.title || site.siteMetadata.title
  const defaultBanner = postDetails.featuredImage.node.localFile.publicURL
  const author = postDetails.author.node.name
  const siteLanguage = 'en'

  const stitle = `Read ${siteTitle} `;
  const surl = `${siteURL}${props.location.pathname || "/"}`;
  const stwitterHandle = "_MsLinda";

  const seo = {
    title: siteTitle,
    description: metaDescription,
    image: `${siteURL}${defaultBanner}`,
    url: `${siteURL}${props.location.pathname || "/"}`,
    date_published: postDetails.date,
    date_modified: postDetails.modified,
  }

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: siteURL,
      name: defaultTitle,
      alternateName: defaultTitle ? defaultTitle : "",
    },
  ]

  schemaOrgJSONLD.push({
    /* Regular Article Schema */
    "@context": "http://schema.org",
    "@type": "Article",
    author: {
      "@type": "Person",
      name: author,
    },
    copyrightHolder: {
      "@type": "Person",
      name: author,
    },
    copyrightYear: "2021",
    creator: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: author,
      logo: {
        "@type": "ImageObject",
        url: seo.image,
      },
    },
    datePublished: seo.date_published,
    dateModified: seo.date_modified,
    description: seo.description,
    headline: seo.title,
    inLanguage: siteLanguage,
    url: seo.url,
    name: seo.title,
    image: {
      "@type": "ImageObject",
      url: seo.image,
    },
    mainEntityOfPage: seo.url,
  })
  return (
    <Layout>
            <Seo
              title={seo.title}
              description={seo.description}
              cpath = {props.location.pathname}
              pimage = {seo.image}
              schema = {schemaOrgJSONLD}
            />
            <div className="blog_blk w-100 float-left py-4">   
              <div className="container">              
                <div className="row d-flex justify-content-center">
                  <div className="col-md-12 col-xs-12 d-flex justify-content-start flex-column">
                  <article className="blog">
                    <Image img={postDetails.featuredImage.node.localFile} itemProp="image"/>
                    <div className="post_info d-flex justify-content-start flex-column">
                      <h1 className="w-100 py-2">{postDetails.title}</h1>
                      <div className="d-flex justify-content-between mb-2">
                        <small className="align-self-start text-capitalize"><FaUserAlt style={iconStyles} />By {postDetails.author.node.name}</small>
                        <small className="align-self-end"><CgCalendarDates style={iconStyles2} />{postDetails.date}</small>
                      </div>  
                      <div className="d-flex my-3 w-100">
                        {/* <span className="pt-2">Share:&nbsp;</span> <div className="sharethis-inline-share-buttons"></div>  */}
                        Share :&nbsp;&nbsp;<Share
                          socialConfig={{
                            twitter : stwitterHandle,
                            config: {
                              url: surl,
                              title: stitle,
                            },
                          }}
                        />
                      </div>       
                      {postDetails.content && <div dangerouslySetInnerHTML={{ __html: postDetails.content }} className="w-100 float-left overflow-hidden" ></div>}                    
                  </div>
                  </article>
                  </div> 
                </div>
                
              </div>
            </div>
            {RecentPosts && <RecentBlogs data={RecentPosts}/>}
            <LandingBanner bannerImage={BannerImage}/>
    </Layout>  
  )
}

export const query = graphql`
  query getPostDetails($id: String!) {
    BannerImage: file(relativePath: { eq: "landing/ban_img.png" }) {
        childImageSharp {
            gatsbyImageData(
                width: 300
            )
        }
    }
    RecentPosts: allWpPost(limit: 3, sort: {order: DESC, fields: date}) {
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
          tags {
            nodes {
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
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    postDetails:  wpPost(id: {eq: $id}) {
      content
      id
      title
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
      }
      author {
        node {
          name
        }
      }
      modified(formatString: "YYYY-MM-DD")
      date(formatString: "YYYY-MM-DD")
      featuredImage {
        node {
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData( width:1600)
            }
          }
        }
      }
    }
  }
`

export default Blog
