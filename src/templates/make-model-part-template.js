import React from "react"
import { graphql} from "gatsby"
import LandingTemplate from '../components/LandingPage/LandingTemplate'

const MakePartTemplate = (props) => {
    return (
      <LandingTemplate data={props} cpath={props.location.pathname}/>   
    )
}

export const query = graphql`
query($id : String, $mid : String){  
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
              itemprice {
                itemPrice
              }
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 600, quality: 100, height: 600)
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
                      gatsbyImageData(height: 1100, width: 2000)
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
export default MakePartTemplate
  