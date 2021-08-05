import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from '../components/LandingPage/common/layout'
import Seo from "../components/seo"

import LandingBanner from '../components/LandingPage/LandingBanner'
import MakeSearch from '../components/LandingPage/MakeSearch'
import PartsSearch from '../components/LandingPage/PartsSearch'
import '../components/LandingPage/css/parts.css'
const Parts = (props) => {
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
                    fluid(quality: 100, base64Width: 1920) {
                        base64
                    }
                }
            }
            pageBannerM: file(relativePath: { eq: "part-banner_mobile.jpg" }) {
              childImageSharp {
                  fluid(quality: 100, base64Width: 767) {
                      base64
                  }
              }
            } 
          }
        `
      )
    const pageBimg = pageBanner.childImageSharp.fluid.base64
    const pageMimg = pageBannerM.childImageSharp.fluid.base64
    const siteURL = site.siteMetadata.siteUrl 
    return (
        <Layout>
         <Seo
            title="All Parts | Search For Your Part | BackToRoad Auto Parts"
            description="Search Our Huge Inventory Of Genuine Used Parts For All Makes & Models Available In USA & Canada. Find Your Part Now!"
            cpath = {props.location.pathname}
        />  
        <PageBannerDiv className="w-100 float-left text-center" img={pageBimg} mimg={pageMimg}>
            <div className="container">
                <h1 className="page-title text-uppercase text-white">PART LIST</h1>
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
                    <span itemprop="name">PART LIST</span>
                    <meta itemprop="position" content={2} />                        
                    </li>
                </ol>
                </div>
            </div>
            </PageBannerDiv> 
            <div className="top_content w-100 float-left">
                <div className="container">
                    <p className="mb-0">Search for the part you need from our huge inventory of OEM used auto parts. Each and every part available in our inventory are fully tested and graded by our auto part specialists. All the car and truck manufacturers you can think of is listed here. Pick the part you need and fill out the form to get a FREE quote from us instantly.</p>
                </div>
            </div>
            <div className="w-100 float-left overflow-hidden">
            <MakeSearch/>
            <PartsSearch/>
            </div>
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
export default Parts