import React from 'react'
import styled from 'styled-components'
import IconChat from '../assets/Icons/chat.svg'


const FloatingButtonMessage = () => {
    return (
        <FbMessageContainer>
            <Icon src={IconChat} alt="" className="SvgColorClassFb"/>
        </FbMessageContainer>
    )
}

export default FloatingButtonMessage

const FbMessageContainer = styled.div`
   bottom: 85px;
   right: 20px;
   width: 60px;
   height: 60px;
   border-radius: 30px;
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   background: #f1ac40;
   z-index: 999;
`

const Icon = styled.img`
  font-size: 3rem;
  align-self: center;
  width: 45px; 
  height: 40px;

  &:hover {
    transform: scale(1.2);
  }
`