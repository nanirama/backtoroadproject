import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
// import { Helmet } from "react-helmet"
import styled from "styled-components"
import Layout from '../components/LandingPage/common/layout'
import Seo from "../components/seo"

import LandingBanner from '../components/LandingPage/LandingBanner';
import Faqblock from '../components/Faq/Faqblock';
// import LandingFaqs from './LandingFaq'


const Faqs = (props) => {
    // const { faqs} = morecontent
     const {site, BannerImage, pageBanner, pageBannerM } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
                siteUrl
              }
            }
            BannerImage: file(relativePath: { eq: "landing/ban_img.png" }) {
              childImageSharp {
                  gatsbyImageData(
                      width: 300
                  )
              }
            }
            pageBanner: file(relativePath: { eq: "part-banner.jpg" }) {
                childImageSharp {
                    fluid(quality: 100, webpQuality: 100, maxWidth: 1920) {
                        srcWebp
                      }
                }
            }
            pageBannerM: file(relativePath: { eq: "part-banner_mobile.jpg" }) {
              childImageSharp {
                fluid(quality: 100, webpQuality: 100, maxWidth: 768) {
                    srcWebp
                  }
              }
            } 
          }
        `
      )
    const pageBimg = pageBanner.childImageSharp.fluid.srcWebp
    const pageMimg = pageBannerM.childImageSharp.fluid.srcWebp
    const siteURL = site.siteMetadata.siteUrl 
    return (
      <Layout pdata={props}>
         <Seo
            title="FAQ | BackToRoad Auto Parts"
            description="Common Questions Our Customers Has Asked Over The Years. Check To See If Your Query Is Listed."
            cpath = {props.location.pathname}
        /> 
        <PageBannerDiv className="w-100 float-left text-center page-header" img={pageBimg} mimg={pageMimg}>
            <div className="container">
                <h1 className="page-title text-uppercase text-white">Frequently Asked Questions</h1>
            </div>
            </PageBannerDiv> 

           <Faqblock/>


     <LandingBanner bannerImage={BannerImage}/> 
        </Layout>
    )
}
const PageBannerDiv = styled.div`    
    @media (max-width: 767px) {
        background-image: url(${props => props.mimg});
        background-size: 100% 100% !important;
        padding:16vw 0;
    }
    @media (min-width: 767px) {
      background-image: url(${props => props.img});
      padding:120px 0;
      background-size: cover;
    }    
    background-repeat:no-repeat;
    background-position:left top;    
`;
export default Faqs