import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"

const PartsGallery = () => {

    useEffect(() => {
    Aos.init({})
  }, [])

  const data = useStaticQuery(graphql`
    query TripsSectionQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            to
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

  function getTrips(data) {
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(
        <ProductCard
          key={index}
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <ProductImg
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <TextWrap>
              <ProductTitle>{item.node.name}</ProductTitle>
              <ProductYear>Year: {item.node.name}</ProductYear>
              <ProductMake>Make: {item.node.name}</ProductMake>
              <ProductModel>Model: {item.node.name}</ProductModel>
              <ProductSpec>Specification: {item.node.name}</ProductSpec>
              <ProductStatus>Status: {item.node.name}</ProductStatus>
              <GalleryButton
                to={item.node.to}
                primary="true"
                round="true"
               >
                Get Quote Now
                </GalleryButton>
            </TextWrap>
          </ProductInfo>
        </ProductCard>
      )
    })
    return tripsArray
  }

  return (
      <PartsContainer>
          <ProductWrapper>{getTrips(data)}</ProductWrapper>
      </PartsContainer>
  )
}

export default PartsGallery

const PartsContainer = styled.div`
  width: 70vw;
  height: 100vh
  background: lightgrey;
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 1rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 340px;
  height: 360px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;

  @media screen and (max-width: 400px) {
    width: 150px;
    height: 200px;
  }

`
const ProductImg = styled(Img)`
  height: 220 !important;
  max-width: 100%;
  position: relative;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: start;
  position: absolute;
  top: 225px;
  width: 340px;
  height: 140px;

  border: solid thin black;

   @media screen and (max-width: 400px) {
    width: 150px;
    height: 200px;
  }
`

const ProductTitle = styled.div`
  position: absolute;
  font-weight: 400;
  font-size: 1rem;
  top: 2px;
  left: 5px;

   @media screen and (max-width: 400px) {
    width: 150px;
    height: 200px;
  }
`

const ProductYear = styled.div`
  position: absolute;  
  font-weight: 300;
  font-size: 0.75rem;
  top: 30px;
  left: 5px;

   @media screen and (max-width: 400px) {
    width: 150px;
    height: 200px;
  }
`

const ProductMake = styled.div`
  position: absolute;  
  font-weight: 300;
  font-size: 0.75rem;
  top: 30px;
  left: 170px;

   @media screen and (max-width: 400px) {
    width: 150px;
    height: 200px;
  }
`

const ProductModel = styled.div`
  position: absolute;  
  font-weight: 300;
  font-size: 0.75rem;
  top: 50px;
  left: 5px;

   @media screen and (max-width: 400px) {
    width: 150px;
    height: 200px;
  }
`

const ProductSpec = styled.div`
  position: absolute;  
  font-weight: 300;
  font-size: 0.75rem;
  top: 70px;
  left: 5px;

   @media screen and (max-width: 400px) {
    width: 150px;
    height: 200px;
  }
`
const ProductStatus = styled.div`
  position: absolute;  
  font-weight: 300;
  font-size: 0.75rem;
  top: 105px;
  left: 5px;

   @media screen and (max-width: 400px) {
    width: 150px;
    height: 200px;
  }
`

export const GalleryButton = styled(Link)`
  background: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")};
  white-space: nowrap;
  padding: 10px 32px;
  color: #fff;
  font-size: 10px;
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  position: absolute;
  top: 95px;
  left: 201px;
  font-size: 10px;

  &:hover {
    background: ${({ primary }) => (primary ? "#077BF1" : "#F26A2E")};
    transform: translateY(-2px);
  }

   @media screen and (max-width: 400px) {
    width: 150px;
    height: 200px;
  }
`
