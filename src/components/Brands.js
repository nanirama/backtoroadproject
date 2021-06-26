import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Aos from "aos"
import "aos/dist/aos.css"

const Brands = () => {

    useEffect(() => {
        Aos.init({})
    }, [])


    const data = useStaticQuery(graphql`
        query BrandsQuery {
            allBrandsJson {
                edges {
                node {
                    alt
                    name
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

    function getBrands(data) {
        const brandsArray = []
        data.allBrandsJson.edges.forEach((item, index) => {
            brandsArray.push(
                <BrandsRow key={index}>
                    <BrandsBox fluid={item.node.img.childImageSharp.fluid} alt={item.node.alt} />
                </BrandsRow>
            )
        });

        return brandsArray
    }


    return (
        <BrandsContainer>
            <Heading
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                POPULAR BRANDS
            </Heading>
            <BrandsWrapper>
                {getBrands(data)}
            </BrandsWrapper>
        </BrandsContainer>
    )
}

export default Brands

const BrandsContainer = styled.div`
    padding: 4rem calc((100vw - 1300px) / 2);
`

const Heading = styled.h2`
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
    text-align: center;
    margin-bottom: 3rem;
    padding: 0 2rem;
`

const BrandsRow = styled.div`
    line-height: 2;
    width: 130px;
    height: 130px;
    border-radius: 130px;
    position: relative;
    transition: 0.2 ease;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.20);
    box-shadow: 6px 6px 16px 0 rgba(217,210,200,0.51);

    @media screen and (max-width: 400px) {
        height: 120px;
    }
`

const BrandsBox = styled(Img)`
    height: 120px;
    max-width: 120px;
    position: relative;
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    margin: 0 auto;

    &:hover {
      transform: scale(1.1);
    }
`
const BrandsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-gap: 5px;
    justify-items: center;
    overflow-x:auto;
    height: 135px;

    @media screen and (max-width: 400px) {
        grid-template-columns: repeat(24, 1fr);
    }
`;