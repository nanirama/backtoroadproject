import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from '../components/LandingPage/common/layout'
import SEO from "../components/seo"
import HomeWhychoosebtr from '../components/LandingPage/HomeWhychoosebtr'
import LandingBanner from '../components/LandingPage/LandingBanner'

import { ImPhone } from 'react-icons/im';
import '../components/LandingPage/css/about.css'
const About = () => {
  let iconStyles = { color: "white", fontSize: "1.65em", marginRight:"5px" };
  const {site, BannerImage, pageBanner, pageBannerM, aboutImg1, aboutImg2 } = useStaticQuery(
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
        pageBanner: file(relativePath: { eq: "about-banner.jpg" }) {
            childImageSharp {
                fluid(quality: 100, base64Width: 1920) {
                    base64
                }
            }
        }
        pageBannerM: file(relativePath: { eq: "about-banner-m.jpg" }) {
          childImageSharp {
              fluid(quality: 100, base64Width: 767) {
                  base64
              }
          }
        }
        aboutImg1: file(relativePath: { eq: "about-img.jpg" }) {
          childImageSharp {
              fluid(quality: 100, base64Width: 420) {
                  base64
              }
          }
        }
        aboutImg2: file(relativePath: { eq: "about-img1.jpg" }) {
          childImageSharp {
              fluid(quality: 100, base64Width: 300) {
                  base64
              }
          }
        }        
      }
    `
  )
  const pageBimg = pageBanner.childImageSharp.fluid.base64
  const pageMimg = pageBannerM.childImageSharp.fluid.base64
  const aImg1 = aboutImg1.childImageSharp.fluid.base64
  const aImg2 = aboutImg2.childImageSharp.fluid.base64
  const siteURL = site.siteMetadata.siteUrl 
  return(
  <Layout>
    <SEO title="About Us" />
    <PageBannerDiv className="w-100 float-left text-center" img={pageBimg} mimg={pageMimg}>
      <div className="container">
        <h1 className="text-uppercase text-white">WHY BUY FROM US?</h1>
        <div className="breadcrumb w-100 float-left border-0 p-0">
          <ol className="d-flex justify-content-center" itemscope itemScope itemtype="https://schema.org/BreadcrumbList">
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
              <span itemprop="name">WHY BUY FROM US?</span>
              <meta itemprop="position" content={2} />                        
            </li>
          </ol>
        </div>
      </div>
    </PageBannerDiv>
    <div className="about_blk w-100 float-left bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="about_img w-100 float-left position-relative">
              <img src={aImg1} alt=""  />
              <img className="about_img1" src={aImg2} alt=""  />
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <p>Quality Auto Parts is your one-stop shop for replacement high quality used OEM automotive parts and accessories. Since 2002 we have served hundreds of thousands of customers across the world, working hand in hand to find high quality parts for your vehicle.</p>
            <p>We are headquartered in Chicago, IL, with suppliers across North America. Our goal is to find you the correct part at an inexpensive price, close to your home or business. We can help you locate those hard-to-find parts. We ship your order directly to your home, business or to your mechanic to help you get back onto the road as rapidly as possible.</p>
            <p>We understand that your car or truck can break-down anytime, and that there is no holiday for your disabled vehicle. We staff sales professionals 365 days a year. Our sales department is available to help you to place new orders from 6am to 9pm CST, 7 days a week. Give us a call today at </p>
            <a href="#" className="btn1 ph"><ImPhone style={iconStyles}/>(866) 293-3731</a> </div>
        </div>
      </div>
    </div>
    <HomeWhychoosebtr/> 
    <LandingBanner bannerImage={BannerImage}/>
  </Layout>
)
}
const PageBannerDiv = styled.div`
    background-image: url(${props => props.img});
    @media (max-width: 767px) {
        background-image: url(${props => props.mimg});
    }
    padding:120px 0;
    background-repeat:no-repeat;
    background-position:left top;
    background-size: cover;
`;
export default About
