import React from "react"
import { graphql} from "gatsby"
import LandingTemplate from '../components/LandingPage/LandingTemplate'

const MakeTemplate = (props) => {
    const { siteUrl } = props.data.site.siteMetadata;
    console.log('Slides ',props.data.PageData.morecontent.slides)
    const bcrumb = [
      {'name':'Home', 'link':siteUrl},
      {'name': props.data.PageData.name, 'link':null}
    ]
    return (
      <LandingTemplate data={props} cpath={props.location.pathname} bcrumb={bcrumb} shyperlink="true"/>   
    )
}

export const query = graphql`
query($id : String){
  site {
    siteMetadata {
      siteUrl
    }
  }
    MakeModelData : wpMakemodel(id: {eq: $id}) {
        name
        slug
    }
   PageData : wpMakemodel(id: {eq: $id}) {
    id
    description
    name
    slug
    seo {
      title
      metaDesc
      focuskw
      metaKeywords
    }
    morecontent {
      popularUsedPartsTitle
      popularUsedPartsSubTitle
      popularUsedParts
      popularUsedModelPartsTitle
      popularUsedModelPartsSubTitle
      popularUsedModelParts
      aboutContent
      aboutTitle
      aboutImage {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
      }
      summaryAboveTitle
      summaryTitle
      summaryContent
      summaryImage {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
      }
      benefitsTopContent
      benefitsListingContent
      benefitsBottomContent
      benefitsTitle
      benefitsImage {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
      }
      whyBackroad
      whyBackroadTopContent
      whyBackroadBottomContent
      wnyBackroadImage {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1200)
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
    }
  }
} 
` 
export default MakeTemplate
  