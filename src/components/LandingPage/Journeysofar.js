import React from "react"

import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image'

import { JourneySoFarData } from "../../data/JourneySoFar"

import journeyIcon from '../../assets/images/landing/jicon.png'
import { FaUserAlt, FaStar, FaRegCompass } from 'react-icons/fa';
import { HiCog } from 'react-icons/hi';

const JourneySoFar = ({image}) => {
    let iconStyles = { color: "white" };
    const imageData = image.childImageSharp.fluid
    return(
        <BackgroundImage
                Tag="section"
                className="journey_blk w-100 float-left text-center"
                fluid={imageData}
            >
            <div className="container">
                <h2
                    data-aos="fade-down"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="tlt text-white text-center text-uppercase"
                >Our Journey So Far</h2>
                <div
                    className="row d-flex align-items-center justify-content-center align-items-center "
                    itemScope itemType="https://schema.org/Product"                  
                >
                    {JourneySoFarData.map((item, index) => {
                        return (
                            <div
                                key={index}
                                property="itemListElement" typeof="ListItem"
                                className="col-md-3 col-sm-6 col-xs-12 d-flex align-items-center justify-content-center"
                            >
                                <div
                                    data-aos="fade-down"
                                    data-aos-delay="50"
                                    data-aos-duration="1000"
                                    className="count_blk w-100 text-center d-flex align-items-center justify-content-center flex-column"
                                >
                                    <JourneyIcon img={journeyIcon} className="icon d-flex align-items-center justify-content-center flex-row"  itemprop="image">
                                        {item.newicon==='cog' && <HiCog style={iconStyles} className="iconr" /> }
                                        {item.newicon==='user' && <FaUserAlt style={iconStyles} className="iconr" /> }
                                        {item.newicon==='star' && <FaStar style={iconStyles} className="iconr" /> }
                                        {item.newicon==='compass' && <FaRegCompass style={iconStyles} className="iconr" /> }
                                    </JourneyIcon>
                                    <h3 itemProp="name" className="mb-0">{item.title}</h3>
                                    <p itemProp="description" className="mb-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}   
                </div>
            </div>
        </BackgroundImage>  
    )
}
const JourneyIcon = styled.div`
    background-image: url(${props => props.img});
`;
export default JourneySoFar