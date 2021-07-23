import React, {useRef, useState} from "react"
import { Link } from "gatsby"
import { menuData } from "../../../data/MenuData"
import styled from "styled-components"
import mpIcon from "../../../assets/images/landing/callbtn.svg"
import { FiPhoneCall } from 'react-icons/fi';

const LandingHeader = ({ logoImg }) => {
  const logoImage = logoImg.childImageSharp.fixed.base64
  return(
    <header className="w-100 float-left pt-4 pb-3">
      <div className="container">
        <div className="row">
            <div className="col-lg-2 col-sm-3">
                <div className="logo w-auto float-left">
                  <Link to="/">
                    <Logo src={logoImage} alt="Back to Roads Logo" itemprop="logo" width={128} height={47}/>
                   {/* <GatsbyImage image={} alt="Back to Roads Logo" itemprop="logo" width={128} height={47} /> */}
                  </Link>
                </div>              
            </div>
            <div className="col-lg-10 col-sm-9 mobile-right">
                <div className="h_rgt w-auto float-right">
                        <div className="w-auto float-left mnav">
                              <nav>
                              <ul>
                                {menuData.map((item, index) => (
                                  <li key={index}><Link to={item.link}>{item.title}</Link></li>                   
                                ))}
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
const Logo = styled.img`
  font-size: 3rem;
  align-self: center;
  width: 128px; 
  height: 47px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`
export default LandingHeader