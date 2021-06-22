import React, {useRef, useState} from "react"
import { Link } from "gatsby"
import { menuData } from "../../../data/MenuData"
import { css } from "@emotion/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import MenuOpen from "../../../assets/images/landing/menu-open.png"
import MenuClose from "../../../assets/images/landing/menu-close.png"
import Marrow from "../../../assets/images/landing/marrow.png"
import MarrowActive from "../../../assets/images/landing/marrow-active.png"
import { ImPhone } from 'react-icons/im';

const LandingHeader = ({ logoImg }) => {
  let iconStyles = { color: "white", fontSize: "1.5em", marginRight:"25px" };
  const [value, setValue] = useState(false);
  const menuBars = useRef(null);
  const menuBarsSpan = useRef(null);
  const listMenu = useRef(null);

  const focusTextInput=()=>{
      setValue(!value)
      if(!value)
      {
          listMenu.current.classList.add('slide')
          menuBars.current.classList.add('active')
          menuBarsSpan.current.style.backgroundImage = `url(${MenuClose})`;
      }
      else
      {
          listMenu.current.classList.remove('slide') 
          menuBars.current.classList.remove('active') 
          menuBarsSpan.current.style.backgroundImage = `url(${MenuOpen})`;
      }        
  }
  return(
    <header className="w-100 float-left pt-4 pb-3">
      <div className="container">
        <div className="row">
            <div className="col-lg-2 col-sm-3">
                <div className="logo w-auto float-left" itemScope itemType="https://schema.org/Hotel">
                  <Link to="/">
                   <GatsbyImage image={getImage(logoImg)} alt="Back to Roads" itemprop="logo" />
                  </Link>
                </div>              
            </div>
            <div className="col-lg-10 col-sm-9 mobile-right">
                <div className="h_rgt w-auto float-right">
                        <div className="w-auto float-left mnav">
                              <nav>
                              <ul ref={listMenu}>
                                {menuData.map((item, index) => (
                                  <Mli key={index} img={Marrow} himg={MarrowActive}><Link to={item.link} key={index}>{item.title}</Link></Mli>                   
                                ))}
                              </ul>
                                  <div className="menu-bars" ref={menuBars}>                            
                                    <label htmlFor="mobile_menu"><input type="checkbox" name="mobile_menu" id="mobile_menu" onClick={focusTextInput}/>
                                    <span ref={menuBarsSpan} css={css`background-image: url(${MenuOpen});`}></span>
                                    </label>
                                    {/* <Span img={mobileMenu} statev={value}  css={css`background-image: url(${mobileMenu});`}></Span> */}
                                    {/* <span ref={menuBarspan} css={css`background-image: url(${mobileMenu});`}></span> */}
                                  </div>
                            </nav>
                        </div>
                        <a href="tel:18006083868" className="btn1 ph ml-3 " alt="Phone Number of Backtoroads site"><ImPhone style={iconStyles} /><span>1800 608 3868</span><strong>Phone Number of Backtoroads site</strong></a>
                  </div>
            </div>
        </div>
      </div>
    </header>
  )
}
const Mli = styled.li`
  background-image: url(${props => props.img});
  &:hover { background-image: url(${props => props.himg}); }
`;
export default LandingHeader