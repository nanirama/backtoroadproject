import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import AboutImg from "../assets/images/About-BTR.webp"

const AboutBtr = () => {

    const pageData = {
        'title' : "ABOUT BTR",
        'content': "We deliver quality used parts to all 50 states and 5 self-governing " +
                    "territories of the USA and all over Canada. We work on a live inventory with auto parts " +
                    "updates instantly according to availability, so we can ensure a fast shipment. With our tie-up " +
                    "shipping carriers all over the country, even if the parts you are looking for is not available " +
                    "nearby you or in your state, we ensure quick delivery to your residence or to your mechanic"
    }

    return (
        <Container>
            <Wrapper>
                <TextBox>
                    <TextBoxWrapper>
                        <Heading>{pageData.title}</Heading>
                        <Content>
                            {pageData.content}
                        </Content>
                        <Button to="/">READ MORE</Button>
                    </TextBoxWrapper>
                </TextBox>
                <ImageWrapper>
                    <img src={AboutImg} alt=""/>
                </ImageWrapper>
            </Wrapper>
        </Container>
    )
}

export default AboutBtr


const Container = styled.div`
    min-height: 60vh;
    width: 100vw;
    padding: 2rem calc((100vw - 1300px) / 2);
`

const Wrapper = styled.div`
    height: 100%;
    background-color: #fdfdfd; /* For browsers that do not support gradients */
    background-image: linear-gradient(#fdfdfd, #ffffff);
    border: 10px solid rgba(255,255,255,0.20);
    box-shadow: 2px 2px 16px 8px rgba(217,210,200,0.51);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    z-index: 3 !important;
`
    
const TextBox = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
	align-items: center;
	justify-content: space-around;

    @media screen and (max-width: 1099px) {
        width: 80%;
    }
`

const TextBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    height: 100%;
`

const ImageWrapper = styled.div`
    width: 45%;
    height: 100%;
    object-fit: cover;

    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1099px) {
        width: 80%;
    }
`

const Heading = styled.h2`
    margin: 1.5rem 0rem;
    font-size: clamp(1.2rem, 5vw, 2rem);
    font-weight: bold;
`

const Content = styled.div`
    margin: 1.5rem 0rem;
`

const Button = styled(Link)`
    background: #F26A2E;
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