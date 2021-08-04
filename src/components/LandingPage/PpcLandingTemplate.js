import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import PpcLayout from "./common/ppclayout"
import LandingSlider from './Slider'
import PhoneBlock from './PhoneBlock'
import PpcContent from './PpcContent'
import JourneySoFar from './Journeysofar'
import Whychoosebtr from './Whychoosebtr'
import HowitWorks from './Howitworks'
import CustomerReviews from './CustomerReviews'
import LandingRecentArrivals from './LandingrecentArrivals'
import LandingFaqs from './LandingFaq'
import LandingBanner from './LandingBanner'
import Seo from '../seo'

const PpcLandingTemplate = (props) => {
    const { PageData } = props.data.data
    const { morecontent } = PageData
    const {
        faqs, 
        slides,
        recentArrivals,
        phoneNumberText,
        phoneNumber,
        pbImage1,
        pbImage2,
        pbImage3,
        pbImage4,
        summeryContent,
        summaryImage,
        summeryTitle
    } = morecontent
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
            GoogleImage: file(relativePath: { eq: "landing/google.png" }) {
                    childImageSharp {
                        gatsbyImageData(
                            width: 40
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
        <PpcLayout cpath = {props.cpath}>
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
              noindex="noindex"
            />
            {slides && <LandingSlider data={slides}/>}
            <PhoneBlock
                phoneNumberText={phoneNumberText}
                phoneNumber={phoneNumber}
                pbImage1={pbImage1}
                pbImage2={pbImage2}
                pbImage3={pbImage3}
                pbImage4={pbImage4}
            />
             {recentArrivals && <LandingRecentArrivals data={recentArrivals} blockHeading={morecontent.recentArrivalsTitle}/>}
             <PpcContent content={summeryContent} image={summaryImage} title={summeryTitle}/>
             <Whychoosebtr/> 
             <HowitWorks/>
             <JourneySoFar image={data.JourneyBg}/>
             <CustomerReviews gImage={data.GoogleImage}/>
             {faqs && <LandingFaqs data={faqs} title={morecontent.faqTitle} subtitle={morecontent.faqSubTitle}/>}
             <LandingBanner bannerImage={data.BannerImage}/>
        </PpcLayout>    
    )
}
export default PpcLandingTemplate
  