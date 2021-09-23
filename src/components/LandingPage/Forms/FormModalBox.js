import React from 'react'
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap'
import FormsControler from '../FormsControler'
import bgimg from '../../../assets/images/popup-close.png';
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
                <PopupBody>
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
    & > .popup-top h3{
        font-size:22px;
        font-weight:600;
        line-height:36px;
    }
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