import React from "react"
import Image from './image'

const LandingBanner = ({bannerImage}) => {
    return(
        <div className="container">
            <div className="bot_banner w-100 float-left">
            <div className="row">
                <div className="col-lg-9 col-md-8 col-xs-12">
                    <div className="left_text w-100 float-left">
                        <h2 className="text-white">Lorem Ipsum is simply dummy text of the printing.</h2>
                        <button className="btn1">Find Parts Now</button>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-12">
                <div className="ban_img w-100 float-left">
                    <Image img={bannerImage} imgalt="Back to Roads Bottom Banner"/>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LandingBanner