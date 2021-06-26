import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Image from '../image'
import secureImage from "../../../assets/images/landing/secure-img.png"
import partersImage from "../../../assets/images/landing/partners-img.png"
import { menuData } from "../../../data/MenuData"


import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


const LandingFooter = ({logoImg, secureImg, partnersImg}) => {
    console.log(secureImg);
    let iconStyles = { color: "white", fontSize: "1.5em", marginRight:"25px" };
    return(
        <footer className="w-100 float-left">
            <div className="container">
            <div className="f_top w-100 float-left">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="f_logo w-100 float-left mb-4">
                        <div className="float-left f_logo_img" itemscope itemtype="https://schema.org/Hotel">
                        <Link to="/">
                        <GatsbyImage image={getImage(logoImg)} alt="Back to Roads" itemprop="logo" />
                        </Link>
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                    <div className="s_links w-100 float-left">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF style={iconStyles} /><span>Facebook for BacktoRoads Auto Parts</span></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter style={iconStyles} /><span>Twitter for BacktoRoads Auto Parts</span></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn style={iconStyles} /><span>LinkedIn for BacktoRoads Auto Parts</span></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube style={iconStyles} /><span>Youtube for BacktoRoads Auto Parts</span></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="f_links w-100 float-left">
                    <h3 className="pb-2 text-white">Popular Brands</h3>
                    <div className="row">
                        <ul property="itemListElement" typeof="ListItem">
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Acura</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Buic</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Dodge</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Audi</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Cadilac</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Fiat</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Bentley</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Chervrolet</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Ford</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">BMW</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Chrysler</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">GMC</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Honda</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Hyundai</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Infiniti</Link></li>
                        <li vocab="https://schema.org/" typeof="ItemList" className="col-sm-4 col-xs-6"><Link to="/">Jaguar</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-xs-12">
                    <div className="f_links f_nav w-100 float-left">
                    <h3 className="pb-2 text-white">Quick Links</h3>
                    <ul property="itemListElement" typeof="ListItem">                
                        {menuData.map((item, index) => (
                            <li vocab="https://schema.org/" typeof="ItemList"><Link to={item.link} key={index}>{item.title}</Link></li>                   
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-xs-12" vocab="https://schema.org/" typeof="Person">
                    <div className="address w-100 float-left" >
                    <h3 className="pb-2 text-white">Contact</h3>
                    <p className="mb-3">Serving USA and Canada</p>
                    <p className="mb-3"><a href="#" property="email">customeservice@parts.com</a></p>
                    <a href="#" className="btn1" property="telephone">1800 608 3868</a> </div>
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