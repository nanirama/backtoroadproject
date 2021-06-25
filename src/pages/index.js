import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
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

const IndexPage = () => (
  <Layout>
    <Hero />
    <SEO title="Home" />
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
    <RecentArrivals />
  </Layout>
)

export default IndexPage

const InnerContainer = styled.div`
  padding: 2rem calc((100vw - 1300px) / 2);
`

const Wrapper = styled.div`
  background-color: #fdfdfd; /* For browsers that do not support gradients */
  background-image: linear-gradient(#fdfdfd, #ffffff);
  border: 10px solid rgba(255,255,255,0.20);
  box-shadow: 2px 2px 16px 8px rgba(217,210,200,0.51);
`
