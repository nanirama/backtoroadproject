import React, { useState } from "react"
import Image from './image'
import FormModalBox from '../../components/LandingPage/Forms/FormModalBox'

const LandingBanner = ({bannerImage, action}) => {
    const [modalShow, setModalShow] = useState(false);
    return(
            <div className="container">  
                <div className="bot_banner w-100 float-left mt-5">
                <div className="row">
                    <div className="col-lg-9 col-md-8 col-xs-12">
                        <div className="left_text w-100 float-left">
                            <h2 className="text-white">Looking for Cost Efficient Used OEM Parts?</h2>
                            <button
                             onClick={() => setModalShow(true)}
                            className="btn1">Find your part now!</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-12">
                    <div className="ban_img w-100 float-left">
                        <Image img={bannerImage} imgalt="Back to Roads Bottom Banner"/>
                    </div>
                    </div>
                </div>
                </div>  
                <FormModalBox
                    action={action}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />              
            </div>
    )
}

export default LandingBanner