import React, { useEffect } from "react"
import styled from "styled-components"
import { JourneySoFarData } from "../data/JourneySoFar"


const JourneySoFar = () => {

    return (
        <JourneyContainer>
            <Heading
            >
               OUR JOURNEY SO FAR
      </Heading>
            <Wrapper>
            {JourneySoFarData.map((item, index) => {
                    return (
                        <JourneyBox
                            key={index}
                        >
                            <Icon>{item.icon}</Icon>
                         <TextBox>
                            <Title>
                              {item.title}
                              </Title>
                            <Description>{item.desc}</Description>
                         </TextBox>
                        </JourneyBox>
                    )
                })}
            </Wrapper>
        </JourneyContainer>
    )
}

export default JourneySoFar


const JourneyContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Heading = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2rem);
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 0 2rem;
  font-weight: bold;
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

const JourneyBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.20);
  box-shadow: 2px 2px 16px 8px rgb(245 243 241 / 51%);
  background-color: #00008b; /* For browsers that do not support gradients */
  display: flex;
  justify-content: space-around;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.5rem;
`

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-weight: bold;
`

const Description = styled.p`
  color: #ffffff;
`