import React from 'react'
import { slide as Menu } from "react-burger-menu";
import { menuData } from "../data/MenuData"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../assets/images/logo/logo.svg"

export default props => {
    return (
      <>
        <Menu {...props}>
          <Link to="/">
            <NavHeaderIcon>
              <NavHeaderIconWrapper>
                <Icon src={logo} alt="" />
              </NavHeaderIconWrapper>
            </NavHeaderIcon>
          </Link>
            <NavMenu>
              {menuData.map((item, index) => (
                  <NavLink className="menu-item" key={index} to={item.link}>
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
  padding: 1rem 1rem;
  width: 100%;
  text-decoration: none;
  outline: none !important;
  background: #ffffff;
`

const NavLink = styled(Link)`
  color: #373a47;
  display: flex;
  width: 100%;
  align-items: center;
  text-decoration: none;
  background: #ffffff;
  // padding: 1.15 2rem;
  height: 100%;
  cursor: pointer;
  font-size: clamp(1rem, 1.1rem, 1.3rem);

  @media screen and (max-width: 768px) {
    padding: 1.15 2rem;
  }
`

const NavHeaderIcon = styled.div`
  color: #fff;
  width: 100%;
  height: fit-content;
  text-decoration: none;
  outline: none !important;
  // background: linear-gradient(130.44deg, #f84663 2.32%, #fc6352 102.62%);
  // box-shadow: 6px 6px 16px 0 rgba(240, 88, 114, 0.51);
  // border: 1px solid rgba(255, 255, 255, 0.20);
`

const NavHeaderIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
  outline: none !important;
`

const Icon = styled.img`
  font-size: 3rem;
  align-self: flex-start;
  width: 160px; 
  height: 80px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`