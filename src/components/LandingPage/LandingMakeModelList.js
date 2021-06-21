import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import buttonBg from '../../assets/images/landing/arrow-down.png'

const LandingMakeModelList = ({data}) => {
    return(
        <div className="popular_blk w-100 float-left">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-xs-12">
          <h2 className="tlt text-uppercase mb-3">Popular Ford Used Parts</h2>
        </div>
        <div className="col-md-4 col-xs-12">
          <Button className="btn1 show" img={buttonBg}>View All</Button>
        </div>
      </div>
      <h3>Quality Auto Parts - Buy Quality Parts for a Ford Model</h3>
      <div className="container">
        <ul className="row" itemscope itemtype="https://schema.org/Product">
        {data.map((node, index) => (
            <li key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
            property="itemListElement" typeof="https://schema.org/ListItem">
              <Link to={node.id} itemprop="name">{node.name}</Link>
            </li>                
        ))}
        </ul>
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