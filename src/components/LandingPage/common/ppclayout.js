import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { StateProvider } from '../../../StateProvider';
import reducer, { initialState } from '../../../reducer';
import { MenuStyles } from "../css/MenuStyles"
import PpcSideBar from "../common/PpcSideMenu"
import { useSwipeable } from "react-swipeable";

import PpcHeader from './PpcHeader'
import LandingFooter from './Footer'

const PpcLayout = ({ children, cpath }) => {
  const [isOpen, setOpen] = React.useState(false);

  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => setOpen(true)
  });

  return (
    <StaticQuery
    query={graphql`
      query PpcLayoutQuery {
        FooterLogo: file(relativePath: { eq: "landing/f-logo.png" }) {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 128)
            }
        }
        fSecureImage: file(relativePath: { eq: "landing/secure-img.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 180
              placeholder: BLURRED
            )
            }
        }
        fPartnersImage: file(relativePath: { eq: "landing/partners-img.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 295
              placeholder: BLURRED
            )
            }
        }
        HeaderLogo: file(relativePath: { eq: "landing/logo.png" }) {          
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 128)
            }
        }
      }
    `}
    render={data => (	
      <>
      <div className={`wrapper w-100 float-left`}>
      <MenuStyles />
      <SwipeLayer {...handlers} />
        <PpcSideBar
          isOpen={isOpen}
          onStateChange={s => setOpen(s.isOpen)}
          pageWrapId={"inner-wrap"}
          outerContainerId={"outer"}
          cpath={cpath}
        />
        <div id="inner-wrap">
	  	  <StateProvider initialState={initialState} reducer={reducer}>        
          <PpcHeader logoImg = {data.HeaderLogo} cpath = {cpath}/>			  
			  { children }
          <LandingFooter
          logoImg = {data.FooterLogo}
          secureImg = {data.fSecureImage}
          partnersImg={data.fPartnersImage}
          />  
		  </StateProvider>
      </div>
      </div>
      </>
    )}
  />
    
  )
}
const SwipeLayer = styled.div`  
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    float: left;
    position: fixed;
    width: 10px;
    height: 100%;
    z-index: 900;
    top: 80px;
  }
`
export default PpcLayout