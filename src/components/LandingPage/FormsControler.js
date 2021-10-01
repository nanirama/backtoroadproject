import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useStateValue } from '../../StateProvider'
import arrowIcon from '../../assets/images/landing/arrow.png'
import axios from '../../axios';

import StepOne from "./Forms/StepOne"
import StepTwo from "./Forms/StepTwo"
import StepThree from "./Forms/StepThree"
import StepFour from "./Forms/StepFour"

const FormsControler = ()=>{
  const [{ year, make, model, part, engine, vin, transmission, trim, name, email, state, phone, zip, notes, lead_source, stepOne, stepTwo, stepThree, stepFour }, dispatch] = useStateValue();

    const [firstStep, setFirstStep] = useState(true);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);
    const [fourthStep, setFourthStep] = useState(false);
    const [btnValue, setBtnValue] = useState('NEXT STEP');

    const onClick = () => {
      setFirstStep(false);
      setSecondStep(true);
    }

    const onClickToThree = () => {
      setSecondStep(false);
      setThirdStep(true);
    }

    const onClickToFour = () => {
      //Make the POST request to save the data
      saveData();
    }
    
    const onClickToOne = () => {
      setFourthStep(false);
      setFirstStep(true);

      dispatch({
        type: 'RESET',
        // item: e.value,
      });
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
          console.log("Success", resp.status);
          setThirdStep(false);
          setFourthStep(true);

          dispatch({
            type: 'ADD_STEP_FOUR',
            item: 'val',
          });

        })
        .catch(error => console.log(error.response))
    }

    return(
        <React.Fragment>
            <div className="row d-flex justify-content-between popup-top align-items-end" id="findmypart">
                  <div className="col-md-6 col-sm-7 fnp"><h3 className="mb-0 text-uppercase">Find Part Form</h3></div>
                  <div className="col-md-6 col-sm-5 d-flex fnp justify-content-between align-items-center numcontroller mb-2">
                        <span className={`num ${firstStep ? "active" : ""}`}>1</span>
                        <span className={`num ${secondStep ? "active" : ""}`}>2</span>
                        <span className={`num ${thirdStep ? "active" : ""}`}>3</span>
                  </div>
            </div>
            <p className="mb-0 w-100 float-left">Parts in Stock <span className="float-right">160</span></p>
            <div className="form_outer">
                {firstStep ? <StepOne /> : null}
                {secondStep ? <StepTwo /> : null}
                {thirdStep ? <StepThree /> : null}
                {fourthStep ? <StepFour /> : null}
                <div className="button_outer">
                    {stepOne !== '' ? <Input img={arrowIcon} className="btn1" value="NEXT STEP" onClick={onClick} /> : null}
                    {stepTwo !== '' ? <Input img={arrowIcon} className="btn1" value="NEXT STEP" onClick={onClickToThree} /> : null}
                    {stepThree !== '' ? <Input img={arrowIcon} className="btn1" value="GET PRICE" onClick={onClickToFour} /> : null}
                    {stepFour !== '' ? <Input img={arrowIcon} className="btn1" value="Return Home" onClick={onClickToOne} /> : null}
                </div>
            </div>
        </React.Fragment>
    )
}

const Input = styled.input.attrs({ 
  type: 'submit',
  value: 'NEXT'
})`
   background-image: url(${props => props.img});
`;
export default FormsControler