import React from "react"
import styled from "styled-components"
import { StatsData } from "../data/StatsData"


const Stats = () => {
  return (
    <StatsContainer>
      <Heading
      >
        WHY CHOOSE BTR?
      </Heading>
      <Wrapper>
        {StatsData.map((item, index) => {
          return (
            <StatsBox
              key={index}
            >
              {/* <Icon>{item.icon}</Icon> */}
              <Icon src={item.icon} css={`width: 75px; height: 95px`} className="SvgColorClassChooseBtr" />
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </StatsBox>
          )
        })}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Heading = styled.h1`
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

const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  text-align: center;
  background: #fdfdfd;
`

const Icon = styled.img`
  font-size: 3rem;
  margin-top: 1rem;
`

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
  color: #1c4685;
`

const Description = styled.p``
