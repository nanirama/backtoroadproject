import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Aos from "aos"
import "aos/dist/aos.css"
import Select from 'react-select'
import { Button } from "../Button"
import axios from '../../axios'

import { useStateValue } from '../../StateProvider'

const StepTwo = () => {
    useEffect(() => {
        Aos.init({});
        dispatch({
            type: 'ADD_STEP_ONE',
            item: ''
        });
        fetchTrims();
    }, [])

    const [{ year, make, model, part }, dispatch] = useStateValue()
    const [trims, setTrims] = useState();
    const [dummy, setDummy] = useState();
    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white', color: '#000000', width: '100%', borderRadius: '2px', alignItems: 'left', }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                alignItems: 'left !important',
                color: '#000000'
            };
        },
    };

    const fetchTrims = (e) => {
        console.log('YEAR ', year, 'SELECTED MODEL ', model);
        axios
            .get("v1/trim/" + year + "/" + model)
            .then(resp => {
                const options = resp.data.map(d => ({
                    "value": d,
                    "label": d
                }))
                setTrims(options);
            })
            .catch(error => console.log(error.response))
    }

    const optionsEngine = [
        { value: '1', label: '3 Cylinder' },
        { value: '2', label: '4 Cylinder' },
        { value: '3', label: '5 Cylinder' },
        { value: '4', label: '6 Cylinder' },
        { value: '5', label: '8 Cylinder' },
        { value: '6', label: '10 Cylinder' },
        { value: '7', label: '12 Cylinder' },
        { value: '8', label: 'Other, Not listed here' },
        { value: '9', label: "I'm not sure" }
    ]

    const optionsTransmission = [
        { value: '1', label: '2 Wheel Drive, Automatic' },
        { value: '2', label: '4 Wheel Drive, Automatic' },
        { value: '3', label: '2 Wheel Drive, Manual' },
        { value: '4', label: '4 Wheel Drive, Manual' },
        { value: '8', label: 'Other, Not listed here' },
        { value: '9', label: "I'm not sure" }
    ]
    const clickFunction = (e) => {
        console.log('E', e.value)
        dispatch({
            type: 'ADD_STEP_TWO',
            item: e.value,
        });
    }

    return (
        <InputWrapper>
        <TitleDiv>
            <h4>Vehicle Specifications</h4>
        </TitleDiv>
            <InputWrap>
                <InputLabel>ENGINE *</InputLabel>
                <Select options={optionsEngine} onChange={(e) => clickFunction(e)} styles={colourStyles} />
            </InputWrap>
            <InputWrap>
                <InputLabel>VIN (OPTIONAL) *</InputLabel>
                <input
                    type="text" placeholder='VIN Number' id="vin-number" />
            </InputWrap>
            <InputWrap>
                <InputLabel>TRANSMISSION *</InputLabel>
                <Select options={optionsTransmission} onChange={(e) => clickFunction(e)} styles={colourStyles} /></InputWrap>
            <InputWrap>
                <InputLabel>TRIM *</InputLabel>
                <Select options={trims} onChange={(e) => clickFunction(e)} styles={colourStyles} /></InputWrap>
        </InputWrapper>
    )
}

export default StepTwo

const InputWrapper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 1rem 1rem;
  width: 90%;
`

const InputWrap = styled.div`
 margin: 5px 0; 
 input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 100%;
    height: 30px;
    border: thin solid #CCCCCC;
  }
`

const InputLabel = styled.div`
  margin: 0.5rem 0;
  color: #000000;
  text-align: start;
  font-size: small;
`

const TitleDiv = styled.div`
  color: #000000;
  background: #ffffff;
  height: 40px;
  margin: 10px 0;
  text-align: start;

  h4{
      font-weight: 400;
  }
`