import React, { useState } from "react"
import { useStateValue } from '../../StateProvider'


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
            <div className="row d-flex justify-content-between" id="findmypart">
                  <div className="col-sm-6"><h3 className="mb-0 text-uppercase">Find Part Form</h3></div>
                  <div className="col-sm-6 d-flex justify-content-between align-items-center numcontroller">
                        <span className={`num ${firstStep ? "active" : ""}`}>1</span>
                        <span className={`num ${secondStep ? "active" : ""}`}>2</span>
                        <span className={`num ${thirdStep ? "active" : ""}`}>3</span>
                  </div>
            </div>
            <p className="mb-0 w-100 float-left">Parts in Stock <span className="float-right">200</span></p>
            <div className="form_outer">
                {firstStep ? <StepOne /> : null}
                {secondStep ? <StepTwo /> : null}
                {thirdStep ? <StepThree /> : null}
                <div className="button_outer">
                    {stepOne !== '' ? <input type="submit" className="btn1" value="Find my part now" onClick={onClick} /> : null}
                    {stepTwo !== '' ? <input type="submit" className="btn1" value="Next step" onClick={onClickToThree} /> : null}
                    {stepThree !== '' ? <input type="submit" className="btn1" value="Get Me a price" onClick={onClickToOne} /> : null}
                    {/* <input type="button" className="btn1" value="Nest Step" /> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormsControler