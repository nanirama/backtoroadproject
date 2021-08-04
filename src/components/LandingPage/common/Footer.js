import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { menuData } from "../../../data/MenuData"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


const LandingFooter = ({logoImg, secureImg, partnersImg}) => {
    //const footerLogoImg = logoImg.childImageSharp.fixed.base64
    let iconStyles = { color: "white", fontSize: "1.5em", marginRight:"25px" };
    const socialIcons = [
        {
            'name': 'facebook',
            'url': 'https://www.facebook.com/'
        },
        {
            'name': 'twitter',
            'url': 'https://twitter.com/'
        },
        {
            'name': 'linkedin',
            'url': 'https://www.linkedin.com/'
        },
        {
            'name': 'youtube',
            'url': 'https://www.youtube.com/'
        },
    ]
    return(
        <footer className="w-100 float-left"> 
            <div className="container">
            <div className="f_top w-100 float-left">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="f_logo w-100 float-left mb-4">
                        <div className="float-left f_logo_img">
                        <Link to="/">                        
                        <GatsbyImage
                            alt="BackToRoad Auto Parts brand logo"
                            image={getImage(logoImg)} 
                            width={128} height={47}
                        />
                        </Link>
                        </div>
                    </div>
                    <p>Contact us for all your used OEM parts needs. We’re the best place to buy used parts online,
with high quality and genuine used OEM parts at affordable prices. Have a hassle-free
experience shopping with us and get your car back on the road in no time at all.</p>
                    <div className="s_links w-100 float-left">
                    {socialIcons.map((item, index) => (
                        <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
                                {item.name==='facebook' && <FaFacebookF style={iconStyles} /> }
                                {item.name==='twitter' && <FaTwitter style={iconStyles} /> }
                                {item.name==='linkedin' && <FaLinkedinIn style={iconStyles} /> }
                                {item.name==='youtube' && <FaYoutube style={iconStyles} /> }
                           <span>{item.name} for BacktoRoads Auto Parts</span>
                        </a>
                    ))}
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="f_links w-100 float-left">
                    <h3 className="pb-2 text-white">Popular Brands</h3>
                    <div className="row">
                        <ul>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Acura</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Buic</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Dodge</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Audi</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Cadilac</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Fiat</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Bentley</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Chervrolet</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Ford</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">BMW</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Chrysler</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">GMC</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Honda</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Hyundai</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Infiniti</Link></li>
                        <li className="col-sm-4 col-xs-6"><Link to="/">Jaguar</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-xs-12">
                    <div className="f_links f_nav w-100 float-left">
                    <h3 className="pb-2 text-white">Quick Links</h3>
                    <ul className="d-flex flex-column">                
                        {menuData.map((item, index) => (
                            <li key={index}><Link to={item.link} key={index}>{item.title}</Link></li>                   
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-xs-12">
                    <div className="address w-100 float-left" >
                    <h3 className="pb-2 text-white">Contact</h3>
                    <p className="mb-3">Serving USA and Canada</p>
                    <p className="mb-3"><a href="mailto:customeservice@parts.com" property="email">customeservice@parts.com</a></p>
                    <a href="tel:18006083868" className="btn1" property="telephone">1800 608 3868</a> </div>
                </div>
                </div>
            </div>
            <div className="f_bot w-100 float-left">
                <div className="row">
                <div className="col-md-3 col-xs-12 show">
                    <p className="mb-0">All Right Reserved. ©2021</p>
                </div>
                <div className="col-md-4 col-xs-12">
                    <div className="secure float-right">
                    <p className="mb-0 float-left pr-3">Secured By</p>  
                        <GatsbyImage image={getImage(secureImg)} alt="secure" />                  
                    </div>
                </div>
                <div className="col-md-5 col-xs-12">
                    <div className="partners float-right">
                    <p className="mb-0 float-left pr-2">We Accept</p>
                        <GatsbyImage image={getImage(partnersImg)} alt="Partners" />   
                    </div>
                </div>
                <div className="col-md-3 col-xs-12 hide">
                    <p className="mb-0 copyright">All Right Reserved. ©2021</p>
                </div>
                </div>
            </div>
            </div>
        </footer>  
    )
}
export default LandingFooter