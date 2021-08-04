import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from '../components/LandingPage/common/layout'
import Seo from "../components/seo"
import HomeWhychoosebtr from '../components/LandingPage/HomeWhychoosebtr'
import LandingBanner from '../components/LandingPage/LandingBanner'

import { ImPhone } from 'react-icons/im';
import '../components/LandingPage/css/about.css'
const About = (props) => {
  let iconStyles = { color: "white", fontSize: "1.65em", marginRight:"5px" };
  const {site, BannerImage, pageBanner, pageBannerM, aboutImg1 } = useStaticQuery(
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
        aboutImg1: file(relativePath: { eq: "aboutimg.png" }) {
          childImageSharp {
              fluid(quality: 100, base64Width: 498) {
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
  const siteURL = site.siteMetadata.siteUrl 
  return(
  <Layout>
    <Seo
        title="About Us | BackToRoad Auto Parts"
        description="BackToRoad Auto Parts Is Your One-Stop Shop For High Quality Used OEM Auto Parts. We're a Used Auto Parts Dealer With 17+ Locations Across USA & Canada."
        cpath = {props.location.pathname}
    />
    <PageBannerDiv className="w-100 float-left text-center" img={pageBimg} mimg={pageMimg}>
      <div className="container">
        <h1 className="page-title text-uppercase text-white">WHY BUY FROM US?</h1>
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
          
          <div className="col-md-12 col-xs-12">
          <div className="col-md-6 about-img float-left col-xs-12 mb-2">
            <div className="w-100 float-left position-relative">
              <img src={aImg1} alt="BackToRoad auto parts warehouse staff at work" width={497} height={559} />
            </div>
          </div>
            <p>BackToRoad Auto Parts is your one-stop-shop for high-quality used OEM auto parts and accessories. We sell high-quality and genuine used parts at affordable prices so our customers have a seamless experience when shopping with us. We know that you’ll need to get your car back on the road as quickly as possible so we provide free and fast shipping for our products all over the United States and Canada.</p>
            <p>Our goal is to provide our customers with used OEM auto parts that are reliable and which do not pale in comparison to brand-new auto parts. You can hand over your requirements to us and we will help you locate those hard-to-find parts and ship them directly to your home, business, or your mechanic in no time at all. Our live inventory is updated on a real-time basis, so you can trust that we will be able to provide you with the used part you need when you need it. And if you can’t find the used auto part you need, you can let us know and our parts locator tool will locate it for you from our network of salvage yards and junkyards around the country. </p>
            <p>BackToRoad Auto Parts guarantees that our used car parts are of ‘A' grade quality, come with a standard 30-day warranty, and are completely affordable. We also provide nationwide shipping and delivery for our auto parts either to you directly or to your mechanic. Our devoted customer service team also ensures that all of our clients receive personalized attention, answering all of your questions and ensuring that your vehicle is up and running in no time.</p>
          
            <p>Give us a call today at 1-800-608-3868 to speak to our Auto Parts Specialists and place your order.</p>
            <a href="tel:866-293-3731" className="btn2"><ImPhone style={iconStyles}/>(866) 293-3731</a> </div>
      
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
