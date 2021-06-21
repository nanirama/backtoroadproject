import React from 'react'
import ImageBanner from '../components/ImageBanner'
import Layout from "../components/layout"
import styled from 'styled-components'

const Parts = () => {
    return (
        <Layout>
            {/* Pass the image as props */}
            <PartsContainer>

            <ImageBanner />
            
            <Intro>
                <p>
                    We carry huge stock Quality Auto Parts in our store. Auto Body Parts stock comprises of doors, bonnets, wind sheilds, shock absorbers, front grills, back cabins, roofs and all other body parts. We have in our stock body parts of all popular models including AMC, Acura, Ford, BMW etc...
                </p>
            </Intro>
            </PartsContainer>

        </Layout>
    )
}

export default Parts

const PartsContainer = styled.div`
    width: 100%;
    height: 100%;
`

const Intro = styled.div`
  height: 30vh;
  padding: 2rem calc((100vw - 1300px) / 2);
  margin: 1rem auto;
  background-color: #fdfdfd; /* For browsers that do not support gradients */
  background-image: linear - gradient(#fdfdfd, #ffffff);
  border: 10px solid rgba(255, 255, 255, 0.20);
  box-shadow: 2px 2px 16px 8px rgba(217, 210, 200, 0.51);
`