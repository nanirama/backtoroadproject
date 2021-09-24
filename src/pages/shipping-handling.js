import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from '../components/LandingPage/common/layout'
import Seo from "../components/seo"

import LandingBanner from '../components/LandingPage/LandingBanner'
const Shipping = (props) => {
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
            title="Shipping & Handling | BackToRoad Auto Parts"
            description="Find Details On Our Shipping And Handling Policies For Used Auto Parts."
            cpath = {props.location.pathname}
        /> 
        <PageBannerDiv className="w-100 float-left text-center page-header" img={pageBimg} mimg={pageMimg}>
            <div className="container">
                <h1 className="page-title text-uppercase text-white">Shipping & Handling</h1>
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
                      <span itemprop="name">Shipping & Handling</span>
                      <meta itemprop="position" content={2} />                        
                      </li>
                  </ol>
                </div>
            </div>
            </PageBannerDiv> 
<div className="top_content w-100 float-left">
   <div className="container">
      <h3 className="text-center mb-4">We offer the following convenient delivery options within the United States:</h3>
      <p className="pt-3">Business days are Monday-Friday, excluding federal holidays within the United States. FedEx and certain freight carrier delivery is not available on Saturday or Sunday..</p>
      <p>We process your orders within 1-2 business days. Once the part is out the door, we will send you the tracking numbers and necessary details to track the order to your email given at the time of placing the order.</p>
      <p>The MAXIMUM time frame we show on paper for delivery of Non-Freight orders (approx. less than 70 pounds) is 5-7 business days but you might also receive it sooner. For delivery of Freight orders (approx. greater than 70 pounds), the maximum time frame shown on paper is 7-10 business days but a lot of our customers receive it sooner as well.</p>
      <p>If the purchaser needs an order to be expedited, please notify the same to an authorized representative.</p>
      <p>At the time of delivery, it is the responsibility of the purchaser to make sure that there are no shipping damages or such. To return an order back, a claim has to be made within 4 days of the delivery date to an authorized representative of BackToRoad Auto Parts.</p>
      <p>Orders are not shipped on Saturdays, Sundays or Public Holidays.</p>
      <p>We're continuously striving to get your products to you sooner, however, in some unforeseen circumstances it may take a bit longer. In this case, we'll notify you of this delay immediately.</p>
      <p>We are not responsible for any delays caused by natural calamities and unavoidable circumstances.</p>
      <p className="mb-0">We currently do not ship to P.O. Box addresses. These type of addresses may be used for billing.</p>
   </div>
</div>
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
export default Shipping