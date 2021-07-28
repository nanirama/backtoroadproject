import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from '../components/LandingPage/common/layout'
import SEO from "../components/seo"

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
         <SEO
            title="Parts List | BackToRoad Auto Parts"
            description="BackToRoad Auto Parts Is Your One-Stop Shop For High Quality Used OEM Auto Parts. We're a Used Auto Parts Dealer With 17+ Locations Across USA & Canada."
            cpath = {props.location.pathname}
        />  
        <PageBannerDiv className="w-100 float-left text-center" img={pageBimg} mimg={pageMimg}>
            <div className="container">
                <h1 className="text-uppercase text-white">PART LIST</h1>
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
                    <p className="mb-0">We carry huge stock Quality Auto Parts in our store. Auto Body Parts stock comprises of doors, bonnets, wind shields, shock absorbers, front grills, back cabins, roofs and all other body parts. We have in our stock body parts of all popular models including AMC, Acura, Ford, BMW etc..</p>
                </div>
            </div>
            <MakeSearch/>
            <PartsSearch/>
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