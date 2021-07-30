import React from 'react'
import styled from "styled-components"
import Image from './image'

const GoGreenSection = ({ bg,mbg, img }) => {
    const bgImg = bg.childImageSharp.fluid.base64
    const bgmImg = mbg.childImageSharp.fluid.base64    
    return (
        <div className="w-100 float-left gogreen mb-5">
        <div className="container">
        <SaveGreenDiv
                className="w-100 float-left"
                img={bgImg}
                mimg={bgmImg}
            >
            <div className="row d-flex justify-content-start align-items-center">
              <div className="col-md-3 col-sm-12 col-xs-12">
                <div className="text-center w-100 float-left save_img">
                <Image img={img} imgalt="go Green" alt="Buy recycled auto parts to help the environment" width="218" height="218"/>
                </div>
              </div>
              <div className="col-md-9  col-sm-12 col-xs-12">
                <div className="save_txt pt-3">
                  <h2 className="text-uppercase  mb-2 pb-2 text-white">Buy Green, Save Green</h2>
                  <p className="text-white mb-0">As a consumer, you have the power to make a difference by consciously choosing products
that are environmentally safe or from companies that make the environment a top priority.
When you shop from BackToRoad Auto Parts, you&#39;re assisting in the safe disposal of
hazardous materials like fluids, petrol, tires, catalytic converters, and toxic waste that would
otherwise wind up in landfills, contaminating the soil and pouring into our rivers.</p>
<p className="text-white mb-0">Buying used parts is also much more eco-friendly since repairing your car with a used part
will reduce your carbon footprint through the process of recycling. You will be doing a
favor to the environment by buying used parts to repair your car instead of buying new parts
or buying a new car.</p>
                </div>
              </div>
            </div>
          </SaveGreenDiv>
        </div>
      </div>
    )
}
const SaveGreenDiv = styled.div`
    background-image: url(${props => props.img});
    padding: 3rem !important;
    @media (max-width: 767px) {
        background-image: url(${props => props.mimg});
        padding: 1rem !important;
    }
    background-repeat:no-repeat;
    background-position:left top;
    background-size: cover;
`;
export default GoGreenSection