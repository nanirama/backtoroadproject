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
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
          pbImage2 {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
          pbImage3 {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
          pbImage4 {
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
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 400)
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
                  localFile {
                    childImageSharp {
                      gatsbyImageData(height: 900, width: 1600)
                    }
                  }
                }
              }
            }
          }
          summeryTitle
          summeryContent
          summaryImage {
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
  