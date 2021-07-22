import React from "react"
import { graphql} from "gatsby"
import Hero from "../components/Hero"
import Layout from '../components/LandingPage/common/layout'
import HomeSlider from '../components/LandingPage/HomeSlider'
import SEO from "../components/seo"
import Stats from "../components/Stats"
import OemParts from "../components/OemParts"
import Brands from "../components/Brands"
import Reviews from "../components/Reviews"
import AboutBtr from "../components/AboutBtr"
import HowItWorks from "../components/HowItWorks"
import JourneySoFar from "../components/JourneySoFar"
import styled from "styled-components"
import GoGreen from "../components/GoGreen"
import RecentArrivals from "../components/RecentArrivals"

const IndexPage = (props) => {
  const { site, PageData, slides } = props.data
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
  slides : allHomeSlidesDataJson {
    edges {
      node {
        title
        id
        content
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

const InnerContainer = styled.div`
  padding: 2rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 415px) {
    padding: 1rem 1.4rem;
  }
`

const Wrapper = styled.div`
  background-color: #fdfdfd; /* For browsers that do not support gradients */
  background-image: linear-gradient(#fdfdfd, #ffffff);
  border: 10px solid rgba(255,255,255,0.20);
  /* box-shadow: 2px 2px 16px 8px rgb(245 243 241 / 51%) */
  box-shadow: 2px 2px 16px 8px rgb(236 236 235 / 51%);
`
