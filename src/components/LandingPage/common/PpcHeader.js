import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import mpIcon from "../../../assets/images/landing/callbtn.svg"
import { FiPhoneCall } from 'react-icons/fi';

const LandingHeader = ({ logoImg, cpath }) => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {                
                siteUrl
              }
            }
          }
        `
      )
  //const logoImage = logoImg.childImageSharp.fixed.base64
  const siteURL = site.siteMetadata.siteUrl 
  
  return(
    <header className="w-100 float-left pt-4 pb-3">
      <div className="container">
        <div className="row">
            <div className="col-lg-2 col-sm-3">
          <div className="logo w-auto float-left">
                  <Link to={`${siteURL}${cpath}`}>
                    <GatsbyImage
                      alt="Back to Roads Logo"
                      image={getImage(logoImg)} 
                      width={128} height={47}
                    />
                  </Link>
                </div>              
            </div>
            <div className="col-lg-10 col-sm-9 mobile-right">
                <div className="h_rgt w-auto float-right">
                        <div className="w-auto float-left mnav">
                              <nav>
                              <ul>
                                    <li><Link to={`${siteURL}${cpath}#findmypart`}>Find My Part</Link></li> 
                                    <li><Link to={`${siteURL}${cpath}#bestsellers`}>Best Selling Units</Link></li> 
                                    <li><Link to={`${siteURL}${cpath}#howitworks`}>How It Works?</Link></li> 
                                    <li><Link to={`${siteURL}${cpath}#whychoose`}>Why Choose Us</Link></li> 
                                    <li><Link to={`${siteURL}${cpath}#reviews`}>Customer Reviews</Link></li> 
                                    <li><Link to={`${siteURL}${cpath}#faq`}>FAQ</Link></li>  
                              </ul>                                  
                            </nav>
                        </div>
                        <a href="tel:18006083868" className="btn1 ph ml-3" title="CLICK TO CALL"><FiPhoneCall className="picon" /><span>1800 608 3868</span><strong>CLICK TO CALL</strong></a>
                        <a href="tel:18006083868" className="btnm1" title="CLICK TO CALL"><img src={mpIcon} alt="CLICK TO CALL"/></a>
                  </div>
            </div>
        </div>
      </div>
    </header>
  )
}
export default LandingHeader