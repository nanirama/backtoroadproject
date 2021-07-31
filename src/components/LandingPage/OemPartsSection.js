import React from "react"
import { OemPartsData } from "../../data/HomeOemParts"
import { FaLongArrowAltRight } from 'react-icons/fa';
const OemPartsSection = () => {
  return (
    <div className="oem_parts_blk w-100 float-left text-center">
        <div className="container">
        <h1 className="text-uppercase mb-5 pb-2">Featured Genuine OEM Parts</h1>
        <div className="row d-flex justify-content-between align-items-stretch">
        {OemPartsData.map((item, index) => {
            return(
            <div key={index} className="col-lg-3 col-sm-6 col-xs-6 mb-2">
             <div className="sub_box w-100">
                <div className="icon mb-4 w-100 text-center">
                    <img className="w-auto" src={item.img} alt={item.alt} width="70" height="70" />
                </div>
                <div className="sub_box_content w-100">
                    <h3 className="mb-3">{item.name}</h3>
                    <p className="mb-2">{item.desc}</p>
                    <a target="_blank" rel="noreferrer noopener" href={ `https://backtoroadautoparts.com/${item.to}` } className="more_link w-100 float-left text-center text-uppercase">Read More <FaLongArrowAltRight className="rarrow"/></a>
                </div>
             </div>
            </div>
            )
           })} 
            </div>
        </div>
    </div>
  )
}

export default OemPartsSection