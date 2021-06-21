import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/LandingPage/common/layout"
import LandingSlider from '../components/LandingPage/Slider'
import LandingBreadcrumbs from '../components/LandingPage/Breadcrumbs'
import ExtraContent from '../components/LandingPage/ExtraContent'
import JourneySoFar from '../components/LandingPage/Journeysofar'
import Whychoosebtr from '../components/LandingPage/Whychoosebtr'
import HowitWorks from '../components/LandingPage/Howitworks'
import CustomerReviews from '../components/LandingPage/CustomerReviews'
import LandingRecentArrivals from '../components/LandingPage/LandingrecentArrivals'
import LandingFaqs from '../components/LandingPage/LandingFaq'
import LandingMakeModelList from '../components/LandingPage/LandingMakeModelList'
import LandingMakePartsList from '../components/LandingPage/LandingMakePartsList'
import LandingBanner from '../components/LandingPage/LandingBanner'
import SEO from '../components/seo'
const LandingTemplate = (props) => {
    const {
        PageData,
        MakeData,
        BannerImage,
        GoogleImage,
        JourneyBg} = props.data
    const { morecontent } = PageData
    const { makemodels } = PageData
    const { wpChildren } = MakeData
    const { faqs, slides, recentArrivals} = morecontent
    return (
        <Layout>
            <SEO
              title={PageData.seo.title && PageData.seo.title}
              description={PageData.seo.metaDesc && PageData.seo.metaDesc}
            />
            {/* <LandingSlider data={slides}/>
            <LandingBreadcrumbs makemodels={makemodels.nodes} partname={PageData.title}  /> 
            <ExtraContent make={MakeData.name} content={PageData.content} image={PageData.featuredImage} extracontent={morecontent}/>
            <JourneySoFar image={JourneyBg}/>
            <Whychoosebtr/> 
            <HowitWorks/>
            <CustomerReviews gImage={GoogleImage}/>
            <LandingRecentArrivals data={recentArrivals}/>
            <LandingFaqs data={faqs}/>
            <LandingMakeModelList data={wpChildren.nodes}/>
            <LandingMakePartsList data={morecontent.popularUsedParts} make={MakeData.slug}/> */}
            <LandingBanner bannerImage={BannerImage}/>
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
  MakeData : wpMakemodel(id: {eq: $mid}) {
    slug
    name
    parts {
      nodes {
        id
        title
        slug
      }
    }
    wpChildren {
      nodes {
        id
        name
      }
    }
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
                        gatsbyImageData(
                          width: 1600
                        )
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
export default React.memo(LandingTemplate)
  