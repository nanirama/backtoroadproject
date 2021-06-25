import React, { useEffect, useState, useRef } from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import Img from 'gatsby-image'
import Aos from "aos"
import "aos/dist/aos.css"

import { useStateValue } from '../StateProvider';

import StepOne from "./Forms/StepOne"
import StepTwo from "./Forms/StepTwo"
import StepThree from "./Forms/StepThree"

const Hero = () => {
  const [{ year, make, model, part, user, stepOne, stepTwo, stepThree }, dispatch] = useStateValue();

  useEffect(() => {
    Aos.init({});
  }, [])


  const [firstStep, setFirstStep] = useState(true);
  const [secondStep, setSecondStep] = useState(false);
  const [thirdStep, setThirdStep] = useState(false);

  const data = useStaticQuery(graphql`
    query BgImageQuery {
      allBackgroundImageJson {
        edges {
          node {
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  `)

  function getBgImage(data) {
    return (
      <>
      {/* Ingeniuos fix. Need to use srcset instead. ToDo */}
        <Carousel style={{ height: '98vh' }}>
          <Carousel.Item>
            < ImageBg fluid={data.allBackgroundImageJson.edges[0].node.img.childImageSharp.fluid} />
            < ImageBgM fluid={data.allBackgroundImageJson.edges[4].node.img.childImageSharp.fluid} />
          </Carousel.Item>
          <Carousel.Item>
            < ImageBg fluid={data.allBackgroundImageJson.edges[1].node.img.childImageSharp.fluid} />
            < ImageBgM fluid={data.allBackgroundImageJson.edges[5].node.img.childImageSharp.fluid} />
          </Carousel.Item>
          <Carousel.Item>
            < ImageBg fluid={data.allBackgroundImageJson.edges[2].node.img.childImageSharp.fluid} />
            < ImageBgM fluid={data.allBackgroundImageJson.edges[6].node.img.childImageSharp.fluid} />
          </Carousel.Item>
          <Carousel.Item>
            < ImageBg fluid={data.allBackgroundImageJson.edges[3].node.img.childImageSharp.fluid} />
            < ImageBgM fluid={data.allBackgroundImageJson.edges[7].node.img.childImageSharp.fluid} />
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
        {getBgImage(data)}
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
    // background: linear-gradient(
    //     180deg,
    //     rgba(0, 0, 0, 0.2) 0%,
    //     rgba(0, 0, 0, 0.6) 100%
    //   ),
    //   linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

   @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 200vh;
  }
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 99vh;
  overflow: hidden;

   @media screen and (max-width: 480px) {
    height: 100vh;
  }

`

const ImageBg = styled(Img)`
  width: 100%;
  height: 80%;
  -o-object-fit: contain;
  object-fit: contain;
  
  @media screen and (max-width: 480px) {
    display: none;
  }

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
  width: 30vw;
  min-width: 380px; 
  min-height: 60vh;
  margin-top: 50px;
  background: #ffffff;

  @media screen and (max-width: 480px) {
    width: 92vw;
    margin-top: 100vh;
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
  color: #fffff;
  background: #f1ac40;
  border: 1px solid #f1ac40;
  height: 40px;
  text-align: center;

  h3{
      font-weight: 400;
  }
`
const Header = styled.div`
  width: 100%
`

const StepIndicators = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px 0;
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