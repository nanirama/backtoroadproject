import React, { useRef } from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer'
import { Link } from "gatsby"
import Image from './image'

const AboutSection = ({ image }) => {
    const containerRef = useRef() 
    const lockRef = useRef()
    let { isIntersecting } = useIntersectionObserver(containerRef)
    if (isIntersecting && !lockRef.current) {
        lockRef.current = true
    }
    return (
        <div className="about_blk w-100 float-left position-relative bg-white" ref={containerRef}>
        {lockRef.current && (
            <>
            <div className="container">
            <div className="row d-flex flex-row justify-content-between align-items-center">
                <div className="col-md-6 col-xs-12 mb-2">
                <div className="w-100 float-left mt-2 d-flex justify-content-center align-items-center">
                    {image && (<Image img={image}
                        imgalt="Used OEM auto parts combined together"
                        alt="Used OEM auto parts combined together"
                        width={500}
                        height={500}
                    />)}
                </div>
                </div>
                <div className="col-md-6 col-xs-12 mt-1">
                <h2 className="mb-2 pb-2 mt-3 text-uppercase">About BTR</h2>
                <p>We deliver quality used parts to all 50 states and 5 self-governing territories of USA and all over Canada. We work on a live inventory with auto parts updated instantly according to availability, so we can ensure a fast shipment. With our tie-up shipping carriers all over the country, even if the parts you are looking for is not available nearby you or in your state, we ensure quick delivery to your residence or to your mechanic. </p>
                <Link className="abt btn1">Read More</Link> </div>
            </div>
            </div>
            </>
            )}
        </div>
    )
}

export default AboutSection