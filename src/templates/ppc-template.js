import React from "react"
import { graphql} from "gatsby"
import PpcLandingTemplate from '../components/LandingPage/PpcLandingTemplate'

const PpcTemplate = (props) => {
    return (
        <PpcLandingTemplate data={props} cpath={props.location.pathname} />  
    )
}
export const query = graphql`
query($id : String){   
    PageData: wpPpc(id: {eq: $id}) {
        featuredImage {
          node {
              localFile {
                publicURL
              }
          }
        }
        seo {
            title
            metaDesc
            focuskw
            metaKeywords
          }
        morecontent {
          phoneNumberText
          phoneNumber
          pbImage1 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
          pbImage2 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
          pbImage3 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
          pbImage4 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
          recentArrivalsTitle
          recentArrivals {
            ... on WpRarrival {
              id
              title
              itemprice {
                itemPrice
              }
              featuredImage {
                node {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 600, quality: 100, height: 600)
                    }
                  }
                }
              }
            }
          }
          faqTitle
          faqSubTitle
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
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(height: 1250, width: 2000)
                    }
                  }
                }
              }
            }
          }
          summeryTitle
          summeryContent
          summaryImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
            }
          }
        }
      }
}
`
export default PpcTemplate
  