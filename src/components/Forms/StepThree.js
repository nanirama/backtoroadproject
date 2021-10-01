import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Aos from "aos"
import "aos/dist/aos.css"
import Select from 'react-select'
import { Button } from "../Button"
import axios from '../../axios'

import { useStateValue } from '../../StateProvider'

const StepThree = () => {
    useEffect(() => {
        Aos.init({});
        dispatch({
            type: 'ADD_STEP_TWO',
            item: ''
        });
    }, [])

    const [{ year, make, model, part }, dispatch] = useStateValue()
    const [dummy, setDummy] = useState();

    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white', color: '#000000', width: '100%', borderRadius: '2px', alignItems: 'left', borderColor: '#CCCCCC'}),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                alignItems: 'left !important',
                color: '#000000'
            };
        },
    };

    const optionsStates = [
        { value: "Alabama", label: "Alabama" },
        { value: "Alaska", label: "Alaska" },
        { value: "American Samoa", label: "American Samoa" },
        { value: "Arizona", label: "Arizona" },
        { value: "Arkansas", label: "Arkansas" },
        { value: "California", label: "California" },
        { value: "Colorado", label: "Colorado" },
        { value: "Connecticut", label: "Connecticut" },
        { value: "Delaware", label: "Delaware" },
        { value: "District Of Columbia", label: "District Of Columbia" },
        { value: "Federated States Of Micronesia", label: "Federated States Of Micronesia" },
        { value: "Florida", label: "Florida" },
        { value: "Georgia", label: "Georgia" },
        { value: "Guam", label: "Guam" },
        { value: "Hawaii", label: "Hawaii" },
        { value: "Idaho", label: "Idaho" },
        { value: "Illinois", label: "Illinois" },
        { value: "Indiana", label: "Indiana" },
        { value: "Iowa", label: "Iowa" },
        { value: "Kansas", label: "Kansas" },
        { value: "Kentucky", label: "Kentucky" },
        { value: "Louisiana", label: "Louisiana" },
        { value: "Maine", label: "Maine" },
        { value: "Marshall Islands", label: "Marshall Islands" },
        { value: "Maryland", label: "Maryland" },
        { value: "Massachusetts", label: "Massachusetts" },
        { value: "Michigan", label: "Michigan" },
        { value: "Minnesota", label: "Minnesota" },
        { value: "Mississippi", label: "Mississippi" },
        { value: "Missouri", label: "Missouri" },
        { value: "Montana", label: "Montana" },
        { value: "Nebraska", label: "Nebraska" },
        { value: "Nevada", label: "Nevada" },
        { value: "New Hampshire", label: "New Hampshire" },
        { value: "New Jersey", label: "New Jersey" },
        { value: "New Mexico", label: "New Mexico" },
        { value: "New York", label: "New York" },
        { value: "North Carolina", label: "North Carolina" },
        { value: "North Dakota", label: "North Dakota" },
        { value: "Northern Mariana Islands", label: "Northern Mariana Islands" },
        { value: "Ohio", label: "Ohio" },
        { value: "Oklahoma", label: "Oklahoma" },
        { value: "Oregon", label: "Oregon" },
        { value: "Palau", label: "Palau" },
        { value: "Pennsylvania", label: "Pennsylvania" },
        { value: "Puerto Rico", label: "Puerto Rico" },
        { value: "Rhode Island", label: "Rhode Island" },
        { value: "South Carolina", label: "South Carolina" },
        { value: "South Dakota", label: "South Dakota" },
        { value: "Tennessee", label: "Tennessee" },
        { value: "Texas", label: "Texas" },
        { value: "Utah", label: "Utah" },
        { value: "Vermont", label: "Vermont" },
        { value: "Virgin Islands", label: "Virgin Islands" },
        { value: "Virginia", label: "Virginia" },
        { value: "Washington", label: "Washington" },
        { value: "West Virginia", label: "West Virginia" },
        { value: "Wisconsin", label: "Wisconsin" },
        { value: "Wyoming", label: "Wyoming" }
    ]

    const ddlNameChange = (e) => {
        console.log('E - Name', e.target.value)
        dispatch({
            type: 'ADD_NAME',
            item: e.target.value,
        });
    }

    const ddlEmailChange = (e) => {
        console.log('E Email', e.target.value)
        dispatch({
            type: 'ADD_EMAIL',
            item: e.target.value,
        });
    }

    const ddlStateChange = (e) => {
        console.log('E - State', e.target.value)
        dispatch({
            type: 'ADD_STATE',
            item: e.target.value,
        });
    }

    const ddlPhoneChange = (e) => {
        console.log('E - Phone', e.target.value)
        dispatch({
            type: 'ADD_PHONE',
            item: e.target.value,
        });
    }

    const ddlZipChange = (e) => {
        console.log('E - Zip', e.target.value)
        dispatch({
            type: 'ADD_ZIP',
            item: e.target.value,
        });
    }

    const ddlTxtChange = (e) => {
        console.log('E - Notes', e.target.value)
        dispatch({
            type: 'ADD_NOTES',
            item: e.target.value,
        });
    }

    return (
        <InputWrapper>
            <TitleDiv>
                <h4>For Quotes and Assistance</h4>
            </TitleDiv>
            <InputWrap>
                <InputLabel>NAME *</InputLabel>
                <input type="text" placeholder='Name' id="name" onChange={(e) => ddlNameChange(e)}/>
            </InputWrap>
            <InputWrap>
                <InputLabel>EMAIL (FOR QUOTE ONLY) *</InputLabel>
                <input type="email" placeholder='Email' id="email" onChange={(e) => ddlEmailChange(e)}/>
            </InputWrap>
            <InputWrap>
                <InputLabel>STATE *</InputLabel>
                <Select options={optionsStates} onChange={(e) => ddlStateChange(e)} styles={colourStyles} /></InputWrap>
            <InputWrap>
                <InputLabel>PHONE (FOR QUOTE ONLY)*</InputLabel>
                <input type="text" placeholder='Phone' id="phone" onChange={(e) => ddlPhoneChange(e)}/>
            </InputWrap>
            <InputWrap>
                <InputLabel>ZIP (FOR QUOTE ONLY)*</InputLabel>
                <input type="text" placeholder='Zip' id="zip" onChange={(e) => ddlZipChange(e)}/>
            </InputWrap>
            <InputWrap>
                <InputLabel>ENTER ANY SPECIAL NOTES FOR THIS PART (SIZE VARIATION)</InputLabel>
                <textarea rows="4" cols="50" name="comment" form="usrform" onChange={(e) => ddlTxtChange(e)}>
                    Enter here...</textarea>
            </InputWrap>
        </InputWrapper>
    )
}


export default StepThree

const InputWrapper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 0.5rem 0.5rem;
  width: 90%;
// margin-top: 55px;
`

const InputWrap = styled.div`
  margin: 5px 0;

  input,textarea {
    padding: 1rem 1.5rem;
    outline: none;
    width: 100%;
    height: 25px;
    border: thin solid #CCCCCC;
  }

  textarea {
    height: 60px;
  }
`

const InputLabel = styled.div`
  margin: 0.2rem 0;
  color: #000000;
  text-align: start;
  font-size: small;
`

const TitleDiv = styled.div`
  color: #000000;
  background: #ffffff;
  height: 30px;
  margin: 5px 0;
  text-align: start;

  h4{
      font-weight: 400;
  }
`