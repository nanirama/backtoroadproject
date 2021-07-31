import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import axios from '../../../axios'

import { useStateValue } from '../../../StateProvider'

const StepTwo = () => {
    useEffect(() => {
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
            <h4 className="w-100 mb-1">Vehicle Specifications</h4>
        </TitleDiv>
            <InputWrap>
                <label htmlFor="engine">ENGINE *
                <Select aria-label="engine" aria-labelledby="engine" options={optionsEngine} onChange={(e) => clickFunction(e)} styles={colourStyles} />
                </label>
            </InputWrap>
            <InputWrap>
                <label htmlFor="vin">VIN (OPTIONAL) *
                <input
                     aria-labelledby="vin number"
                    type="text" placeholder='VIN Number' id="vin-number" className="custominput" />
                </label>
            </InputWrap>
            <InputWrap>
                <label htmlFor="transmission">TRANSMISSION *
                <Select
                    aria-label="transmission"
                    aria-labelledby="transmission"
                options={optionsTransmission} onChange={(e) => clickFunction(e)} styles={colourStyles} />
                </label>
            </InputWrap>
            <InputWrap>
                <label htmlFor="trim">TRIM * 
                <Select
                 aria-label="trim"
                 aria-labelledby="trim"
                 options={trims} onChange={(e) => clickFunction(e)} styles={colourStyles} />
                </label>
            </InputWrap>
        </InputWrapper>
    )
}

export default StepTwo

const InputWrapper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 0rem;
  width: 100%;
`

const InputWrap = styled.div`
  margin: 0.5rem 0rem;
  width: 100%;
  input {
    padding: 1.5rem 0.5rem;
    outline: none;
    width: 100%;
    height: 36px;
    border-radius:3px;
    border:1px solid #CCCCCC;
  }
`

const InputLabel = styled.label`
    width: 100%;
    float: left;
    color: #233A6C;
    font-size: 14px;
    line-height: 21px;
`


const TitleDiv = styled.div`  
  width:100%;
  background: #ffffff;
  height: 30px;
  margin: 0px 0px 10px;
  text-align: start;
  h4{
    margin: 0px 0px 10px;
    color: #08275C;
    font-weight: 700;
    font-size: 22px;
  }
`