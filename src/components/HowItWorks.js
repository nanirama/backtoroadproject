import React, { useEffect } from "react"
import styled from "styled-components"
import { HowItWorksData } from "../data/HowItWorksData"
import Img from "gatsby-image"
import Aos from "aos"
import "aos/dist/aos.css"


const HowItWorks = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <HowItWorksContainer>
        <Heading
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          HOW IT WORKS
      </Heading>
      <Wrapper>
        {HowItWorksData.map((item, index) => {
          return (
            <HowItWorksBox
              key={index}
              data-aos="fade-right"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              <IconWrapper>
                {/* <Icon>{item.icon}</Icon> */}
                <Icon src={item.icon} className="SvgColorClass"/>
              </IconWrapper>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </HowItWorksBox>
          )
        })}
      </Wrapper>
    </HowItWorksContainer>
  )
}

export default HowItWorks


const HowItWorksContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Heading = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 415px) {
    grid-template-columns: 1fr;
  }
`

const HowItWorksBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`
const IconWrapper = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 60px;
  background: #e8f0fc;
  align-self: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Icon = styled.img`
  font-size: 3rem;
  // margin-top: 1rem auto;
  align-self: center;
  width: 75px; 
  height: 95px;
`

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-top: 0.5rem;
`

const Description = styled.p`
  margin-top: 0.5rem;
`