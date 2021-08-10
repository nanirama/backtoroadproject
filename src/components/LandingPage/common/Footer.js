import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { menuData } from "../../../data/MenuData"


const LandingFooter = ({logoImg, secureImg, partnersImg}) => {
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
                                {item.name==='facebook' && <svg viewBox="0 0 512 512"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/></svg> }
                                {item.name==='twitter' && <svg viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/></svg> }
                                {item.name==='linkedin' && <svg viewBox="0 0 512 512"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/></svg> }
                                {item.name==='youtube' && <svg viewBox="0 0 512 512"><path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"/></svg> }
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