import React from 'react'
import styled from 'styled-components'
import IconPhone from '../assets/Icons/phone.svg'

const FloatingButtonCall = () => {
    return (
        <FbCallContainer>
            <a href="tel:18006083868">
                <Icon src={IconPhone} alt="" className="SvgColorClassFb"/>
            </a>
        </FbCallContainer>
    )
}

export default FloatingButtonCall

const FbCallContainer = styled.div`
   bottom: 20px;
   right: 20px;
   width: 60px;
   height: 60px;
   border-radius: 30px;
   background: #f1ac40;
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 999;
`

const Icon = styled.img`
  font-size: 3rem;
  align-self: center;
  width: 45px; 
  height: 40px;

  &:hover {
    transform: scale(1.1);
  }
`