import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import Select, { components } from 'react-select'
import Loader from "react-loader-spinner";
import axios from '../../../axios'
import { StaticImage } from "gatsby-plugin-image"

import arrowIcon from '../../../assets/images/landing/arrow.png'
import darrowIcon from '../../../assets/images/landing/d-icon.png'
import CursorarrowIcon from '../../../assets/images/landing/cursor-arrow.png'
import { useStateValue } from '../../../StateProvider'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const StepOne = ({setPartsHeading, setInStack, onClick}) => {
    const [{ year, make, model, part, allyears, allmakes, allmodels, allparts, stepOne, stepBtnEnable }, dispatch] = useStateValue();
    const [cursorPointer, setCursorPointer] = useState();    
    // const [years, setYears] = useState();
    useEffect(() => {
        dispatch({
            type: 'ADD_STEP_ONE',
            item: 'ONE'
        });
        fetchYears(); 
        const yarray = [year, make, model, part]
        const newyArray = yarray.filter((item)=>{
            return item !==''
        })
        if(newyArray.length === yarray.length){
            dispatch({
                type: 'ADD_BTN_ENABLE',
                item: true,
            });   
        } 
        else
        {
            dispatch({
                type: 'ADD_BTN_ENABLE',
                item: false,
            });   
        }         
    },[cursorPointer, year, make, model, part]);
    const calculateStack = (year, make, model, part)=>{
        setInStack('Checking...')   
        setPartsHeading('Parts in Stock')
        const yarray = [year, make, model, part]
        const newyArray = yarray.filter((item)=>{
            return item !==''
        })
        let stack = '';
        if (newyArray.length === 1){
            stack = Math.floor(Math.random() * (4500 - 3000 + 1)) + 3000
        }
        else if (newyArray.length === 2){
            stack = Math.floor(Math.random() * (1650 - 950 + 1)) + 950
        }
        else if (newyArray.length === 3){
            stack = Math.floor(Math.random() * (800 - 350 + 1)) + 350
        }
        else if (newyArray.length === 4){
            stack = Math.floor(Math.random() * (190 - 2 + 1)) + 2
        }
        
        setTimeout(
            () => setInStack(stack), 
            1000
          );
    }

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
        //handleYearChange()     
        axios
            .get("v1/years")
            .then(resp => {
                const optionsDyna = resp.data.map(d => ({
                    "value": d,
                    "label": d
                }))
                dispatch({
                    type: 'ADD_ALL_YEARS',
                    item: optionsDyna,
                });
            })            
            .catch(error => console.log(error))   
    }
    const handleYearChange = ()=>{   
        setCursorPointer('year')  
        const optionsMakeDyna = [{
            "value": "",
            "label": "Select Make"
        }]
        dispatch({
            type: 'ADD_ALL_MAKES',
            item: optionsMakeDyna,
        });
        dispatch({
            type: 'ADD_MAKE',
            item: '',
        });
        const optionsModelDyna = [{
            "value": "",
            "label": "Select Model"
        }]
        dispatch({
            type: 'ADD_ALL_MODELS',
            item: optionsModelDyna,
        });
        dispatch({
            type: 'ADD_MODEL',
            item: '',
        });
    }
    const fetchMakes = (e) => {
        setCursorPointer('make') 
        dispatch({
            type: 'ADD_YEAR',
            item: e.target.value,
        });
        dispatch({
            type: 'ADD_ALL_MODELS',
            item: '',
        });
        calculateStack(e.target.value, make, model, part)       
        axios
            .get("v1/makes/" + e.target.value)
            .then(resp => {
                const options = resp.data.map(d => ({
                    "value": d,
                    "label": d
                }))
                dispatch({
                    type: 'ADD_ALL_MAKES',
                    item: options,
                });              
            })
            .catch(error => console.log('Make request error',error.response))
        
    }
    const handleMakeChange = ()=>{  
        
        if(year!=='')
        {
            setCursorPointer('make')  
        }  
        const optionsModelDyna = [{
            "value": "",
            "label": "Select Model"
        }]
        dispatch({
            type: 'ADD_ALL_MODELS',
            item: optionsModelDyna,
        }); 
        dispatch({
            type: 'ADD_MODEL',
            item: '',
        });
    }

    const fetchModels = (e) => {
        dispatch({
            type: 'ADD_MAKE',
            item: e.target.value,
        });
        calculateStack(year, e.target.value, model, part)
        setCursorPointer('model')
        axios
            .get("v1/model/" + year + "/" + e.target.value)
            .then(resp => {
                const options = resp.data.map(d => ({
                    "value": d,
                    "label": d
                }))
                dispatch({
                    type: 'ADD_ALL_MODELS',
                    item: options
                })
            })
            .catch(error => console.log(error.response))
            
    }
    const handleModelChange = ()=>{     
        if(year!=='' && make!=='') {
            setCursorPointer('model')  
        }
        
        // dispatch({
        //     type: 'ADD_ALL_PARTS',
        //     item: '',
        // });
    }
    const fetchParts = (e) => {
        dispatch({
            type: 'ADD_MODEL',
            item: e.target.value,
        });
        calculateStack(year, make, e.target.value, part)
        setCursorPointer('part')
        axios
            .get("v1/parts")
            .then(resp => {
                const options = resp.data.map(d => ({
                    "value": d,
                    "label": d
                }))
                dispatch({
                    type: 'ADD_ALL_PARTS',
                    item: options
                })
            })
            .catch(error => console.log(error.response))
    }

    const enableGetQuote = (e) => {
        console.log('ENABLE GET QUOTE');
        dispatch({
            type: 'ADD_PART',
            item: e.target.value,
        });
        calculateStack(year, make, model, e.target.value)
        setCursorPointer('')
        // dispatch({
        //     type: 'ADD_BTN_ENABLE',
        //     item: true,
        // });
    }
    

    return (
        <InputWrapper>
            <InputWrap img={CursorarrowIcon}>
                { cursorPointer === 'year' && (
                    <StaticImage src="../../../assets/images/landing/cursor-arrow.png" className="curson-pointer" />
                )}
            
                <InputLabel htmlFor="year">Year *</InputLabel>
                <InputSelect
                active={cursorPointer === 'year' && 'true'}
                onChange={(e) => fetchMakes(e)}
                onMouseDown={handleYearChange}
                aria-label="years"
                aria-labelledby="years"
                >
                    <option disabled selected>SELECT YEAR</option>
                    { allyears && allyears.map((item, index)=>(
                        <option value={item.value}>{item.label}</option>
                    ))}
                </InputSelect>
                { cursorPointer === 'year' && !allyears && (
                    <InputWrapLoading>
                        <Loader
                            type="TailSpin"
                            color="#2860BE"
                            height={24}
                            width={24}
                            timeout={300000}
                        />
                    </InputWrapLoading>  
                )}      
                
                
            </InputWrap>                
            <InputWrap>            
                { cursorPointer === 'make' && (
                    <StaticImage src="../../../assets/images/landing/cursor-arrow.png" className="curson-pointer" />
                )}
                <InputLabel htmlFor="make">Make * </InputLabel>  
                <InputSelect
                    active={cursorPointer === 'make' && 'true'}
                    inputdisabled={cursorPointer === 'year' && 'true'}
                    onChange={(e) => fetchModels(e)}
                    onMouseDown={handleMakeChange}
                    aria-label="makes"
                    aria-labelledby="makes"
                    onloadingfont = {cursorPointer === 'make' && allmakes.length==1}
                    inputdisabled = {cursorPointer === 'year'}
                    disabled={cursorPointer === 'year' || cursorPointer === 'make' && allmakes.length==1}
                    >
                        
                        <option disabled selected>SELECT MAKE</option>
                        { allmakes && allmakes.map((item, index)=>(
                            <option value={item.value}>{item.label}</option>
                        ))}
                </InputSelect>
                { cursorPointer === 'make' && allmakes.length==1 && (
                    <InputWrapLoading>
                        <Loader
                            type="TailSpin"
                            color="#2860BE"
                            height={24}
                            width={24}
                            timeout={300000}
                        />
                    </InputWrapLoading>  
                )}
                
            </InputWrap>
            <InputWrap>
                { cursorPointer === 'model' && (
                    <StaticImage src="../../../assets/images/landing/cursor-arrow.png" className="curson-pointer" />
                )}
                <InputLabel htmlFor="model">Model *</InputLabel>
                <InputSelect
                    active={cursorPointer === 'model' && 'true'}
                    onChange={(e) => fetchParts(e)}
                    onMouseDown={handleModelChange}
                    aria-label="models"
                    aria-labelledby="models"
                    onloadingfont = {cursorPointer === 'model' && allmodels.length==1}
                    inputdisabled = {cursorPointer === 'year' || cursorPointer === 'make'}
                    disabled={cursorPointer === 'year' || cursorPointer === 'make' || model && allmodels.length==1}
                    >
                        <option disabled selected>SELECT MODEL</option>                       
                        { allmodels && allmodels.map((item, index)=>(
                            <option value={item.value}>{item.label}</option>
                        ))}
                </InputSelect>   
                { cursorPointer === 'model' && allmodels.length==1 && (
                    <InputWrapLoading>
                        <Loader
                            type="TailSpin"
                            color="#2860BE"
                            height={24}
                            width={24}
                            timeout={300000}
                        />
                    </InputWrapLoading>  
                )}    
            </InputWrap>
            <InputWrap>
            { cursorPointer === 'part' && (
                    <StaticImage src="../../../assets/images/landing/cursor-arrow.png" className="curson-pointer" />
                )}
                <InputLabel htmlFor="part">Part *</InputLabel>
                <InputSelect
                    active={cursorPointer === 'part' && 'true'}
                    onChange={(e) => enableGetQuote(e)}
                    styles={colourStyles}
                    aria-label="parts"
                    aria-labelledby="parts"
                    onloadingfont = {cursorPointer === 'part' && !allparts}
                    inputdisabled = {cursorPointer === 'year' || cursorPointer === 'make' || cursorPointer === 'model'}
                    disabled={cursorPointer === 'part' && !allparts}
                    >
                        <option disabled selected>SELECT PART</option>   
                        { allparts && allparts.map((item, index)=>(
                            <option value={item.value}>{item.label}</option>
                        ))}
                        
                </InputSelect>   
                { cursorPointer === 'part' && !allparts && (
                    <InputWrapLoading>
                        <Loader
                            type="TailSpin"
                            color="#2860BE"
                            height={24}
                            width={24}
                            timeout={300000}
                        />
                    </InputWrapLoading>  
                )}        
            </InputWrap>
            <div className="button_outer">
                    {stepOne !== '' ? (stepBtnEnable === true ? <button className="btn2 d-flex align-items-center justify-content-center" onClick={onClick} ><span>FIND MY PART NOW</span><InputBg img={arrowIcon}>&nbsp;</InputBg></button> :  <button className="btn2 disabled d-flex align-items-center justify-content-center" ><span>FIND MY PART NOW</span><InputBg img={arrowIcon}>&nbsp;</InputBg></button>): null}
             </div>
        </InputWrapper>
    )
}

export default StepOne

const InputWrapper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 0rem;
  width: 100%;
`
const InputBg = styled.span`
    display: inline-block;
    color:transparent !important;
    background-position:center center;
    background-size: auto auto !important;
    background-image: url(${(props)=>props.img});  
    background-repeat: no-repeat;
    width:18px !important;
    height:18px !important;
    margin-left:7px;
    
`
const InputSelect = styled.select`
    background-image: url(${darrowIcon});  
    background-repeat: no-repeat;
    background-position:center right 10px;
    background-size : 14px 8px;
    width:100%;
    z-index:1 !important;
    margin:3px 0px;
    font-size: 16px !important;
    color: #000000 !important;
    background-color:#ffffff;
    ${props => props.onloadingfont ? 'color: #c5c5c5 !important;' : 'color: #000000 !important;'}
    ${props => props.active ? 'border: 1px solid #2860BE !important;' : 'border: 1px solid #CFCFCF !important;'}
    ${props => props.inputdisabled ? 'filter:alpha(opacity=50); -moz-opacity:0.5; -khtml-opacity: 0.5; opacity: 0.5;' : 'filter:alpha(opacity=100); -moz-opacity:1; -khtml-opacity: 1; opacity: 1;'}
    
    border-radius: 5px !important;
    line-height:26px;
    padding:7px;
    box-sizing: border-box;
    .active{
        border:1px solid #2860BE;
    }
    option {
        color: #000000 !important;
        background-color: #ffffff;
        height: 40px !important;
        line-height:50px !important;
      }
      option:hover {
        background-color:#deebff;
      }
    .inputdisabled{
        border:3px solid red;
    }
`   
const InputWrap = styled.div`
  margin: 0.4rem 0rem;
  width: 100%;
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 100%;
    height: 20px;
    border-radius:5px;
  }
  position:relative;
  .curson-pointer{
      position:absolute;
      top:20px !important;
      left:-45px !important;
      z-index:999 !important;
  }
`
const InputWrapLoading = styled.div`
    width:400px;
    position:absolute;
    top:30px !important;
    left:10px !important;
    z-index:999 !important;
`
const InputLabel = styled.label`
    width: 100%;
    float: left;
    color: #233A6C;
    font-size: 14px;
    line-height: 18px !important;
    padding:0px !important;
    margin:0px !important;
`

