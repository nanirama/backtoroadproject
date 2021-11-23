import React from 'react'
import styled from 'styled-components';
import { Modal } from 'react-bootstrap'
import FormsControler from '../FormsControler'
import PPCFormsControler from '../PPCFormsControler'
import bgimg from '../../../assets/images/popup-close.png';
import pdashImg from '../../../assets/images/pop-dash.png';

import formNumBgM from '../../../assets/images/form-bg-img-m.png'
function FormModelBox(props) {
    const { action } = props
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div>
            <PopupBtn imgUrl={bgimg} onClick={props.onHide}>&nbsp;</PopupBtn>
            </div>
            <Modal.Body className="p-0 m-0">
            <div className="container p-0 m-0 ">
                <PopupBody imgUrl={pdashImg}>
                {action==='ppc' ? <PPCFormsControler/>  : <FormsControler/> }
                </PopupBody>                
            </div>
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
  export const PopupBody = styled.div`  
  h4 {
    @media only screen and (max-width:575px) {  
        font-size:12px !important;
        line-height:40px !important;
        padding: 0px 7px !important;
      }    
  }
  & > p > b{
    color: #2860BE !important;
    font-size: 18px;
    line-height: 26px !important;
    font-weight: 500;
    padding: 0px 10px;
  }
    & > p {
        background:#fafafa;
        color:#2860BE !important;
        border-radius:0 5px 0 0;
        font-weight:500 !important;
        width:100%;
        float:left;
        min-height:60px;
        padding:10px 25px 10px 40px;
    }
    & > p span{
        min-width: 100px !important;
        width: auto !important;
        text-align: center;
        height: 30px;
        margin-left: 10px !important;
        padding: 0px 10px;
        background-color: #2860BE;
        color: #ffffff;
        font-size: 14px !important;
        font-weight: 600;
        border-radius: 5px;
    }
    & > .form_outer{
        width:100%;
        float:left;
        overflow:hidden;
        padding:10px 20px 30px 40px;
    }
    & > .popup-top{
        padding:2px 10px;
        margin:4px 0px;
    }
    & > .popup-top span.num:nth-child(1):before{
        content:'';
        top:18px;
        width:200%;
        height:1px;
        border:1px dashed;
        right:-200%;
        color:#fefefe;
    }
    .ftop{
        margin:0px 20px;
    }
    .ftop h4 {
        font-size: 19px;
        line-height: 58px;
        font-weight: 600;
        padding: 0px 15px;
        width:100%;
        color:#000000;
        background-color: #F0AC3F;
        border-radius: 5px 5px 0 0;
        float: left;
    }
    .form_outer .btn2 {
        border: 0;
        font-size: 13px !important;
        text-align: center;
        width: 100%;
        background-color: #F0AC3F;
        font-weight: 600;
        border: 1px solid #F0AC3F;
        line-height: 45px !important;
        text-transform: uppercase;
    }
    .form_outer .btn-outer-new {
        font-size: 13px !important;
        text-align: center;
        width: 100%;
        color: #F0AC3F;
        border-radius: 5px;
        text-transform: uppercase;
        background-color: #ffffff;
        border: 1px solid #F0AC3F;
        font-weight: 600;
        height: 45px !important;
        line-height: 45px !important;
    }
    @media only screen and (max-width:599px) {
        & > .popup-top h3{
            font-size:18px;
            font-weight:600;
            line-height:36px;
        }
        & > .fnp{ padding:0px !important; margin:0px !important;}
    }
    @media only screen and (max-width:440px) {
        & > .popup-top h3{
            font-size:18px;
            font-weight:600;
            line-height:36px;
        }
    }
    @media only screen and (max-width:359px) {
        & > .popup-top h3{
            font-size:14px;
            font-weight:600;
            line-height:36px;
        }
    }
    @media only screen and (min-width:441px) {
        & > .popup-top h3{
            font-size:22px;
            font-weight:600;
            line-height:56px;
        }
    }
    & > .popup-top .numcontroller {
        padding:0px !important;
        margin:6px 0px !important;
        background-image: url(${(props)=>props.imgUrl}) !important;
        background-repeat: repeat-x;
        background-position: center left;
    }
    & > .popup-top span.num{ margin:0px 0px 0px 0px !important;}
    & > .form_outer .btn1{
        border: 0;
        width: 195px !important;
        text-align: center;
        padding: 0 25px !important;
    }
    & > .popup-top span.num::before{
        display:none;
        width:0px;
    }
    .fnb{
        background-image: url(${formNumBgM});
        background-position:center center;
        background-repeat:no-repeat;
        line-height: 58px;
        background-size:90% auto;
        @media only screen and (max-width:575px) {  
          line-height: 40px !important;
        }
        @media only screen and (max-width:479px) { 
          padding-left:20px; 
          line-height: 40px !important;
        }
        @media only screen and (max-width:440px) { 
          padding-left:20px; 
          line-height: 40px !important;
        }
      }
`;
  export default FormModelBox