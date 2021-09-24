import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Layout from '../components/LandingPage/common/layout'
import Seo from "../components/seo"

import LandingBanner from '../components/LandingPage/LandingBanner';
import Contactform from '../components/Contact/Contactform';
import ContactFaqblock from '../components/Contact/Faqblock';
import '../components/LandingPage/css/custom.css'


const Faqs = (props) => {
     const {site, SiteLogo, BannerImage, pageBanner, pageBannerM } = useStaticQuery(
        graphql`
          query {
            SiteLogo: file(relativePath: {eq: "landing/logo.png"}) {
              publicURL
            }
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
    const pageBimg = pageBanner.childImageSharp.fluid.srcWebp
    const pageMimg = pageBannerM.childImageSharp.fluid.srcWebp
    return (
      <Layout pdata={props}>
        <Helmet      
          htmlAttributes={{
              itemscope:'',
              itemtype:'https://schema.org/FAQPage'
          }}
          ></Helmet>
         <Seo
            title="Contact Us | BackToRoad Auto Parts"
            description="Contact BackToRoad Auto Parts For All Enquiries Regarding Used Auto Parts Or Your Order"
            cpath = {props.location.pathname}
            schema = {schemaOrgJSONLD}
        /> 
        <PageBannerDiv className="w-100 float-left text-center page-header" img={pageBimg} mimg={pageMimg}>
            <div className="container">
                <h1 className="page-title text-uppercase text-white">Contact Us</h1>
                <div className="breadcrumb w-100 float-left border-0 p-0">
                  <ol className="d-flex" itemscope itemScope itemtype="https://schema.org/BreadcrumbList">
                      <li
                          itemprop="itemListElement"                
                          itemScope
                          itemtype="https://schema.org/ListItem"
                      >
                      <Link
                                  itemprop="item" 
                                  to={siteURL}                                               
                              ><span itemprop="name">Home</span></Link>
                              <meta itemprop="position" content={1} />
                      </li>
                      <li className="text-uppercase"
                          itemprop="itemListElement"
                          itemscope
                          itemScope
                          itemtype="https://schema.org/ListItem"
                      >
                      <span itemprop="name">Contact Us</span>
                      <meta itemprop="position" content={2} />                        
                      </li>
                  </ol>
                </div>
            </div>
            </PageBannerDiv> 
      <Contactform/>
      <ContactFaqblock/>
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