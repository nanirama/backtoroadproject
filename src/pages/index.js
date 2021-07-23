import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../components/Hero"
import Layout from '../components/LandingPage/common/layout'
import HomeSlider from '../components/LandingPage/HomeSlider'
import SEO from "../components/seo"
import '../components/LandingPage/css/home.css'

import HowitWorks from '../components/LandingPage/Howitworks'
import JourneySoFar from "../components/LandingPage/Journeysofar"
import Whychoosebtr from '../components/LandingPage/Whychoosebtr'

import CustomerReviews from '../components/LandingPage/CustomerReviews'
import HomeRecentArrivals from '../components/LandingPage/HomeRecentArrivals'
import LandingBanner from '../components/LandingPage/LandingBanner'
import Stats from "../components/Stats"
import OemParts from "../components/OemParts"
import Brands from "../components/Brands"
import Reviews from "../components/Reviews"
import AboutBtr from "../components/AboutBtr"


import GoGreen from "../components/GoGreen"
//import RecentArrivals from "../components/RecentArrivals"

const IndexPage = (props) => {
  const { site, PageData, slides, JourneyBg, GoogleImage, BannerImage } = props.data
  const siteURL = site.siteMetadata.siteUrl 
  const seo = {
    title: PageData.seo.title,
    description: PageData.seo.metaDesc,
    url: siteURL
  }
  //console.log('Page Data',slides);
  return(
  <Layout>
      <SEO
          title={seo.title}
          description={seo.description}
          cpath = {props.location.pathname}
       />
    {slides && <HomeSlider data={slides}/>}
    <HowitWorks />
    <JourneySoFar image={JourneyBg}/>
    <Whychoosebtr/> 
    <CustomerReviews gImage={GoogleImage}/>
    <HomeRecentArrivals/>
    <LandingBanner bannerImage={BannerImage}/>
    {/* <Hero />
    <AboutBtr />
    <OemParts heading="Genuine OEM Used Auto Parts" /> 
    <InnerContainer>
      <Wrapper>
        <HowItWorks />
        <JourneySoFar />
        <Stats />
      </Wrapper>
    </InnerContainer>
    <Brands />
    <GoGreen />
    <Reviews />
    <RecentArrivals /> */}
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
  slides : allHomeSlidesDataJson {
    edges {
      node {
        title
        content
        subimgs {
          childImageSharp {
            fixed(base64Width: 66) {
              base64
            }
          }
        }
        imgalt
        dslide: img {
          childImageSharp {
            gatsbyImageData(height: 1000, width: 1600)
          }
        }
        mslide: img {
          childImageSharp {
            gatsbyImageData(height: 660, width: 760)
          }
        }
      }
    }
  }
}
`
export default IndexPage