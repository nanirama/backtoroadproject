import React, { useRef } from "react"
import useIntersectionObserver from '@react-hook/intersection-observer'
import Image from './image'

const LandingBanner = ({bannerImage}) => {
    const containerRef10 = useRef()
    const lockRef10 = useRef()
    let { isIntersecting } = useIntersectionObserver(containerRef10)    
    if (isIntersecting && !lockRef10.current) {
        lockRef10.current = true
    }
    return(
            <div className="container" ref={containerRef10}> 
            {lockRef10.current && (   
                <div className="bot_banner w-100 float-left mt-5">
                <div className="row">
                    <div className="col-lg-9 col-md-8 col-xs-12">
                        <div className="left_text w-100 float-left">
                            <h2 className="text-white">Looking for a Low Mileage Used OEM Parts?</h2>
                            <button className="btn1">Find your part now!</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-12">
                    <div className="ban_img w-100 float-left">
                        <Image img={bannerImage} imgalt="Back to Roads Bottom Banner"/>
                    </div>
                    </div>
                </div>
                </div>
            )}
            </div>
    )
}

export default LandingBanner