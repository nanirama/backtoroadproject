import React from 'react'
import styled from 'styled-components'
import { GoGreenData } from '../data/GoGreenData'
import bgImg from '../assets/images/Save-Green-Image-2.webp'

const GoGreen = () => {
    return (
        <GoGreenContainer>
            <GoGreenWrapper img={bgImg}>
                {/* <GoGreenBg src={bgImg} alt=""/> */}
                <GoGreenTitle>
                    {GoGreenData.title}
                </GoGreenTitle>
                <GoGreenDesc>
                    {GoGreenData.desc}
                </GoGreenDesc>
            </GoGreenWrapper>
        </GoGreenContainer>
    )
}

export default GoGreen

const GoGreenContainer = styled.div`
  width:100vw;
  padding: 2rem calc((100vw - 1300px) / 2);
  position: relative;
`

const GoGreenWrapper = styled.div`
  height: 100%;
  background-color: #fdfdfd; /* For browsers that do not support gradients */
  background-image: url(${props => props.img});
  border: 1px solid rgba(255,255,255,0.20);
  box-shadow: 2px 2px 16px 8px rgba(217,210,200,0.51);
  padding: 4rem 1rem;
`

const GoGreenTitle = styled.h2`
  color: #ffffff;
  z-index: 3;
  font-weight: bold;
`

const GoGreenDesc = styled.p`
  color: #ffffff;
  z-index: 3;
  height: 100%;
  font-weight: bold;
  font-size: 1.2rem;
`