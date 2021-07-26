import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Layout from '../components/LandingPage/common/layout'
import HomeSlider from '../components/LandingPage/HomeSlider'
import SEO from "../components/seo"
import '../components/LandingPage/css/home.css'

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




import GoGreen from "../components/GoGreen"
//import RecentArrivals from "../components/RecentArrivals"

const IndexPage = (props) => {
  const {
    site,
    PageData,
    slides,
    allMakes,
    JourneyBg,
    GoogleImage,
    BannerImage,
    AboutImage,
    gogreenBg,
    gogreenmBg,
    saveGreen
  } = props.data
  const siteURL = site.siteMetadata.siteUrl 
  const seo = {
    title: PageData.seo.title,
    description: PageData.seo.metaDesc,
    url: siteURL
  }
  console.log('Page Data',AboutImage);
  return(
  <Layout>
      <SEO
          title={seo.title}
          description={seo.description}
          cpath = {props.location.pathname}
       />
    {slides && <HomeSlider data={slides}/>}
    <AboutSection image={AboutImage}/>
    <OemPartsSection /> 
    <HowitWorks />
    <HomeJourneySoFar image={JourneyBg}/>
    <HomeWhychoosebtr/> 
    <HomePopularMakes data={allMakes}/>
    <GoGreenSection bg={gogreenBg} mbg={gogreenmBg} img={saveGreen} />
    <CustomerReviews gImage={GoogleImage}/>    
    <HomeRecentArrivals/>    
    <LandingBanner bannerImage={BannerImage}/>
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
  PageData: wpPage(id: {eq: "cG9zdDozNTg="}) {
    seo {
      title
      metaDesc
      focuskw
      metaKeywords
    }
  }
  JourneyBg: file(relativePath: { eq: "landing/journey_bg.jpg" }) {
      childImageSharp {
          fluid(quality: 100, base64Width: 1600) {
              base64
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
  AboutImage: file(relativePath: { eq: "about-btr.png" }) {
    childImageSharp {
        gatsbyImageData(
            width: 500
        )
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
  saveGreen: file(relativePath: {eq: "landing/save-green.png"}) {
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
              gatsbyImageData
            }
          }
          width
          height
        }
        imgalt
        img {
          childImageSharp {
            gatsbyImageData(height: 900, width: 1600)
          }
        }
      }
    }
  }
}
`
export default IndexPage