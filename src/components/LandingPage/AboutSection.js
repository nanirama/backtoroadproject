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
                <h2 className="tlt mb-2 pb-2 mt-3 text-uppercase">About BackToRoad Auto Parts</h2>
                <p>BackToRoad Auto Parts is your go-to place for high-quality used OEM auto parts. We have an unrivaled selection of used auto parts for sale from a variety of cars, including even the latest models. We make sure to sell only high-quality and genuine OEM parts that are inspected by our Auto Parts team and verified to be in good working condition. </p>
                <p>All of our products come with a 30-day warranty so our customers are guaranteed a pleasant experience each time they shop with us. We also offer free and quick delivery of our products to our customers across the USA and Canada. We ship either to your doorstep or directly to your mechanic as per your convenience, allowing you to get your car back on the road as soon as possible. </p>
                <Link to="/about" className="btn2">Check Out 
     <svg viewBox="0 0 500 500" >
       <path d="M357,214v-64a9,9 0 01 15-5l106,96.5a9.5,9.5 0 01 0,15.5l-106,96.5a9,9 0 01-15-5v-64h-348a9,9 0 01 -9-9v-52.5a9,9 0 01 9-9z" />
    </svg>
  </Link> </div>
            </div>
            </div>
        </div>
    )
}

export default AboutSection