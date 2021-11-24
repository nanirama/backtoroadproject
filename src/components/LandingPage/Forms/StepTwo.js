import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loader from "react-loader-spinner";
import { StaticImage } from "gatsby-plugin-image"
import axios from '../../../axios'
import { useStateValue } from '../../../StateProvider'


import arrowIcon from '../../../assets/images/landing/arrow.png'
import arrowRightIcon from '../../../assets/images/landing/arrow-right.png'
import darrowIcon from '../../../assets/images/landing/d-icon.png'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const StepTwo = ({setInStack, setPartsHeading, onClickToThree, onClick, onClickToOne}) => {
    const [cursorPointer, setCursorPointer] = useState('engine');
    //const [formErrors, setFormErrors] = useState();
    const [engineValid, setEngineValid] = useState(false);
    const [engineError, setEngineError] = useState();
    const [option1Valid, setOption1Valid] = useState(false);
    const [option1Error, setOption1Error] = useState();
    const [option2Valid, setOption2Valid] = useState(false);
    const [option2Error, setOption2Error] = useState();

    console.log('cursorPointer',cursorPointer)
    const [{ year, make, model, part, engine, transmission, trim, stepBtnEnable }, dispatch] = useStateValue()
    useEffect(() => {
        dispatch({
            type: 'ADD_STEP_ONE',
            item: ''
        });
        dispatch({
            type: 'ADD_STEP_TWO',
            item: 'TWO'
        });
        dispatch({
            type: 'ADD_BTN_ENABLE',
            item: false,
        });
        fetchTrims();
        setInStack(' ✓ In Stock ')
        setPartsHeading(make +' '+ model +' '+ part +' '+ year)
        const yarray = [transmission, trim]
        const newyArray = yarray.filter((item)=>{
            return item !==''
        })
        if(newyArray.length === yarray.length){
            dispatch({
                type: 'ADD_BTN_ENABLE',
                item: true,
            });   
        }
        console.log('Selected year in Second step', make)
    }, [year, make, model, part, engine, transmission, trim])

    const clickPrevFunction = (e) => {
        onClickToOne()
    }
    
    const [trims, setTrims] = useState();
    const [vin ] = useState();
    
    // const colourStyles = {
    //     control: styles => ({ ...styles, backgroundColor: 'white', color: '#000000', width: '100%', borderRadius: '2px', alignItems: 'left', }),
    //     option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    //         return {
    //             ...styles,
    //             alignItems: 'left !important',
    //             color: '#000000'
    //         };
    //     },
    // };

    const fetchTrims = (e) => {
        console.log('YEAR ', year, 'SELECTED MODEL ', model);
        axios
            .get("v1/trim/" + year + "/" + model)
            .then(resp => {
                let ddlOptions = [{ "value": "", "label": "I’m not sure."}]
                let options = []
                options = resp.data.map(d => ({
                    "value": d,
                    "label": d
                }))
                const opt = ddlOptions.concat(options);
                setTrims(opt);
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
    // const clickFunction = (e) => {
    //     console.log('E', e.value)
    //     // dispatch({
    //     //     type: 'ADD_STEP_TWO',
    //     //     item: e.value,
    //     // });
    // }
    const CheckFormValid = ()=>{
        if(!engineValid)
        {
            setCursorPointer('engine')  
            setEngineError('Engine is required')   
        }
        else if(!option1Valid)
        {
            setCursorPointer('option1')  
            setOption1Error('Please choose Option 1')   
        }
        else if(!option2Valid)
        {
            setCursorPointer('option2')  
            setOption2Error('Please choose Option 2')   
        }
    }
    const ddlEngineChange = (e) => {
        setCursorPointer('option1')  
        dispatch({
            type: 'ADD_ENGINE',
            item: e.label,
        });
        if(e.label!=='')
        {
            setEngineValid(true)
            setEngineError('')
        }
    }

    const ddlVinChange = (e) => {
        dispatch({
            type: 'ADD_VIN',
            item: e.target.value,
        });
    }

    const ddlTransmissionChange = (e) => {
        
        dispatch({
            type: 'ADD_TRANS',
            item: e.label,
        });
        if(e.label!=='')
        {
            setOption2Valid(true)
            setOption2Error('')
        }
        setCursorPointer('')  
    }

    const ddlTrimChange = (e) => {
        setCursorPointer('option2')  
        dispatch({
            type: 'ADD_TRIM',
            item: e.label,
        });
        if(e.label!=='')
        {
            setOption1Valid(true)
            setOption1Error('')
        }
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
            <h4 className="w-100">Vehicle Specifications</h4>
        </TitleDiv>
        <InputWrap>
                { cursorPointer === 'option1' && (
                    <StaticImage src="../../../assets/images/landing/cursor-arrow.png" className="curson-pointer" />
                )}
                <InputLabel htmlFor="trim">Option 1 (Optional)</InputLabel>
                <InputSelect
                    active={cursorPointer === 'option1' && 'true'}
                    onChange={(e) => ddlTrimChange(e)} 
                    onMouseUp={e=>setCursorPointer('option1')}
                    aria-label="trim"
                    aria-labelledby="trim"
                    >
                        <option disabled selected>SELECT</option>
                        { trims && trims.map((item, index)=>(
                            <option value={item.value}>{item.label}</option>
                        ))}
                </InputSelect> 
                { cursorPointer === 'option1' && !trims && (
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
                {option1Error && (
                            <ErrorLabel>{option1Error}</ErrorLabel>
                )}
            </InputWrap>
            <InputWrap>
                { cursorPointer === 'option2' && (
                    <StaticImage src="../../../assets/images/landing/cursor-arrow.png" className="curson-pointer" />
                )}
                <InputLabel htmlFor="transmission">Option 2*</InputLabel>
                <InputSelect
                    active={cursorPointer === 'option2' && 'true'}
                    onChange={(e) => ddlTransmissionChange(e)}
                    onMouseUp={e=>setCursorPointer('option2')}
                    aria-label="transmission"
                    aria-labelledby="transmission"
                    >
                        <option disabled selected>SELECT</option>
                        { optionsTransmission && optionsTransmission.map((item, index)=>(
                            <option value={item.value}>{item.label}</option>
                        ))}
                </InputSelect> 
                { cursorPointer === 'option2' && !optionsTransmission && (
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
                {option2Error && (
                            <ErrorLabel>{option2Error}</ErrorLabel>
                )}
            </InputWrap>
            {/* <InputWrap>
                { cursorPointer === 'engine' && (
                    <StaticImage src="../../../assets/images/landing/cursor-arrow.png" className="curson-pointer" />
                )}
                <InputLabel htmlFor="engine">ENGINE *</InputLabel>
                <InputSelect
                    active={cursorPointer === 'engine' && 'true'}
                    onChange={(e) => ddlEngineChange(e)}
                    aria-label="engine"
                    onMouseUp={e=>setCursorPointer('engine')}
                    aria-labelledby="engine"
                    >
                        <option disabled selected>SELECT YEAR</option>
                        { optionsEngine && optionsEngine.map((item, index)=>(
                            <option value={item.value}>{item.label}</option>
                        ))}
                </InputSelect>
                {engineError && (
                     <ErrorLabel>{engineError}</ErrorLabel>
                )}
            </InputWrap> */}
            <InputWrap>
                { cursorPointer === 'vin' && (
                    <StaticImage src="../../../assets/images/landing/cursor-arrow.png" className="curson-pointer" />
                )}
                <InputLabel htmlFor="vin">VIN - Vehicle Identification Number (optional): </InputLabel>
                <input
                     aria-labelledby="vin number"
                    type="text"
                    placeholder='VIN Number'
                    id="vin-number"
                    className="custominput"
                    value={vin}
                    onChange={(e) => ddlVinChange(e)}
                    onMouseUp={e=>setCursorPointer('vin')}
                    />
                
            </InputWrap>
            
            <InputWrap>
                { cursorPointer === 'comment' && (
                    <StaticImage src="../../../assets/images/landing/cursor-arrow.png" className="curson-pointer" />
                )}
                    <InputLabel htmlFor="size">Enter Any Special Notes For this part (Size Variation) Special Notes:</InputLabel>
                        <textarea
                        className="custominput" 
                        aria-labelledby="size"
                        rows="4" cols="50" name="comment"
                        form="usrform"
                        placeholder="Enter here..."
                        onChange={(e) => ddlTxtChange(e)}
                        onMouseUp={e=>setCursorPointer('comment')}
                        ></textarea>
                    
            </InputWrap>
            <div className="form_button_outer">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                    {/* <button className="btn2 d-flex align-items-center justify-content-center" onClick={onClick} ><span>FIND MY PART NOW</span><InputBg img={arrowIcon}>&nbsp;&nbsp;</InputBg></button> */}
                    <button
                    onClick={clickPrevFunction}
                    className="btn-outer-new text-center d-flex justify-content-center align-items-center"
                    type="button"><InputBgPrev img={arrowRightIcon}>&nbsp;</InputBgPrev><span>Previous Step</span></button>
                    </div>
                    <div className="col-md-6 col-sm-6">
                    {stepBtnEnable === true && <button type="button" className="btn2 d-flex align-items-center justify-content-center" onClick={onClickToThree} ><span>NEXT STEP</span><InputBg img={arrowIcon}>&nbsp;</InputBg></button>}
                    </div>
                </div>
            </div>
        </InputWrapper>
    )
}

export default StepTwo

const ErrorLabel = styled.label`
    padding:0px;
    margin:-2px 0px 0px;
    font-size:12px !important;
    line-height:14px !important;
    color:#ff0000 !important;
`

const InputWrapper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 0rem;
  margin:-8px 0rem 0rem;
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
    margin-left:8px;
`
const InputBgPrev = styled.span`
    display: inline-block;
    color:transparent !important;
    background-position:center center;
    background-size: auto auto !important;
    background-image: url(${(props)=>props.img});  
    background-repeat: no-repeat;
    width:18px !important;
    height:18px !important;
    margin-right:8px;
`
const InputWrap = styled.div`
  margin: 0.4rem 0rem;
  width: 100%;
  input, textarea {
    padding: 1.3rem 9px !important;
    outline: none;
    width: 100%;
    height: 20px;    
    border-radius:5px;
  }
  input{
    margin:3px 0px !important;
  }
  textarea {
    height: 60px;
    margin:5px 0px;
    padding: 9px !important;
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
    line-height: 20px !important;
    padding:0px !important;
    margin:0px !important;
`
const InputSelect = styled.select`
    background-image: url(${darrowIcon});  
    background-repeat: no-repeat;
    background-position:center right 10px;
    background-size : 14px 8px;
    width:100%;
    margin:3px 0px;
    background-color:#ffffff;
    font-size: 16px !important;
    color: #000000 !important;
    ${props => props.active ? 'border: 1px solid #2860BE !important;' : 'border: 1px solid #CFCFCF !important;'}
    
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
`   

const TitleDiv = styled.div`  
  width:100%;
  float:left;
  background: #ffffff;  
  margin: 0px 0px 10px;
  text-align: start;
  h4{
    margin: 0px 0px 6px;
    color: #08275C;
    font-weight: 500;
    font-size: 18px;
    line-height:23px;
  }
  @media (min-width: 360px) {
    height: 30px;
  }
  @media (max-width: 360px) {
    h4{
        line-height:1.2 !important;
        float:left;
        width:100%;
        overflow:hidden;
      }
  }
`