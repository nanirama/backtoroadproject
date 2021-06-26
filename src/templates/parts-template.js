import React from 'react';
import Slider from '../components/LandingPage/Slider'
import Layout from '../components/LandingPage/common/layout'
const PartsTemplate = (props) => {
  const {
    PageData,
    MakeModelData,
    BannerImage,
    GoogleImage,
    JourneyBg} = props.data
    const { morecontent } = PageData
    const { makemodels } = PageData
    // const { wpChildren } = MakeData
    const { faqs, slides, recentArrivals} = morecontent
    return (
      <Layout>
      {slides && <Slider data={slides}/>}
      </Layout>
    )
}

export const query = graphql`
query($id : String, $mid : String){    
  JourneyBg: file(relativePath: { eq: "landing/journey_bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
  }
  GoogleImage: file(relativePath: { eq: "landing/google.png" }) {
        childImageSharp {
            gatsbyImageData(
                width: 40
              )
        }
  }
  BannerImage: file(relativePath: { eq: "landing/ban_img.png" }) {
        childImageSharp {
            gatsbyImageData(
                width: 300
              )
        }
  }
  MakeModelData : wpMakemodel(id: {eq: $mid}) {
        name
        slug
  }
  PageData : wpPart(id: {eq: $id}) {
        seo {
          title
          metaDesc
          focuskw
          metaKeywords
          metaRobotsNoindex
          metaRobotsNofollow              
          schema {
              articleType
              pageType
              raw
          }
      }
        content
        id
        slug
        title
        featuredImage {
        node {
            localFile {
            childImageSharp {
                gatsbyImageData(
                    width: 500
                  )
            }
            }
        }
        }
        makemodels {
        nodes {
            id
            name
        }
        }
        morecontent {
        popularUsedParts
        popularUsedModelParts
        aboutContent
        aboutTitle
        aboutImage {
            localFile {
            childImageSharp {
                gatsbyImageData(
                    width: 500
                  )
            }
            }
        }
        summaryImage {
          localFile {
          childImageSharp {
              gatsbyImageData(
                  width: 500
                )
          }
          }
      }
        benefitsTopContent
        benefitsListingContent
        benefitsBottomContent
        benefitsTitle
        benefitsImage{
            localFile {
                childImageSharp {
                    gatsbyImageData(
                        width: 500
                      )
                }
            }
        }
        whyBackroad
        whyBackroadTopContent
        whyBackroadBottomContent
        wnyBackroadImage{
            localFile {
                childImageSharp {
                    gatsbyImageData(
                        width: 1200
                      )
                }
            }
        }
        recentArrivals {
            ... on WpRarrival {
              id
              title
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                        gatsbyImageData(
                            width: 400
                          )
                    }
                  }
                }
              }
            }
          }
        faqs {
            ... on WpFaq {
            id
            content
            title
            }
        }
        slides {
            ... on WpSlide {
            id
            title
            content
            featuredImage {
                node {
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 1200, base64Width:1800) {                        
                            base64
                        }
                      }
                }              
                }
            }
            }
        }
        }
    }
} 
` 

export default PartsTemplate
  