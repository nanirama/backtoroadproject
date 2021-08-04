import React, { useEffect, useState, useRef } from "react"
import styled, { css } from 'styled-components/macro'
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";

import { OemPartsData } from "../data/OemParts"

const OemParts = ({ heading }) => {
  const [current, setCurrent] = useState(0);
  const length = OemPartsData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(OemPartsData) || OemPartsData.length <= 0) {
    return null
  }

  function getOemParts() {
    const partsArray = []

    {OemPartsData.map((item, index) => {
      partsArray.push(
        <ProductCard
          key={index}
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


  function getOemPartsMob() {
    const partsArrayMob = []

    {OemPartsData.map((part, index) => {
      partsArrayMob.push(
          <ProductSlide key={index}>
            {index === current && (
              <ProductSlider>

                <ProductImgWrapper>
                  <Icon src={part.img} alt={part.alt} className="SvgColorClass" />
                </ProductImgWrapper>

                <ProductInfo>
                  <TextWrap>
                    <ProductTitle>{part.name}</ProductTitle>
                    <Description>{part.desc}</Description>
                  </TextWrap>
                </ProductInfo>

              </ProductSlider>
            )}
          </ProductSlide>
        )
     })}
     return partsArrayMob
  }

  return (
    <ProductsContainer>
      <Wrapper>
        <ProductsHeading>FEATURED GENUINE OEM PARTS
        </ProductsHeading>
        <ProductWrapper>
          {getOemParts()}
        </ProductWrapper>


        <ProductWrapperMob>
          {getOemPartsMob()}
          <SliderButtonsLeft>
            <PrevArrow onClick={prevSlide} />
          </SliderButtonsLeft>
          <SliderButtonsRight>
            <NextArrow onClick={nextSlide} />
          </SliderButtonsRight>
        </ProductWrapperMob>
      </Wrapper>
    </ProductsContainer>
  )
}

export default OemParts

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #3232b3;
    cursor: pointer;
    background: #ffffff;
    border-radius: 50px;
    padding: 5px;
    user-select: none;
    transition: 0.3s;

    &.hover {
        background: #cd853f;
        transform: scale(1.05)
    }
`

const PrevArrow = styled(FaRegArrowAltCircleLeft)`
    ${arrowButtons}
`
const NextArrow = styled(FaRegArrowAltCircleRight)`
    ${arrowButtons}
`

const ProductsContainer = styled.div`
  min-height: 90vh;
  width: 100vw;
  padding: 2rem calc((100vw - 1300px) / 2);
  
  @media screen and (max-width: 440px) {
    min-height: 80vh;
    padding: 1rem 1.4rem;
  }
`

const Wrapper = styled.div`
  height: 100%;
  background-color: #fdfdfd; /* For browsers that do not support gradients */
  background-image: linear-gradient(#fdfdfd, #ffffff);
  border: 10px solid rgba(255,255,255,0.20);
  box-shadow: 2px 2px 16px 8px rgb(236 236 235 / 51%);
  padding: 1rem;
`

// font-size: clamp(1.5rem, 5vw, 2rem);
const ProductsHeading = styled.h2`
  /* font-size: 700; */
  font-size: clamp(1.5rem, 5vw, 2rem);
  text-align: center;
  padding: 0 2rem;  
  margin-bottom: 3rem;
  color: #000;
  font-weight: bold;

   @media screen and (max-width: 440px) {
    font-size: 400;
  }
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

  @media screen and (max-width: 440px) {
    display: none;
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

  @media screen and (max-width: 440px) {
    padding: 0 1rem;
    align-items: center;
  }
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  position: absolute;
  top: 150px;

  @media screen and (max-width: 440px) {
    padding: 1rem 1rem;
    align-items: center;
  }
`

const ProductTitle = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  align-self: center;
  margin-top: 0.5rem;
`

const Description = styled.p`
  margin-top: 0.5rem;
  align-self: center;
  line-height: 1.7;
  color: #8e8989;

  @media screen and (max-width: 440px) {
    text-align: center;
  }
`


const ProductWrapperMob = styled.div`
  display: none;

  @media screen and (max-width: 440px) {
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
`

const ProductSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`

const ProductSlider = styled.div`
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s;

    &::before{
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
    }
`

const SliderButtonsLeft = styled.div`
    position: absolute;
    bottom: 60%;
    left: 10px;
    display: flex;
    z-index: 10;
`

const SliderButtonsRight = styled.div`
    position: absolute;
    bottom: 60%;
    right: 10px;
    display: flex;
    z-index: 10;
`
