import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Aos from "aos"
import "aos/dist/aos.css"
import Select from 'react-select'
import { Button } from "../Button"
import axios from '../../axios'

import { useStateValue } from '../../StateProvider'

const StepOne = () => {

    useEffect(() => {
        Aos.init({});
        dispatch({
            type: 'ADD_STEP_THREE',
            item: ''
        });
        fetchYears();
    }, [])

    const [{ year, make, model, part }, dispatch] = useStateValue()
    const [years, setYears] = useState();
    const [makes, setMakes] = useState();
    const [models, setModels] = useState();
    const [parts, setParts] = useState();

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

    const fetchYears = () => {
        setMakes('');
        setModels('');
        setParts('');

        axios
            .get("v1/years")
            .then(resp => {
                const optionsDyna = resp.data.map(d => ({
                    "value": d,
                    "label": d
                }))
                setYears(optionsDyna);
            })
            .catch(error => console.log(error.response))
    }

    const fetchMakes = (e) => {
        dispatch({
            type: 'ADD_YEAR',
            item: e.value,
        });
        setModels('');
        setParts('');
        axios
            .get("v1/makes/" + e.value)
            .then(resp => {
                console.log('Makes ', resp);
                const options = resp.data.map(d => ({
                    "value": d,
                    "label": d
                }))
                setMakes(options);
            })
            .catch(error => console.log(error.response))
    }

    const fetchModels = (e) => {
        setParts('');
        dispatch({
            type: 'ADD_MAKE',
            item: e.value,
        });
        axios
            .get("v1/model/" + year + "/" + e.value)
            .then(resp => {
                const options = resp.data.map(d => ({
                    "value": d,
                    "label": d
                }))
                setModels(options);
            })
            .catch(error => console.log(error.response))
    }

    const fetchParts = (e) => {
        dispatch({
            type: 'ADD_MODEL',
            item: e.value,
        });
        axios
            .get("v1/parts")
            .then(resp => {
                const options = resp.data.map(d => ({
                    "value": d,
                    "label": d
                }))
                setParts(options);
            })
            .catch(error => console.log(error.response))
    }

    const enableGetQuote = (e) => {
        console.log('ENABLE GET QUOTE');
        dispatch({
            type: 'ADD_PART',
            item: e.value,
        });
        dispatch({
            type: 'ADD_STEP_ONE',
            item: e.value,
        });
    }

    return (
        <InputWrapper>
            <InputWrap>
                <InputLabel>Year *</InputLabel>
                <Select options={years} onChange={(e) => fetchMakes(e)} styles={colourStyles} /></InputWrap>
            <InputWrap>
                <InputLabel>Make *</InputLabel>
                <Select options={makes} onChange={(e) => fetchModels(e)} styles={colourStyles} /></InputWrap>
            <InputWrap>
                <InputLabel>Model *</InputLabel>
                <Select options={models} onChange={(e) => fetchParts(e)} styles={colourStyles} /></InputWrap>
            <InputWrap>
                <InputLabel>Part *</InputLabel>
                <Select options={parts} onChange={(e) => enableGetQuote(e)} styles={colourStyles} /></InputWrap>
        </InputWrapper>
    )
}

export default StepOne

const InputWrapper = styled.div`
  background: #ff00ff;
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
    width: 90%;
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