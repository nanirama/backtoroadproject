import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Select from 'react-select'
import axios from 'axios';

const SelectControls = () => {

  useEffect(() => {
    fetchYears();
  }, [])

  const [years, setYears] = useState();
  const [makes, setMakes] = useState();
  const [models, setModels] = useState();
  const [trims, setTrims] = useState();
  const [parts, setParts] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [selectedModel, setSelectedModel] = useState();

  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white', width: '290px', borderRadius: '30px', alignItems: 'left', }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = '#000';
      return {
        ...styles,
        alignItems: 'left'
      };
    },
  };

  const fetchYears = () => {
    // e.preventDefault()

    setMakes('');
    setModels('');
    setParts('');

    axios
      .get("https://btr-web-backend.default.svc.cluster.local/api/v1/years")
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
    setSelectedYear(e.value);
    setModels('');
    setParts('');
    axios
      .get("https://btr-web-backend.default.svc.cluster.local/api/v1/makes/" + e.value)
      .then(resp => {
        //console.log('Makes ', resp);
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
    setSelectedModel(e.value);
    console.log('YEAR ', selectedYear, 'SELECTED MAKE ', e.value);
    axios
      .get("https://btr-web-backend.default.svc.cluster.local/api/v1/model/" + selectedYear + "/" + e.value)
      .then(resp => {
        const options = resp.data.map(d => ({
          "value": d,
          "label": d
        }))
        setModels(options);
      })
      .catch(error => console.log(error.response))
  }

  const fetchTrims = (e) => {
    setParts('');
    console.log('YEAR ', selectedYear, 'SELECTED MODEL ', selectedModel);
    axios
      .get("https://btr-web-backend.default.svc.cluster.local/api/v1/trim/" + selectedYear + "/" + e.value)
      .then(resp => {
        const options = resp.data.map(d => ({
          "value": d,
          "label": d
        }))
        setTrims(options);
      })
      .catch(error => console.log(error.response))
  }

  const fetchParts = (e) => {
    axios
      .get("https://btr-web-backend.default.svc.cluster.local/api/v1/parts")
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
    //Enable Get Quote Button
  }

  return (
    <SelectContainer>
      <SelectHeading>Get a Free Quote Now!</SelectHeading>
      <InputWrapper>
        <Select options={years} onChange={(e) => fetchMakes(e)} styles={colourStyles}/>
        <Select options={makes} onChange={(e) => fetchModels(e)} styles={colourStyles}/>
        <Select options={models} onChange={(e) => fetchTrims(e)} styles={colourStyles}/>
        <Select options={trims} onChange={(e) => fetchParts(e)} styles={colourStyles}/>
        <Select options={parts} onChange={(e) => enableGetQuote(e)} styles={colourStyles}/>
        <Button
          primary="true"
          round="true"
          to="/get-quote-now"
        >
          Find My Part Now !
            </Button>
      </InputWrapper>

    </SelectContainer>
  )
}

export default SelectControls

const SelectContainer = styled.div`
  width: 100%;
  height: 100%;
  background: lightgrey;
  text-align: center;
`
const SelectHeading = styled.h2`
  padding-top: 1rem;
`

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-items: center;
  padding: 2rem 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 440px) {
    grid-template-columns: 1fr;
  }
`

const HeroInput = styled.input`
  margin: 0.1rem;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #000;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '50px' : 'none')};
`