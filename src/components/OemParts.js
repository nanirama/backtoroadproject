import React, { useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Aos from "aos"
import "aos/dist/aos.css"

import { OemPartsData } from "../data/OemParts"

const OemParts = ({ heading }) => {
  useEffect(() => {
    Aos.init({})
  }, [])

  function getOemParts() {
    const partsArray = []

    {OemPartsData.map((item, index) => {
      partsArray.push(
        <ProductCard
          key={index}
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <ProductImgWrapper>
            <Icon src={item.img} alt={item.alt} className="SvgColorClass"/>
          </ProductImgWrapper>

          <ProductInfo>
            <TextWrap>
              <ProductTitle>{item.name}</ProductTitle>
              <Description>{item.desc}</Description>
            </TextWrap>
          </ProductInfo>
        </ProductCard>
      )
    })}
    return partsArray
    }

  return (
    <ProductsContainer>
      <Wrapper>
        <ProductsHeading
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000">FEATURED GENUINE OEM PARTS</ProductsHeading>
        <ProductWrapper>
          {getOemParts()}
        </ProductWrapper>
      </Wrapper>
    </ProductsContainer>
  )
}

export default OemParts

const ProductsContainer = styled.div`
  min-height: 90vh;
  width: 100vw;
  padding: 2rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 415px) {
    min-height: 80vh;
  }
`

const Wrapper = styled.div`
  height: 100%;
  background-color: #fdfdfd; /* For browsers that do not support gradients */
  background-image: linear-gradient(#fdfdfd, #ffffff);
  border: 10px solid rgba(255,255,255,0.20);
  box-shadow: 2px 2px 16px 8px rgba(217,210,200,0.51);
`

const ProductsHeading = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2rem);
  text-align: center;
  padding: 0 2rem;  
  margin-bottom: 3rem;
  color: #000;
  font-weight: bold;
`

const ProductWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 415px) {
    grid-template-columns: repeat(8, 92vw);
    grid-gap: 4vw;
    overflow-x:auto;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 350px;
  transition: 0.2s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`

const ProductImgWrapper = styled.div`
  width: 150px;
  height: 250px;
  border-radius: 150px;
  // background-image: linear-gradient(312deg,#6dd5ed, #2193b0);
  // border: 1px solid rgba(255,255,255,0.20);
  // box-shadow: 6px 6px 16px 0 rgba(217,210,200,0.51);  
  background: #e8f0fc;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Icon = styled.img`
  font-size: 3rem;
  align-self: center;
  width: 75px; 
  height: 95px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.2);
  }
`

const ProductInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  position: absolute;
  top: 150px;
`

const ProductTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
  align-self: center;
  margin-top: 0.5rem;
  textformating:
`

const Description = styled.p`
  margin-top: 0.5rem;
  align-self: center;
`