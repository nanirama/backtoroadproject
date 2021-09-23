import React from "react"
import Image from './image'

const PhoneBlock = ({phoneNumberText, phoneNumber,pbImage1, pbImage2, pbImage3, pbImage4}) => {
    return(
        <>
        <div className="phone_blk w-100 float-left py-5">
            <div className="container">
                <div className="row py-4">
                    <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <div dangerouslySetInnerHTML={{ __html: phoneNumberText }}></div>                        
                        <a href={`tel:${phoneNumber}`} aria-label={phoneNumber}><span class="icon">
    <svg viewBox="0 0 500 500">
      <path d="M128,21q40,75,53,91.5q10,15.5-2,27.5c-10,13-38,32-45,40c-10,9-12,15-3,32q54,105,158,156c18,10,20,5,32-5c8-8,20-27,35-41c10-11,20-12,32-3q14,11,88,51c9,5,11,8,9,27q-7,40-22,51q-67,53-133,29c-180-55-286-195-315-336q-4-62,36-105q10-13,30-17c35-11,42-6,47,2z" />
    </svg>
  </span>{phoneNumber}</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="phone_images w-100 float-left py-5">
            <div className="container">
                <div className="row flex-row d-flex align-items-center justify-content-center">
                        {pbImage1 && <div className="col-sm-3 d-flex justify-content-center px-5"><Image img={pbImage1.localFile} imgalt={pbImage1.altText || 'Image 1'} className="d-flex align-self-center"/></div>}
                        {pbImage2 && <div className="col-sm-3 d-flex justify-content-center px-5"><Image img={pbImage2.localFile} imgalt={pbImage2.altText || 'Image 2'} className="d-flex align-self-center"/></div>}
                        {pbImage3 && <div className="col-sm-3 d-flex justify-content-center px-5"><Image img={pbImage3.localFile} imgalt={pbImage3.altText || 'Image 3'} className="d-flex align-self-center"/></div>}
                        {pbImage4 && <div className="col-sm-3 d-flex justify-content-center px-5"><Image img={pbImage4.localFile} imgalt={pbImage4.altText || 'Image 4'} className="d-flex align-self-center"/></div>}
                </div>
            </div>
        </div>
        </>
    )
}
export default PhoneBlock