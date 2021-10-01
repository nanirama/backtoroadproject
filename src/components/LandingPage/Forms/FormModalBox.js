import React from 'react'
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap'
import FormsControler from '../FormsControler'
import bgimg from '../../../assets/images/popup-close.png';
import pdashImg from '../../../assets/images/pop-dash.png';
function FormModelBox(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div>
            <PopupBtn imgUrl={bgimg} onClick={props.onHide}>&nbsp;</PopupBtn>
            {/* <Button onClick={props.onHide}>Close</Button> */}
            </div>
            <Modal.Body className="p-0 m-0">
            <div className="container p-0 m-0 ">
                <PopupBody imgUrl={pdashImg}>
                    <FormsControler/> 
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
    & > p {
        background:#fafafa;
        color:#2860BE !important;
        border-radius:0 5px 0 0;
        font-weight:500 !important;
        width:100%;
        float:left;
        padding:10px 25px
    }
    & > p span{
        width:75px;
        text-align: center;
        height: 30px;
        background-color: #2860BE;
        color:#ffffff;
        font-weight: 600;
        border-radius:5px;
    }
    & > .form_outer{
        width:100%;
        float:left;
        overflow:hidden;
        padding:10px 20px;
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
`;
  export default FormModelBox