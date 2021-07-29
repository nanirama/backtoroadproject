import React from "react"
import Image from './image'
import { ImPhone } from 'react-icons/im';

const PhoneBlock = ({phoneNumberText, phoneNumber,pbImage1, pbImage2, pbImage3, pbImage4}) => {
    let iconStyles = { color: "white", fontSize: "1em", marginBottom:"3px", marginRight:"10px" };
    return(
        <>
        <div className="phone_blk w-100 float-left py-5">
            <div className="container">
                <div className="row py-4">
                    <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <div dangerouslySetInnerHTML={{ __html: phoneNumberText }}></div>                        
                        <a href={`tel:${phoneNumber}`} aria-label={phoneNumber}><ImPhone style={iconStyles} />{phoneNumber}</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="phone_images w-100 float-left py-5">
            <div className="container">
                <div className="row flex-row d-flex align-items-center justify-content-center">
                        {pbImage1 && <div className="col-sm-3 d-flex justify-content-center px-5"><Image img={pbImage1.localFile} imgalt='Phone Image 1' className="d-flex align-self-center"/></div>}
                        {pbImage2 && <div className="col-sm-3 d-flex justify-content-center px-5"><Image img={pbImage2.localFile} imgalt='Phone Image 2' className="d-flex align-self-center"/></div>}
                        {pbImage3 && <div className="col-sm-3 d-flex justify-content-center px-5"><Image img={pbImage3.localFile} imgalt='Phone Image 3' className="d-flex align-self-center"/></div>}
                        {pbImage4 && <div className="col-sm-3 d-flex justify-content-center px-5"><Image img={pbImage4.localFile} imgalt='Phone Image 4' className="d-flex align-self-center"/></div>}
                </div>
            </div>
        </div>
        </>
    )
}
export default PhoneBlock