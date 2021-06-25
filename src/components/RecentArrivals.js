import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import calenderIcon from '../assets/images/calendar.svg'
import carIcon from '../assets/images/car_1.svg'
import { Link } from "gatsby"

const RecentArrivals = () => {

    const arrivalArraySingle = []
    const data = useStaticQuery(graphql`
      query RecentArrivalQuery {
        allRecentArrivalsDataJson {
            edges {
            node {
                date
                desc
                title
                stockNum
                img {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
            }
            }
        }
      }
    `)

    function getArrivals(data) {
        const arrivalArray = []

        data.allRecentArrivalsDataJson.edges.forEach((item, index) => {
            arrivalArray.push(
                <RecentArrivalsBox>
                    <RecentArrivalsImage fluid={item.node.img.childImageSharp.fluid} alt=""/>
                    <RecentArrivalsTitle>{item.node.title}</RecentArrivalsTitle>
                    <RecentArrivalsDesc>{item.node.desc}</RecentArrivalsDesc>
                    <RecentArrivalsLabelWrapper>
                      <RecentArrivalsLabelDate> 
                          <Icon src={calenderIcon} alt=""/>
                          <p>{item.node.date}</p>
                      </RecentArrivalsLabelDate>
                      <RecentArrivalsLabelNum>
                          <Icon src={carIcon} alt="" />
                          <p>{item.node.stockNum}</p>
                      </RecentArrivalsLabelNum>
                    </RecentArrivalsLabelWrapper>
                </RecentArrivalsBox>
            )


        });

        arrivalArraySingle.push(
          <RecentArrivalsBox>
            <RecentArrivalsImage fluid={data.allRecentArrivalsDataJson.edges[0].node.img.childImageSharp.fluid} alt="" />
            <RecentArrivalsTitle>{data.allRecentArrivalsDataJson.edges[0].node.title}</RecentArrivalsTitle>
            <RecentArrivalsDesc>{data.allRecentArrivalsDataJson.edges[0].node.desc}</RecentArrivalsDesc>
            <RecentArrivalsLabelWrapper>
              <RecentArrivalsLabelDate>
                <Icon src={calenderIcon} alt="" />
                <p>{data.allRecentArrivalsDataJson.edges[0].node.date}</p>
              </RecentArrivalsLabelDate>
              <RecentArrivalsLabelNum>
                <Icon src={carIcon} alt="" />
                <p>{data.allRecentArrivalsDataJson.edges[0].node.stockNum}</p>
              </RecentArrivalsLabelNum>
            </RecentArrivalsLabelWrapper>
          </RecentArrivalsBox>
        )

      return arrivalArray
    }


    return (
        <RecentArrivalsContainer>
            <RecentArrivalsWrapper>
                <Heading>
                    Recent Arrivals
                </Heading>
                <RecentArrivalsRow>
                  <DeskTopView>
                    {getArrivals(data)}
                  </DeskTopView>
                  <MobileView>
                    {arrivalArraySingle}
                  </MobileView>
                </RecentArrivalsRow>

                <RecentArrivalsRow>
                    <Button>VIEW MORE</Button>
                </RecentArrivalsRow>
            </RecentArrivalsWrapper>
        </RecentArrivalsContainer>
    )
}

export default RecentArrivals


const RecentArrivalsContainer = styled.div`
  width:100vw;
  padding: 2rem calc((100vw - 1300px) / 2);
`

const RecentArrivalsWrapper = styled.div`
  height: 100%;
  background-color: #fdfdfd; /* For browsers that do not support gradients */
  border: 1px solid rgba(255,255,255,0.20);
  box-shadow: 2px 2px 16px 8px rgba(217,210,200,0.51);
  padding: 1rem;
`

const Heading = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2rem);
  text-align: center;
  margin: 2rem 0;
  padding: 0 2rem;
  font-weight: bold;
  text-transform: uppercase;
`
const ViewMoreButton = styled.button`
  font-size: clamp(1.5rem, vw, 2rem);
  text-align: center;
  margin: 2rem auto;
  padding: 0 2rem;
  font-weight: bold;
`

const RecentArrivalsRow = styled.div`
  display: flex;
  width: 100%;
  height:100%;
  justify-content: space-around;
`

const RecentArrivalsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // border: 1px solid black;
  width: 30%;
  height: 420px;

  @media screen and (max-width: 415px) {
    width: 100%;
  }
  
`
const RecentArrivalsImage = styled(Img)`
  width: 100%;
  height: 260px;

`
const RecentArrivalsTitle = styled.h4`
  text-align: start;
  padding: 10px 10px 0 10px;
  font-weight: bold;
`
const RecentArrivalsDesc = styled.p`
  text-align: start;
  padding: 10px;
  color:#bdbdbd;
`
const RecentArrivalsLabelWrapper = styled.p`
  display: flex;
  width: 100%;
  margin: 0;
  border-top: 1px solid lightgray;
`
const RecentArrivalsLabelDate = styled.div`
  align-self: flex-start;
  width: 50%;
  display: flex;
  flex-direction: row;
  p{
      padding: 2px;
      margin: 0;
  }

  @media screen and (max-width: 376px) {
    p {
      font-size: 12px;
      margin: 4px 0;
    }
  }
`
const RecentArrivalsLabelNum = styled.div`
  align-self: flex-end;
  width: 50%;
  display: flex;
  flex-direction: row;
  border-left: 1px solid lightgray;
  
  p{
      padding: 2px;
      margin: 0;
  }

  @media screen and (max-width: 376px) {
    p {
      font-size: 12px;
      margin: 4px 0;
    }
  }
`

const Icon = styled.img`
  width: 25px;
  height: 20px;
  padding: 2px;
  margin: 5px;
`

const DeskTopView = styled.div`
  display: block;
  display: flex;
  width: 100%;
  height:100%;
  justify-content: space-around;

  @media screen and (max-width: 415px) {
    display: none;
  }
`

const MobileView = styled.div`
  display: none;
  
  @media screen and (max-width: 415px) {
    display: block;
    width: 100%;
    display: flex;
    width: 100%;
    height:100%;
    justify-content: space-around;
  }
`

const Button = styled(Link)`
    background: #f1ac40;
    white-space: nowrap;
    padding: 10px 32px;
    color: #fff;
    font-size: ${({ big }) => (big ? "20px" : "16px")};
    outline: none;
    border: none;
    width: 185px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: none;
    margin: 1rem 0rem;

    &:hover {
      background:"#077BF1";
      transform: translateY(-2px);
    }
`