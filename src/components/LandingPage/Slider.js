import React, { Component } from 'react';
import Img from "gatsby-image"
import Carousel from 'react-elastic-carousel';
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: transparent;
  width: 100%;
  height: 146vh;
  margin: 0px;
`;
const Slider = ({data}) => {
    console.log('sliders ', data)
    return (
        <>
        <Carousel
          enableAutoPlay={true}
          itemsToShow={1}
          showArrows={false}
          pagination={true}
          enableSwipe={false}
        >
            {data.map((item,index) => (              
                <Item key={index}>
                   <img src={item.featuredImage.node.localFile.childImageSharp.fluid.base64} className="img-fluid"/>
                    {/* <GatsbyImage image={getImage(item.featuredImage.node.localFile)}/> */}
                </Item>
            ))}      
        </Carousel>      
      </>
    )
}
export default Slider
  