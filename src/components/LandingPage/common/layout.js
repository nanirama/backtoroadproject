import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StateProvider } from '../../../StateProvider';
import reducer, { initialState } from '../../../reducer';
import LandingHeader from './Header'
import LandingFooter from './Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
//import { Styles } from '../css/style';
import '../css/style.css'

const Layout = ({ children }) => {
  return (
    <StaticQuery
    query={graphql`
      query LayoutQuery {
        FooterLogo: file(relativePath: { eq: "landing/f-logo.png" }) {
              childImageSharp {
                gatsbyImageData(
                  width: 140
                  placeholder: BLURRED
                )
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
            gatsbyImageData(
              width: 140
              placeholder: BLURRED
            )
          }
        }
      }
    `}
    render={data => (	
      <>
      <div className={`wrapper w-100 float-left`}>
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
      </>
    )}
  />
    
  )
}

export default Layout