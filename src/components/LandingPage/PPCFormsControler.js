import React, { useEffect, useState } from "react"
import { navigate } from 'gatsby';
import { useStateValue } from '../../StateProvider'
import axios from '../../axios';
import styled from 'styled-components';
import StepOne from "./Forms/StepOne"
import StepTwoThree from "./Forms/StepTwoThree"
import formNumBg from '../../assets/images/form-bg-img.png'
import formNumBgM from '../../assets/images/form-bg-img-m.png'
const PPCFormsControler = () =>{
  const urlCurrent = typeof window !== 'undefined' ? window.location.href : '';


  const [{ year, make, model, part, engine, vin, transmission, trim, name, email, state, phone, zip, notes, lead_source, stepOne, stepBtnEnable }, dispatch] = useStateValue();

    const [firstStep, setFirstStep] = useState(true);
    const [secondStep, setSecondStep] = useState(false);
    // const [thirdStep, setThirdStep] = useState(false);
    const [inStack, setInStack] = useState('-');
    const [partsHeading, setPartsHeading] = useState('Parts in Stock');

    useEffect(() => {
      dispatch({
        type: 'ADD_SRC',
        item: urlCurrent,
      });
    },[])


    const stateLogger = () => {
      console.log('Stp Btn Enbale', stepBtnEnable);
      console.log('Stp One', stepOne);
    }

    const onClick = () => {
      stateLogger();
      setFirstStep(false);
      setSecondStep(true);
    }


    const onClickToTwo = () => {
      setInStack(' ✓ In Stock ');
      stateLogger();
      setFirstStep(false);
      setSecondStep(true);
      //setThirdStep(false);
    }

    const onClickToFour = () => {
      stateLogger();
      saveData();
    }
    
    const onClickToOne = () => {
      setFirstStep(true);
      setSecondStep(false);
      //setThirdStep(false);
      // dispatch({
      //   type: 'RESET',
      // });
    }

    const saveData = () => {
      axios
        .post("v1/quotes", {
          "year": year,
          "make": make,
          "model": model,
          "part": part,
          "engine": engine,
          "vin": vin,
          "transmission": transmission,
          "trim": trim,
          "name": name,
          "email": email,
          "state": state,
          "phone": phone,
          "zip": zip,
          "notes": notes,
          "leadSource": lead_source
        })
        .then(resp => {
          navigate('/thank-you/', { state: { resp } });         
        })
        .catch(error => console.log(error.response))
    }

    return(
        <React.Fragment>
            <FormTop className="d-flex justify-content-between align-items-center ftop">
                <div class="col-sm-6 np fnp d-flex justify-content-center"><h4 className="mb-0 text-uppercase">Find A Part Now!</h4></div>
                <div class="col-sm-6 np fnb d-flex fnp justify-content-between align-items-center numcontroller px-md-3 px-sm-1">
                        <span className={`num ${firstStep || secondStep ? "active d-flex justify-content-center align-items-center" : "d-flex justify-content-center align-items-center"}`}><span>1</span></span>
                        {/* <span className={`num ${secondStep || thirdStep ? "active d-flex justify-content-center align-items-center" : "d-flex justify-content-center align-items-center"}`}><span>2</span></span> */}
                        <span className={`num ${secondStep ? "active d-flex justify-content-center align-items-center" : "d-flex justify-content-center align-items-center"}`}><span>2</span></span>
                </div>
            </FormTop>
            {/* <p className="mb-0 w-100 float-left">{make} {model} {part} - in stock<span className="float-right">160</span></p> */}
            <p className="mb-0 w-100 float-left d-flex justify-content-between align-items-center"><b>{partsHeading}</b>
            {inStack && (
              <span className="float-right">{inStack}</span>
            )}</p>
            <div className="form_outer">
                {/* {thirdStep ? <StepTwoThree setInStack={setInStack} setPartsHeading={setPartsHeading} onClickToFour={onClickToFour} onClickToTwo={onClickToTwo} /> : null} */}
                {firstStep ? <StepOne setPartsHeading={setPartsHeading} setInStack={setInStack} onClick={onClick} /> : null}
                {secondStep ? <StepTwoThree setInStack={setInStack} setPartsHeading={setPartsHeading} onClickToFour={onClickToFour} onClickToOne={onClickToOne} /> : null}
            </div>
        </React.Fragment>
    )
}
export const FormTop = styled.div`
line-height: 58px;
span.num {
  @media only screen and (max-width:360px) {
    width:25px;
    height:25px;
    font-size:12px !important;
  }
}

.fnb{
  background-image: url(${formNumBg});
  background-position:center center;
  background-repeat:no-repeat;
  background-size:100% auto;
  line-height: 58px;
  max-width:170px;
  @media only screen and (max-width:1200px) {  
    background-image: url(${formNumBgM});
    background-size:80% auto;
  }
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
h4 {
	font-size: 22px;
	line-height: 58px;
	font-weight: 600;
  padding: 0px 30px;
	width:100%;
  text-align:left;
	color:#000000;
	width:100%;
	color:#000000;
	background-color: #F0AC3F;
	border-radius: 5px 5px 0 0;
	float: left;
  @media only screen and (max-width:575px) {
    font-size: 18px;  
    line-height: 50px;
  }
  @media only screen and (max-width:480px) {
    font-size: 15px; 
    padding: 0px 10px; 
    line-height: 45px;
  }
  @media only screen and (max-width:360px) {
    font-size: 12px; 
    padding: 0px 10px; 
    line-height: 40px;
  }
}
`
export default PPCFormsControler