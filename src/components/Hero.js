import React, { useEffect, useState } from "react"
import styled from 'styled-components/macro'
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import Img from 'gatsby-image'
import Aos from "aos"
import "aos/dist/aos.css"
import { useStateValue } from '../StateProvider';

import StepOne from "./Forms/StepOne"
import StepTwo from "./Forms/StepTwo"
import StepThree from "./Forms/StepThree"

import BgImgOne from '../assets/images/bg/car-parts.svg'
import BgImgTwo from '../assets/images/bg/hand-mob.svg'
import BgImgThree from '../assets/images/bg/map-usa.svg'
import BgImgFour from '../assets/images/bg/sanitize.svg'

import BackgroundOne from '../assets/images/bg/bg-1.png'
import BackgroundTwo from '../assets/images/bg/bg-2.png'
import BackgroundThree from '../assets/images/bg/bg-3.png'
import BackgroundFour from '../assets/images/bg/bg-4.png'

const Hero = () => {
  const [{ year, make, model, part, user, stepOne, stepTwo, stepThree }, dispatch] = useStateValue();

  useEffect(() => {
    Aos.init({});
  }, [])

  const [firstStep, setFirstStep] = useState(true);
  const [secondStep, setSecondStep] = useState(false);
  const [thirdStep, setThirdStep] = useState(false);

    //  const data = useStaticQuery(graphql`
    // # query BgImageQuery {
    // #   allBackgroundImageJson {
    // #     edges {
    // #       node {
    // #         img {
    // #           childImageSharp {
    // #             fluid {
    // #               ...GatsbyImageSharpFluid
    // #             }
    // #           }
    // #         }
    // #         alt
    // #       }
    // #     }
    // #   }
    // # }
    // #  
    // #`)

  function getBgImage() {   // data as arg
    return (
      <>
      {/* Ingeniuos fix. Need to use srcset instead. ToDo */}
        <Carousel className="CarouselBox" nextIcon="" nextLabel="" prevIcon="" prevLabel="" interval={null}>
          <Carousel.Item>
            <CarouselItemBg>
              <Icon src={BgImgOne} alt=""/>
              <BgImage src={BackgroundOne} alt=""/>
            </CarouselItemBg>
            {/* < ImageBg fluid={data.allBackgroundImageJson.edges[0].node.img.childImageSharp.fluid} /> */}
          </Carousel.Item>
          <Carousel.Item>
            <CarouselItemBg>
              <Icon src={BgImgTwo} alt="" />
              <BgImage src={BackgroundTwo} alt="" />
            </CarouselItemBg>
            {/* {/* < ImageBg fluid={data.allBackgroundImageJson.edges[1].node.img.childImageSharp.fluid} /> */}
          </Carousel.Item>
          <Carousel.Item>
            <CarouselItemBg>
              <Icon src={BgImgThree} alt="" />
              <BgImage src={BackgroundThree} alt="" />
            </CarouselItemBg>
            {/* {/* < ImageBg fluid={data.allBackgroundImageJson.edges[2].node.img.childImageSharp.fluid} /> */}
            </Carousel.Item> 
          <Carousel.Item>
            <CarouselItemBg>
              <Icon src={BgImgFour} alt="" />
              <BgImage src={BackgroundFour} alt="" />
            </CarouselItemBg>
            {/* {/* < ImageBg fluid={data.allBackgroundImageJson.edges[3].node.img.childImageSharp.fluid} /> */}
          </Carousel.Item>
        </Carousel>
      </>
    )
  }

  const onClick = () => {
    setFirstStep(false);
    setSecondStep(true);
  }
  const onClickToThree = () => {
    setSecondStep(false);
    setThirdStep(true);
  }
  const onClickToOne = () => {
    setThirdStep(false);
    setFirstStep(true);
  }

  return (
    <HeroContainer>
      <HeroBg>
        {getBgImage()}
      </HeroBg>
      <HeroContent>
        <Header>
          <TitleDiv>
            <h3>FIND MY PART FORM</h3>
          </TitleDiv>
          <StepIndicators>
            <DivStepOne firstStep={firstStep}><h4>1</h4></DivStepOne>
            <DivStepTwo secondStep={secondStep}><h4>2</h4></DivStepTwo>
            <DivStepThree thirdStep={thirdStep}><h4>3</h4></DivStepThree>
          </StepIndicators>
        </Header>
        <HeroItems>
          {firstStep ? <StepOne /> : null}
          {secondStep ? <StepTwo /> : null}
          {thirdStep ? <StepThree /> : null}

          {stepOne !== '' ? <Input type="submit" value="Find my part now" onClick={onClick} /> : null}
          {stepTwo !== '' ? <Input type="submit" value="Next step" onClick={onClickToThree} /> : null}
          {stepThree !== '' ? <Input type="submit" value="Get Me a price" onClick={onClickToOne} /> : null}

          {console.log('YEAR', year)}
          {console.log('MAKE', make)}
          {console.log('MODEL', model)}
          {console.log('PART', part)}
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
  }

   @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 145vh;
  }
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    height: 60vh;
  }

`

const ImageBg = styled(Img)`
  width: 100%;
  height: 80%;
  -o-object-fit: contain;
  object-fit: contain;
  
  /* @media screen and (max-width: 480px) {
    display: none;
  } */

`

const ImageBgM = styled(Img)`
  display: none;  
  
  @media screen and (max-width: 480px) {
    display: block;
    height: 80%;
    -o-object-fit: contain;
    object-fit: contain;
    height: 100vh;
  }
`

const HeroContent = styled.div`
  z-index: 3;
  max-height: 100%;
  align-self: center;
  width: 25vw;
  min-width: 340px; 
  min-height: 60vh;
  margin-top: 50px;
  background: #ffffff;

  @media screen and (max-width: 480px) {
    width: 92vw;
    margin-top: 62vh;
    background-color: #fdfdfd; /* For browsers that do not support gradients */
    background-image: linear-gradient(#fdfdfd, #ffffff);
    border: 10px solid rgba(255,255,255,0.20);
    // box-shadow: 2px 2px 16px 8px rgb(245 243 241 / 51%)
    box-shadow: 2px 2px 16px 8px rgb(234 231 227 / 51%)
  }

`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  z-index: 4;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  transition: 0.5s;
  background: #ffffff;
`

const Input = styled.input`
  width: 140px;
  height: 40px;
  margin: 0.5rem;
  color: #ffffff;
  border-radius: 2px;
  background: #f1ac40;
  border: 1px solid #f1ac40;
`

const TitleDiv = styled.div`
  color: #ffffff;
  background: #f1ac40;
  border: 1px solid #f1ac40;
  height: 40px;
  text-align: center;

  h3{
      font-weight: 400;
  }
`

const Header = styled.div`
  width: 100%;
`

const StepIndicators = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 15px 0;
`

const DivStepOne = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  border: none;
  background: ${({ firstStep }) => (firstStep == true ? "orange" : "blue")};
  display:flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-weight: bold;
    margin-bottom: 0;
  }
`

const DivStepTwo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  border: none;
  background: ${({ secondStep }) => (secondStep ? "orange" : "blue")};
  display:flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-weight: bold;
    margin-bottom: 0;
  }
`

const DivStepThree = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  border: none;
  background: ${({ thirdStep }) => (thirdStep ? "orange" : "blue")};
  display:flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-weight: bold;
    margin-bottom: 0;
  }
`

const CarouselItemBg = styled.div`
  background: blue;
  height: 100vh;
  display: flex;
  position: relative;
`

const Icon = styled.img`
  /* align-self: right; */
  width: 50vw; 
  height: 60vw;
  position: absolute;
  right: 0;
  /* bottom: 0; */
  /* margin: 5vw 0; */

 @media screen and (max-width: 480px) {
  width: 60vw;
  height: 60vw;
  position: absolute;
  right: 0;
  bottom: 37vh;
  /* width: 100vw; */
  /* height: 72vw; */
  /* right: 0;    */
  /* margin: 35vw auto; */
 }
`

const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`