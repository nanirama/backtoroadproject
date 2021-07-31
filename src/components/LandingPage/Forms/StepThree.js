import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

import { useStateValue } from '../../../StateProvider'

const StepThree = () => {
    useEffect(() => {
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

    const clickFunction = (e) => {
        console.log('E', e.value)
        console.log('ENABLE GET QUOTE');
        dispatch({
            type: 'ADD_STEP_THREE',
            item: e.value,
        });
    }

    return (
        <InputWrapper>
            <TitleDiv>
                <h4 className="w-100 mb-1">For Quotes and Assistance</h4>
            </TitleDiv>
            <InputWrap>
                <label htmlFor="name">NAME *
                <input className="custominput" aria-labelledby="name" type="text" placeholder='Name' id="name" />
                </label>
            </InputWrap>
            <InputWrap>
                <label htmlFor="email">EMAIL (FOR QUOTE ONLY) *
                <input className="custominput" aria-labelledby="email" type="email" placeholder='Email' id="email" />
                </label>
            </InputWrap>
            <InputWrap>
                <label htmlFor="state">STATE *
                <Select aria-label="state" aria-labelledby="state" options={optionsStates} onChange={(e) => clickFunction(e)} styles={colourStyles} />
                </label>
            </InputWrap>
            <div className="row">
                <div className="col-md-6 col-xs-6">
                <InputWrap>
                    <label htmlFor="phone">PHONE (FOR QUOTE ONLY)*
                    <input className="custominput" aria-labelledby="phone" type="text" placeholder='Phone' id="phone" />
                    </label>
                </InputWrap>
                </div>
                <div className="col-md-6 col-xs-6">
                <InputWrap>
                    <label htmlFor="zip">ZIP (FOR QUOTE ONLY)*
                    <input className="custominput" aria-labelledby="zip" type="text" placeholder='Zip' id="zip" />
                    </label>
                </InputWrap>
                </div>
            </div>
            
            
            <InputWrap>
                <label htmlFor="size">ENTER ANY SPECIAL NOTES FOR THIS PART (SIZE VARIATION) 
                <textarea className="custominput" aria-labelledby="size" rows="4" cols="50" name="comment" form="usrform" placeholder="Enter here..."></textarea>
                </label>
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
  padding: 0rem;
  width: 100%;
`

const InputWrap = styled.div`
 margin: 0.5rem 0rem;
  width: 100%;
  input{padding: 1.5rem 0.5rem;}
  input,textarea{    
    outline: none;
    width: 100%;
    height: 36px;
    border-radius:3px;
    border:1px solid #CCCCCC;
  }
  textarea {
    height: 60px;
    padding: 0.5rem;
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