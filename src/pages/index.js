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
    GoogleImage,
    BannerImage,
    AboutImage,
    gogreenBg,
    gogreenmBg,
    saveGreen,
    SiteLogo
  } = props.data
  const siteURL = site.siteMetadata.siteUrl 
  const siteLogo = siteURL+SiteLogo.publicURL;
  const seo = {
    title: PageData.seo.title,
    defaultTitle: PageData.seo.title,
    description: PageData.seo.metaDesc,
    url: siteURL
  }
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
  return(
  <Layout>
      <SEO
          title={seo.title}
          description={seo.description}
          cpath = {props.location.pathname}
          schema = {schemaOrgJSONLD}
       />
    {slides && <HomeSlider data={slides}/>}
    <AboutSection image={AboutImage}/>
    <OemPartsSection /> 
    <HowitWorks />
    <HomeJourneySoFar />
    <HomeWhychoosebtr/> 
    <HomePopularMakes data={allMakes}/>
    <GoGreenSection bg={gogreenBg} mbg={gogreenmBg} img={saveGreen} />
    {/* <CustomerReviews gImage={GoogleImage}/>    
    <HomeRecentArrivals/>    
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
  PageData: wpPage(id: {eq: "cG9zdDozNTg="}) {
    seo {
      title
      metaDesc
      focuskw
      metaKeywords
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
  AboutImage: file(relativePath: { eq: "about-btr.png" }) {
    childImageSharp {
      gatsbyImageData(width: 504, layout: CONSTRAINED, quality: 100)
    }
  }
  gogreenBg: file(relativePath: {eq: "landing/blue-bg.jpg"}) {
    childImageSharp {
      fluid(quality: 100, base64Width: 1200) {
          base64
      }
    }
  }
  gogreenmBg: file(relativePath: {eq: "landing/blue-bg-mob.jpg"}) {
    childImageSharp {
      fluid(quality: 100, base64Width: 374) {
        base64
      }
    }
  }
  saveGreen: file(relativePath: {eq: "landing/save-green-new.png"}) {
    childImageSharp {
      gatsbyImageData(
          width: 218
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