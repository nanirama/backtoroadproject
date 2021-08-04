import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "./common/layout"
import LandingSlider from './Slider'
import LandingBreadcrumbs from './Breadcrumbs'
import ExtraContent from './ExtraContent'
import JourneySoFar from './Journeysofar'
import Whychoosebtr from './Whychoosebtr'
import HowitWorks from './Howitworks'
import CustomerReviews from './CustomerReviews'
import LandingRecentArrivals from './LandingrecentArrivals'
import LandingFaqs from './LandingFaq'
import LandingMakeModelList from './LandingMakeModelList'
import LandingMakePartsList from './LandingMakePartsList'
import LandingBanner from './LandingBanner'
import Seo from '../seo'



const LandingTemplate = (props) => {      
    
    const { PageData } = props.data.data
    const { morecontent } = PageData
    const { makemodels } = PageData
    const { faqs, slides, recentArrivals} = morecontent
    const pImage = PageData.featuredImage ? PageData.featuredImage.node.localFile.publicURL : '';
    const data = useStaticQuery(
        graphql`
          query {
            JourneyBg: file(relativePath: { eq: "landing/journey_bg.jpg" }) {
                    childImageSharp {
                        fluid(quality: 100, base64Width: 1600) {
                            base64
                        }
                    }
            }
            GoogleImage: file(relativePath: { eq: "landing/google-new.png" }) {
                    childImageSharp {
                        gatsbyImageData(
                            width: 42
                        )
                    }
            }
            BannerImage: file(relativePath: { eq: "landing/ban_img.png" }) {
                    childImageSharp {
                        gatsbyImageData(
                            width: 300
                        )
                    }
            }
          }
        `
      )
    return (
        <Layout>
            <Helmet      
                htmlAttributes={{
                    itemscope:'',
                    itemtype:'https://schema.org/FAQPage'
                }}
                ></Helmet>
            <Seo
              title={PageData.seo.title && PageData.seo.title}
              description={PageData.seo.metaDesc && PageData.seo.metaDesc}
              cpath = {props.cpath}
              pimage = {pImage}
              faq="true"
            />
            {slides && <LandingSlider data={slides}/>}
            <LandingBreadcrumbs makemodels={makemodels} partname={PageData.title} bcrumb={props.bcrumb}  />
            <ExtraContent extracontent={morecontent}/>
            <JourneySoFar image={data.JourneyBg}/>
            <Whychoosebtr/> 
            <HowitWorks/>
            <CustomerReviews gImage={data.GoogleImage}/>
            {recentArrivals && <LandingRecentArrivals data={recentArrivals} blockHeading={morecontent.recentArrivalsTitle}/>}
            {faqs && <LandingFaqs data={faqs} title={morecontent.faqTitle} subtitle={morecontent.faqSubTitle}/>}
            {morecontent.popularUsedModelParts && <LandingMakeModelList data={morecontent.popularUsedModelParts} title={morecontent.popularUsedModelPartsTitle} subtitle={morecontent.popularUsedModelPartsSubTitle}/>}
            {props.shyperlink && props.shyperlink==='true' && <LandingMakePartsList data={morecontent.popularUsedParts} title={morecontent.popularUsedPartsTitle} subtitle={morecontent.popularUsedPartsSubTitle}/>}
            <LandingBanner bannerImage={data.BannerImage}/>
        </Layout>    
    )
}
export default LandingTemplate