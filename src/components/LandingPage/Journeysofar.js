import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { JourneySoFarData } from "../../data/JourneySoFar"
import journeyIcon from '../../assets/images/landing/jicon.png'

const JourneySoFar = ({image}) => {
    const imageData = image.childImageSharp.fluid.base64
    return(
        <JourneyDiv
                className="journey_blk w-100 float-left text-center"
                img={imageData}
            >
            <div className="container">
                <h2
                    className="tlt text-white text-center text-uppercase"
                >Our Journey So Far</h2>
                <div
                    className="row d-flex align-items-center justify-content-center align-items-center "                                     
                >
                    {JourneySoFarData.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="col-md-3 col-sm-6 col-xs-6 d-flex align-items-center justify-content-center"
                            >
                                <div
                                    className="count_blk w-100 text-center d-flex align-items-center justify-content-center flex-column align-self-stretch"
                                >
                                    <JourneyIcon img={journeyIcon} className="icon d-flex align-items-center justify-content-center flex-row"  itemprop="image">
                                        {item.newicon==='cog' && <StaticImage src="../../assets/images/landing/cog-icon.png" width={60} height={60}  /> }
                                        {item.newicon==='loc' && <StaticImage src="../../assets/images/landing/loc-icon.png" width={60} height={60} /> }
                                        {item.newicon==='star' && <StaticImage src="../../assets/images/landing/star-icon.png" width={60} height={60}/> }
                                        {item.newicon==='compass' && <StaticImage src="../../assets/images/landing/compass-icon.png" width={60} height={60}  /> }
                                    </JourneyIcon>                               
                                    <h3 className="mb-0">{item.title}</h3>
                                    <p className="mb-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}   
                </div>
            </div>
        </JourneyDiv>  
    )
}
const JourneyIcon = styled.div`
    background-image: url(${props => props.img});
`;
const JourneyDiv = styled.div`
    background-image: url(${props => props.img});
`;
export default JourneySoFar