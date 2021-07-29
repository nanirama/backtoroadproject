import React from "react"
import styled from "styled-components"
import buttonBg from '../../assets/images/landing/arrow-down.png'

const LandingMakeModelList = ({data, title, subtitle}) => {
    return(
          <div className="popular_blk w-100 float-left">  
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-xs-12">
                  <h2 className="tlt text-uppercase mb-3">{ title && title }</h2>
                </div>
                <div className="col-md-4 col-xs-12">
                  <Button className="btn1 show" img={buttonBg}>View All</Button>
                </div>
              </div>
              <h3>{ subtitle && subtitle } </h3>
              <div className="container">
                <div dangerouslySetInnerHTML={{ __html: data }} className="row float-left overflow-hidden" ></div>                  
              </div>
              <div className="btn_outer w-100 float-left text-center">
                <Button className="btn1 hide" img={buttonBg} aria-label="View All Models">View All</Button> 
              </div>
            </div>
        </div>
    )
}
const Button = styled.button`
  background-image: url(${props => props.img});
`;
export default LandingMakeModelList