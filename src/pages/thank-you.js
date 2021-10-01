import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from '../components/LandingPage/common/layout'
import styled from "styled-components"
import Seo from "../components/seo"
import HomeWhychoosebtr from '../components/LandingPage/HomeWhychoosebtr';
import '../components/LandingPage/css/custom.css'


const Thankyou = () => {
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
<Layout>
<PageBannerDiv className="w-100 float-left text-center page-header" img={pageBimg} mimg={pageMimg}>
            <div className="container">
                <h1 className="page-title text-uppercase text-white">Thankyou</h1>
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
                      <span itemprop="name">Thankyou</span>
                      <meta itemprop="position" content={2} />                        
                      </li>
                  </ol>
                </div>
            </div>
        </PageBannerDiv> 
   <div className="w-100 float-left py-md-5 py-4">
      <div className="container">
      <h2 className="tlt text-center text-uppercase">Thank You For Your<br/>Submission</h2>
      </div>
   </div>
   <div className="w-100 float-left justify-content-center d-flex align-items-center text-center py-md-5 py-sm-2">
      <div className="container">
         <div className="row">
            <div className="col-md-6 col-xs-12">
               <p className="mb-4"><span>You Requested Quote For:</span> </p>
               <p className="text-blue">2004 Ford F150 Transmission Assembly</p>
            </div>
            <div className="col-md-6 col-xs-12">
               <p className="mb-4"><span>Information Provided For Quotes:</span></p>
               <p className="mb-2">Derek L. Stine</p>
               <p className="mb-2"><a href="mailto:derekl12@gmail.com">derekl12@gmail.com</a></p>
               <p className="mb-2">513-709-8789 </p>
            </div>
         </div>
      </div>
   </div>
   <div className="w-100 float-left mt-5 text-center">
      <div className="container">
         <p className="py-md-1 py-sm-3">You will receive an email from us containing the parts quote information you requested. Please check your junk/spam folders for all correspondence including quotes from us. In the mean time if you have any questions or require additional information, please don't hesitate to contact us directly.  </p>
         <div className="w-100 d-flex justify-content-center flex-md-row flex-smm-column">
            <button className="btn2 border-0 mr-4 mb-2 text-center">Home Page</button>
            <button className="btn2 border-0 mb-2 text-center">Contact Us</button>
         </div>
      </div>
   </div>
   <HomeWhychoosebtr/>
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
export default Thankyou
