import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { MenuStyles } from "../css/MenuStyles"
import SideBar from "../common/SideMenu"
import { useSwipeable } from "react-swipeable";
import { StateProvider } from '../../../StateProvider';
import reducer, { initialState } from '../../../reducer';

import LandingHeader from './Header'
import LandingFooter from './Footer'

const Layout = ({ children }) => {
  const [isOpen, setOpen] = React.useState(false);

  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => setOpen(true)
  });

  return (
    <StaticQuery
    query={graphql`
      query LayoutQuery {
        FooterLogo: file(relativePath: { eq: "landing/f-logo.png" }) {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 128)
            }
        }
        fSecureImage: file(relativePath: { eq: "landing/secure-img.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 178)
          }
        }
        fPartnersImage: file(relativePath: { eq: "landing/partners-img.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 295)
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
      <div className={`wrapper w-100 float-left`} id="outer">
      <MenuStyles />
        <SwipeLayer {...handlers} />
        <SideBar
          isOpen={isOpen}
          onStateChange={s => setOpen(s.isOpen)}
          pageWrapId={"inner-wrap"}
          outerContainerId={"outer"}
        />
         <div id="inner-wrap">
	  	  <StateProvider initialState={initialState} reducer={reducer}>        
            <LandingHeader logoImg = {data.HeaderLogo}/>			  
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
export default Layout