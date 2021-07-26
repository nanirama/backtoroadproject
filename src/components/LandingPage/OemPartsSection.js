import React, { useRef } from "react"
import useIntersectionObserver from '@react-hook/intersection-observer'
import { OemPartsData } from "../../data/HomeOemParts"
import { FaLongArrowAltRight } from 'react-icons/fa';
const OemPartsSection = () => {

    const containerRefh2 = useRef() 
    const lockRefh2 = useRef()
    let { isIntersecting } = useIntersectionObserver(containerRefh2)
    if (isIntersecting && !lockRefh2.current) {
        lockRefh2.current = true
    }
  return (
    <div className="oem_parts_blk w-100 float-left text-center" ref={containerRefh2}>
    {lockRefh2.current && (
        <div className="container">
        <h1 className="text-center text-uppercase mb-5 pb-2">Featured Genuine OEM Parts</h1>
        <div className="row d-flex justify-content-between align-items-stretch">
        {OemPartsData.map((item, index) => {
            return(
            <div className="col-lg-3 col-sm-6 col-xs-6 mb-2">
            <div className="sub_box w-100">
                <div className="icon mb-4 w-100 text-center">
                    <img className="w-auto" src={item.img} alt={item.alt} width="70" height="70" />
                </div>
                <div className="sub_box_content w-100">
                    <h3 className="mb-3">{item.name}</h3>
                    <p className="mb-2">{item.desc}</p>
                </div>
                <a href="#" className="more_link w-100 float-left text-center text-uppercase">Read More <FaLongArrowAltRight className="rarrow"/></a> </div>
            </div>
            )
           })} 
            </div>
        </div>
    )}
    </div>
  )
}

export default OemPartsSection