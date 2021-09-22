import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from '../components/LandingPage/common/layout'
import Seo from "../components/seo"

import LandingBanner from '../components/LandingPage/LandingBanner'
const Warranty = (props) => {
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
            title="Warranty | BackToRoad Auto Parts"
            description="Find Details On The Standard Hassle Free Warranty That We Provide For All Used Auto Parts Purchased From BackToRoad."
            cpath = {props.location.pathname}
        /> 
        <PageBannerDiv className="w-100 float-left text-center page-header" img={pageBimg} mimg={pageMimg}>
            <div className="container">
                <h1 className="page-title text-uppercase text-white">Warranty </h1>
            </div>
            </PageBannerDiv> 
            

<div className="top_content w-100 float-left">
   <div className="container">
      <h3 className="text-center mb-4">To get your vehicle Back To Road is our number one priority.</h3>
      <p className="pt-3">We provide a standard 30 day warranty. We warranty the automotive part we provide to be free from defects in material for the warranty period. It begins from the date purchased. If the part we deliver is incorrect, defective or damaged we will provide you with a replacement. If a replacement is not available, we provide a refund.</p>
      <p>This warranty does not cover any expenses incurred in the removal and / or reinstallation of the auto part. Specifically, this warranty does not cover any expenses for time, rental or other parts not purchased from us, or any labour. This warranty covers replacing the part only. This warranty is offered only to the original purchaser of the part. This warranty does not apply, and will be voided, if the auto part sold has been damaged by abuse, misuse, accident, neglect, or alteration, or if it has been repaired by anyone. Your warranty will be null and void if the part fails due to improper installation.</p>
      <p className="mb-0">BackToRoad Auto Parts will not be held liable for parts delivered to the address provided by the purchaser at the time of purchase but not taken into possession by the customer.</p>
   </div>
</div>
<div className="container">
   <h4 className="mb-4"><u>RETURN POLICY:</u></h4>
   <p>If the auto part sold should prove defective in material within the warranty period, warranty claims should be presented to an authorized personnel of BackToRoad Auto Parts. Do not return the part back before receiving a Return Merchandise Authorization (RMA) from us through Email and the original purchaser must return the auto part to the specified address in the RMA. Returning of the part is the responsibility of the purchaser. We will, at our option, replace or refund the original sale amount.</p>
   <p>*If the part is operated without proper lubrication or cooling regardless of the reason.</p>
   <p>*If the part is used for racing or testing purposes.</p>
   <p>*If the part is improperly installed.</p>
   <h4 className="mb-4"><u>TERMS AND CONDITIONS OF WARRANTY:</u></h4>
   <p>Engines Warranties are limited to manufacturing defects in the engine block, cylinders heads, pistons, crankshafts, camshafts, valves. Engine assemblies are understood to consist of a long block and engine warranties are strictly limited to the long block itself. Any other parts left on the engine assembly at the time of sale are included for possible purchaser convenience and are to be used at the purchaser’s option only. These parts are not covered under the warranty. We do not warranty on any attached accessories or add on parts such as but not limited to hoses, wire harnesses, sensors, cables, manifolds, turbos, flywheel, water pumps, valve covers etc. BackToRoad Auto Parts is not at all liable to these add on parts listed as they are high wear and tear parts. New fluids, filters, seals and gaskets must be used in installation of part. Engine oil must be of the proper viscosity for the season of the year and transmission fluid must be the type recommended by the manufacturer of the vehicle. All fluids must conform to manufactures for the vehicle. Mitsubishi engines must have new timing belt tensioners installed or warranty is void.</p>
   <p>Carburettor is sold as is. However they are guaranteed to be rebuildable.</p>
   <p>A cylinder head itself is checked not to be cracked or deformed and is guaranteed to be in a good condition. Valves, Cams, valve springs, Retainers, locks and seals are not included in the warranty and might need to be remachined- if required. This warranty does not apply to any of the following: Damage caused by improper installation, overheating, abuse or neglect.</p>
   <p>Speedometer clusters/ Instrument clusters are guaranteed to be checked and to be in a good working condition. We do not associate this warranty with any mileage claims made by the purchaser. There is no guarantee or warranty on the mileage. Speedometer Clusters bought by the purchaser for specific manufacturer models such as but not limited to Cadillac, Audi, Mercedes and BMW may need to reprogrammed by an Authorized Dealer. BackToRoad Auto Parts do not accept any return or refund claim unless the purchaser can provide a written documentation from an Authorized Dealer stating that the part was reprogrammed and is still not functioning.</p>
   <p>Struts are inspected and are guaranteed to be in a good working condition. We warranty on the spring, shock absorbers and the strut tower. Actual Ride quality is not an aspect covered under the warranty.</p>
   <p>Lower Control Arms and Upper Control Arms are guaranteed to be true to its shape and an exact fit for the purchaser’s vehicle. There is no warranty or guarantee associated with bolts, bushings, ball joints, bearings or rubber seals.</p>
   <p>Transmission warranties are limited to manufacturing defects and do not apply to repairs or replacement as a result of any accident or misuse. We do not warranty repair or replacement of any related transmission items, including specifically and without limitation, to all components of the cooling, fuel, electrical, transmission control system, and all ignition system components, belts, hoses and filters.</p>
   <p>Any engine and transmission returned not in the same assembled condition as it was received will not be refunded under any circumstances. If the engine or transmission is disassembled in any way without our express written authorization it will void the warranty.</p>
   <p>OEM auto parts are interchangeable with multiple years, makes and models which means the same part is an exact fit for multiple makes and models as determined by OEM standards. We guarantee the part we sell to fit your vehicle.</p>
   <p>Although BackToRoad Auto Parts makes every effort to make the part look as nice as possible before it ships no warranty or guarantee is made towards the appearance of that part.</p>
   <p>The stated mileage is not guaranteed and is correct to the best of our knowledge. State and federal laws regulate odometer mileage for most used automobiles, but odometer mileage determinations for used engines and engine parts are not practically possible, and are not subject to known state and federal laws. Determination of mileage use for used engines or transmissions cannot be done with certainty because these engines and transmissions are routinely sold and transferred separate and apart from the original vehicle in which they were installed. Therefore all representations of mileage are estimates based upon information and belief.</p>
   <p>All returned parts or cancelled orders that does not meet the terms and conditions mentioned in the warranty policy are subject to a 25% handling and restocking fees plus the purchaser assumes all shipping costs.</p>
   <h4 className="mb-4"><u>Questions or Additional Information</u></h4>
   <p>If you have any questions regarding your warranty or wish to obtain additional information, please e-mail us at customerservice@backtoroadautoparts.com or call us at 1-800-608-3868 and select opt 2</p>
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
export default Warranty
