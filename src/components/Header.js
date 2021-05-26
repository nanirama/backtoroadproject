import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import logoBtr from "../assets/images/logo/logo.svg"

const Header = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
    if (window.location.pathname) {
      setNavbar(window.location.pathname)
    }
    console.log(window.location.pathname)
  }, [])

  return (
    <Nav >
      <NavLink to="/">
        <Icon src={logoBtr} alt="logo"/>
      </NavLink>
      <Bars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  )
}

export default Header

// background: ${({ scrollNav }) => (scrollNav ? "#ffffff" : "transparent")};
const Nav = styled.nav`
  background: #ffffff;
  border: 1px solid rgba(255,255,255,0.20);
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: fixed;
  width: 100%;
  top:0;
`

// color: ${({ scrollNav }) => (scrollNav ? "#000000" : "#ffffff")};  
const NavLink = styled(Link)`
  color: #000000;  
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: clamp(1rem, 1.2rem, 1.5rem);

  @media screen and (max-width: 768px) {
    padding: 0 3.2rem;
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 40px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Icon = styled.img`
  font-size: 3rem;
  align-self: center;
  width: 140px; 
  height: 60px;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`