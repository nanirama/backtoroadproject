import React from 'react'
import { Link } from "gatsby"
import Image from './image'

import { BsArrowRight } from 'react-icons/bs';

const AboutSection = ({ image }) => {
    let iconStyles = { color: "white", fontSize:"1.3em" };
    return (
        <div className="about_blk w-100 float-left position-relative bg-white">
            <div className="container">
            <div className="row d-flex flex-row justify-content-between align-items-center">
                <div className="col-md-6 col-xs-12 mb-2">
                <div className="w-100 float-left mt-2 d-flex justify-content-center align-items-center">
                    {image && (<Image img={image}
                        imgalt="Used OEM auto parts combined together"
                        alt="Used OEM auto parts combined together"
                        width={504}
                        height={504}
                    />)}
                </div>
                </div>
                <div className="col-md-6 col-xs-12 mt-1">
                <h2 className="tlt mb-2 pb-2 mt-3 text-uppercase">About BTR</h2>
                <p>We deliver quality used parts to all 50 states and 5 self-governing territories of USA and all over Canada. We work on a live inventory with auto parts updated instantly according to availability, so we can ensure a fast shipment. With our tie-up shipping carriers all over the country, even if the parts you are looking for is not available nearby you or in your state, we ensure quick delivery to your residence or to your mechanic. </p>
                <Link to="/about" className="btn2">Read More <BsArrowRight style={iconStyles}/></Link> </div>
            </div>
            </div>
        </div>
    )
}

export default AboutSection