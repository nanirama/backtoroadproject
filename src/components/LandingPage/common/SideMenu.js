import React from 'react'
import { slide as Menu } from "react-burger-menu";
import { menuData } from "../../../data/MenuData"
import { Link } from "gatsby"
import styled from "styled-components"
import Marrow from "../../../assets/images/landing/marrow.png"
import MarrowActive from "../../../assets/images/landing/marrow-active.png"

export default props => {
    return (
      <>
        <Menu {...props}>          
            <NavMenu>
              {menuData.map((item, index) => (
                  <NavLink className="menu-item" key={index} to={item.link} img={Marrow} himg={MarrowActive}>
                      {item.title}
                  </NavLink>
              ))}
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