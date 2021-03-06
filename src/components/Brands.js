import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import Img from 'gatsby-image'
import styled, { css } from 'styled-components/macro'
import Aos from "aos"
import "aos/dist/aos.css"

const Brands = () => {

    useEffect(() => {
        Aos.init({});
    }, [])

    const scrollref = React.createRef();

    const nextSlide = () => {
        scrollref.current.scrollLeft += 125;
    }

    const prevSlide = () => {
        scrollref.current.scrollLeft += -125;
    }

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
                <BrandsBoxWrapper>
                    <BrandsBox key={index} fluid={item.node.img.childImageSharp.fluid} alt={item.node.alt} />
                </BrandsBoxWrapper>
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

            <BrandsWrapperFlex>
                <SliderButtonsLeft>
                    <PrevArrow onClick={prevSlide} />
                </SliderButtonsLeft>
                <BrandsRowFlex ref={scrollref}>
                    {getBrands(data)}
                </BrandsRowFlex>
                <SliderButtonsRight>
                    <NextArrow onClick={nextSlide} />
                </SliderButtonsRight>
            </BrandsWrapperFlex>

        </BrandsContainer>
    )
}

export default Brands

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

const BrandsBox = styled(Img)`
    height: 125px;
    width: 125px;
    border-radius: 90px;
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      transform: scale(1.1);
    }
`

const SliderButtonsLeft = styled.div`
    position: absolute;
    bottom: 30%;
    left: 0;
    display: flex;
    z-index: 10;
`

const SliderButtonsRight = styled.div`
    position: absolute;
    bottom: 30%;
    right: 0;
    display: flex;
    z-index: 10;
`

const BrandsWrapperFlex = styled.div`
    position: relative;
`;

const BrandsRowFlex = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    overflow-y: hidden;
    /* width: 90%; */
    margin: 0 50px;

`;

const BrandsBoxWrapper = styled.div`
    height: 125px;
    width: 125px;
    border-radius: 90px;
    margin: 0 10px;
`; 