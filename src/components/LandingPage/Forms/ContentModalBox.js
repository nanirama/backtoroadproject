import React from 'react'
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap'
import bgimg from '../../../assets/images/popup-close.png';
function ContentModalBox(props) {
    const onClickHandler = ()=>{
      props.closeShow(false)
    }
    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="popup-modal"
    >
        <div>
        <PopupBtn imgUrl={bgimg} onClick={props.onHide}>&nbsp;</PopupBtn>
        </div>
        <Modal.Body className="p-0 m-0" onClick={onClickHandler}>
        <ContentContainer className="container px-3 py-2">
            {props.children}             
        </ContentContainer>
        </Modal.Body>        
    </Modal>
    );
  }
  export const PopupBtn = styled.button`
    background-color:transparent;
    width:28px;
    height:28px;
    float:right;
    border:none;
    margin:5px;
    background-repeat: no-repeat;
    background-position:center center;
    background-size: 100% 100%;
    background-image: url(${(props)=>props.imgUrl}) !important;
  `
  export const ContentContainer = styled.div`
  & > p{
      width:100%;
      float:left;
      text-align:justify;
      font-size:15px;
      line-height:18px;
      margin-bottom:10px;
      padding-bottom:8px;
  }  
  overflow:hidden;
  float:left;
  margin-bottom:20px;
`
  export default ContentModalBox