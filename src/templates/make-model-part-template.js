import React from "react"
import { graphql} from "gatsby"
import LandingTemplate from '../components/LandingPage/LandingTemplate'

const MakePartTemplate = (props) => {
  const { siteUrl } = props.data.site.siteMetadata;
  console.log('Breadcurm 2',props.data.PageData.makemodels);
  console.log('Link 2',siteUrl)
  const bcrumb = [
    {'name':'Home', 'link':siteUrl},
    {'name': props.data.PageData.makemodels.nodes[0].name ? props.data.PageData.makemodels.nodes[0].name : '', 'link':siteUrl+'/'+props.data.PageData.makemodels.nodes[0].slug ? props.data.PageData.makemodels.nodes[0].slug : ''},
    {'name': props.data.PageData.makemodels.nodes[1].name ? props.data.PageData.makemodels.nodes[1].name : '', 'link':siteUrl+'/'+props.data.PageData.makemodels.nodes[1].slug ? props.data.PageData.makemodels.nodes[1].slug : ''},
    {'name':props.data.PageData.title, 'link':null}
  ]
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
            slug
        }
        }
        morecontent {
        popularUsedParts
        popularUsedModelParts
        aboutContent
        aboutTitle
        aboutImage {
            altText
            localFile {
            childImageSharp {
                gatsbyImageData(
                    width: 500
                  )
            }
            }
        }
        summaryImage {
          altText
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
            altText
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
            altText
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
  