import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useStateValue } from '../../StateProvider'
import arrowIcon from '../../assets/images/landing/arrow.png'


import StepOne from "./Forms/StepOne"
import StepTwo from "./Forms/StepTwo"
import StepThree from "./Forms/StepThree"

const FormsControler = ()=>{
    const [{ year, make, model, part, stepOne, stepTwo, stepThree }, Dispatch] = useStateValue();

    const [firstStep, setFirstStep] = useState(true);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);

    const onClick = () => {
        setFirstStep(false);
        setSecondStep(true);
      }
      const onClickToThree = () => {
        setSecondStep(false);
        setThirdStep(true);
      }
      const onClickToOne = () => {
        setThirdStep(false);
        setFirstStep(true);
      }

    return(
        <React.Fragment>
            <div className="row d-flex justify-content-between popup-top" id="findmypart">
                  <div className="col-sm-6"><h3 className="mb-0 text-uppercase">Find Part Form</h3></div>
                  <div className="col-sm-6 d-flex justify-content-between align-items-center numcontroller">
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
                <div className="button_outer">
                    {stepOne !== '' ? <Input img={arrowIcon} className="btn1 border2" value="NEXT STEP" onClick={onClick} /> : null}
                    {stepTwo !== '' ? <Input img={arrowIcon} className="btn1" value="NEXT STEP" onClick={onClickToThree} /> : null}
                    {stepThree !== '' ? <Input img={arrowIcon} className="btn1" value="GET PRICE" onClick={onClickToOne} /> : null}
                    {/* <input type="button" className="btn1" value="Nest Step" /> */}
                </div>
            </div>
        </React.Fragment>
    )
}
const Input = styled.input.attrs({ 
  type: 'submit',
  value: 'NEXT STEP'
})`
     background-image: url(${props => props.img});
`;
export default FormsControler