import React from 'react'
import { slide as Menu } from "react-burger-menu";
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Marrow from "../../../assets/images/landing/marrow.png"
import MarrowActive from "../../../assets/images/landing/marrow-active.png"

export default props => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {                
                siteUrl
              }
            }
          }
        `
      )
    console.log('Side Mneu props ', props)
    const siteURL = site.siteMetadata.siteUrl 
    const cpath = props.cpath
    return (
      <>
        <Menu {...props}>          
            <NavMenu>
                <NavLink
                    className="menu-item"
                    to={`${siteURL}${cpath}#findmypart`}
                    img={Marrow} himg={MarrowActive}>
                    Find My Part
                </NavLink>
                <NavLink
                    className="menu-item"
                    to={`${siteURL}${cpath}#bestsellers`}
                    img={Marrow} himg={MarrowActive}>
                    Best Selling Units
                </NavLink>
                <NavLink
                    className="menu-item"
                    to={`${siteURL}${cpath}#howitworks`}
                    img={Marrow} himg={MarrowActive}>
                    How It Works?
                </NavLink>
                <NavLink
                    className="menu-item"
                    to={`${siteURL}${cpath}#whychoose`}
                    img={Marrow} himg={MarrowActive}>
                    Why Choose Us
                </NavLink>
                <NavLink
                    className="menu-item"
                    to={`${siteURL}${cpath}#reviews`}
                    img={Marrow} himg={MarrowActive}>
                    Customer Reviews
                </NavLink>
                <NavLink
                    className="menu-item"
                    to={`${siteURL}${cpath}#faq`}
                    img={Marrow} himg={MarrowActive}>
                    FAQ
                </NavLink>
            </NavMenu>
        </Menu>
      </>
    );
};

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem;
  width: 100%;
  text-decoration: none;
  outline: none !important;
  background-color:#08275c !important;
  margin: 0px;
`

const NavLink = styled(Link)`
  background-position:right 15px center;
background-repeat:no-repeat;
  color:#b1c8ee;
  display: flex;
  width: 100%;
  align-items: center;
  text-decoration: none;
  background-color:#08275c !important;
  height: 100%;
  cursor: pointer;
  padding:.5rem 15px;
  border-bottom:1px solid #2e4f88;
  font-size:14px;
    font-weight:400;
    line-height:30px;
    background-image: url(${props => props.img});
  & :hover{color:#f0ac3f; background-image: url(${props => props.himg});}
`