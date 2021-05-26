import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ImageBanner = (props) => {
    return (
        <IbContainer>
            {/* <ImageBg fluid={data.allBackgroundImageJson.edges[0].node.img.childImageSharp.fluid} /> */}
        </IbContainer>
    )
}

export default ImageBanner

const IbContainer = styled.div`
  width: 100%;
  height: 30vh;
  background: blue;
`

const ImageBg = styled(Img)`
  
`