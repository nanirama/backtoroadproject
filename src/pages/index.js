import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/LandingPage/common/layout'
import HomeSlider from '../components/LandingPage/HomeSlider'
import SEO from "../components/seo"
import AboutSection from "../components/LandingPage/AboutSection"
import OemPartsSection from "../components/LandingPage/OemPartsSection"
import HowitWorks from '../components/LandingPage/Howitworks'
import HomeJourneySoFar from "../components/LandingPage/HomeJourneysofar"
import HomeWhychoosebtr from '../components/LandingPage/HomeWhychoosebtr'
import HomePopularMakes from "../components/LandingPage/HomePopularMakes"
import GoGreenSection from "../components/LandingPage/GoGreenSection"
import CustomerReviews from '../components/LandingPage/CustomerReviews'
import HomeRecentArrivals from '../components/LandingPage/HomeRecentArrivals'
import LandingBanner from '../components/LandingPage/LandingBanner'
import '../components/LandingPage/css/home.css'
import '../components/LandingPage/css/slick-custom.css'
const IndexPage = (props) => {
  const {
    site,
    PageData,
    slides,
    allMakes,
    BannerImage,
    AboutImage,
    saveGreen,
    SiteLogo
  } = props.data
  const siteURL = site.siteMetadata.siteUrl 
  const siteLogo = siteURL+SiteLogo.publicURL;
  const schemaOrgJSONLD = [
    {
       "@context": "http://schema.org",
       "@type": "Organization",
        url: siteURL,
        "logo": siteLogo
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "BackToRoad Auto Parts",
      "url": "https://backtoroadautoparts.com/"      
    }
  ]
  console.log('Page Data is ', PageData);
  const title = PageData && PageData.seo.title ? PageData.seo.title : 'Used Auto Parts Online Store | Back To Road Auto Parts'
  const desc = PageData && PageData.seo.metaDesc ? PageData.seo.metaDesc : 'Buy Used Auto Parts For Your Car or Truck At The Best Price On The Internet.'
  return(
  <Layout>
      <SEO
          title={title}
          description={desc}
          cpath = {props.location.pathname}
          schema = {schemaOrgJSONLD}
       />
    {slides && <HomeSlider data={slides}/>}
    {/* <AboutSection image={AboutImage}/>
    <OemPartsSection />  */}
    <HowitWorks />
    {/* <HowitWorks />
    <HomeJourneySoFar />
    <HomeWhychoosebtr/> 
    <HomePopularMakes data={allMakes}/>
    <GoGreenSection img={saveGreen} /> */}
    {/* <CustomerReviews/>     */}
    {/* <HomeRecentArrivals/>    
    <LandingBanner bannerImage={BannerImage}/> */}
  </Layout>
)
}
export const query = graphql`
query HomePageQuery{   
  site {
    siteMetadata {
      siteUrl
    }
  }
  SiteLogo: file(relativePath: {eq: "landing/logo.png"}) {
    publicURL
  }
  PageData: wpPage(title: {eq: "Home"}) {
    seo {
      title
      metaDesc
      focuskw
      metaKeywords
    }
  }
  BannerImage: file(relativePath: { eq: "landing/ban_img.png" }) {
      childImageSharp {
          gatsbyImageData(
              width: 300, quality: 100
          )
      }
  }
  AboutImage: file(relativePath: { eq: "about-btr.png" }) {
    childImageSharp {
      gatsbyImageData(width: 504, layout: CONSTRAINED, quality: 100)
    }
  }
  saveGreen: file(relativePath: {eq: "landing/save-green-new.png"}) {
    childImageSharp {
      gatsbyImageData(
          width: 218, layout: CONSTRAINED
      )
    }
  }
  allMakes : allPopularMakesJson {
    edges {
      node {
        title
        imgalt
        img {
          childImageSharp {
            gatsbyImageData(width: 150)
          }
        }
      }
    }
  }
  slides : allHomeSlidesDataJson {
    edges {
      node {
        title
        content
        eimg {
          img {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
          width
          height
          imgalt
        }
        imgalt
        img {
          childImageSharp {
            gatsbyImageData(width: 1600, quality: 100)
          }
        }
      }
    }
  }
}
`
export default IndexPage