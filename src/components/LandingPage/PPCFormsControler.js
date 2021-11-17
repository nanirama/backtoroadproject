import React, { useEffect, useState } from "react"
import { navigate } from 'gatsby';
import { useStateValue } from '../../StateProvider'
import arrowIcon from '../../assets/images/landing/arrow.png'
import axios from '../../axios';

import StepOne from "./Forms/StepOne"
import StepTwo from "./Forms/StepTwo"
import StepThree from "./Forms/StepThree"
import StepTwoThree from "./Forms/StepTwoThree"

const PPCFormsControler = () =>{
  const urlCurrent = typeof window !== 'undefined' ? window.location.href : '';


  const [{ year, make, model, part, engine, vin, transmission, trim, name, email, state, phone, zip, notes, lead_source, stepOne, stepTwo, stepThree, stepBtnEnable }, dispatch] = useStateValue();

    const [firstStep, setFirstStep] = useState(true);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);
    const [inStack, setInStack] = useState('');
    const [partsHeading, setPartsHeading] = useState('Parts in Stack');

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

    const onClickToThree = () => {
      stateLogger();
      setSecondStep(false);
      setThirdStep(true);
    }

    const onClickToTwo = () => {
      stateLogger();

      setFirstStep(false);
      setSecondStep(true);
      setThirdStep(false);
    }

    const onClickToFour = () => {
      stateLogger();
      saveData();
    }
    
    const onClickToOne = () => {
      setFirstStep(true);
      setSecondStep(false);
      setThirdStep(false);
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
            <div className="row d-flex justify-content-between popup-top align-items-end" id="findmypart">
                  <div className="col-md-6 col-sm-7 fnp"><h3 className="mb-0 text-uppercase">Find A Part Now!</h3></div>
                  <div className="col-md-6 col-sm-5 d-flex fnp justify-content-between align-items-center numcontroller mb-2">
                        <span className={`num ${firstStep || secondStep || thirdStep ? "active" : ""}`}>1</span>
                        <span className={`num ${secondStep || thirdStep ? "active" : ""}`}>2</span>
                        <span className={`num ${thirdStep ? "active" : ""}`}>3</span>
                  </div>
            </div>
            {/* <p className="mb-0 w-100 float-left">{make} {model} {part} - in stock<span className="float-right">160</span></p> */}
            <p className="mb-0 w-100 float-left d-flex justify-content-between align-items-start"><b>{partsHeading}</b>
            {inStack && (
              <span className="float-right">{inStack}</span>
            )}</p>
            <div className="form_outer">
                {/* {thirdStep ? <StepTwoThree setInStack={setInStack} setPartsHeading={setPartsHeading} onClickToFour={onClickToFour} onClickToTwo={onClickToTwo} /> : null} */}
                {firstStep ? <StepOne setInStack={setInStack} onClick={onClick} /> : null}
                {secondStep ? <StepTwoThree setInStack={setInStack} setPartsHeading={setPartsHeading} onClickToFour={onClickToFour} onClickToOne={onClickToOne} /> : null}
            </div>
        </React.Fragment>
    )
}

export default PPCFormsControler