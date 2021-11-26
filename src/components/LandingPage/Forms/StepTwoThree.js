import React, { useEffect, useState } from 'react'
import Loader from "react-loader-spinner";
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import ReCAPTCHA from "react-google-recaptcha";
import { Field, Formik } from 'formik';  
import * as yup from 'yup';  
import axios from '../../../axios'
import ToolTip from './ToolTip';
import arrowIcon from '../../../assets/images/landing/arrow.png'
import arrowRightIcon from '../../../assets/images/landing/arrow-right.png'
import darrowIcon from '../../../assets/images/landing/d-icon.png'

import { useStateValue } from '../../../StateProvider'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = yup.object().shape({  
    name: yup  
     .string()  
     .required('Please enter you Name'),  
     email: yup  
     .string()  
     .email('Email should be in the format username@domain.com'), 
    zip: yup  
     .string()  
     .required('Please enter Zip Code'),
    phone: yup.string()
    .required('Please enter a valid phone number')
 }); 



const StepTwoThree = ({setInStack, setPartsHeading, onClickToFour, onClickToOne}) => {
    const [isPhoneError, setIsPhoneError] = useState('');
    const [option1Valid, setOption1Valid] = useState(false);
    const [option1Error, setOption1Error] = useState();
    const [option2Valid, setOption2Valid] = useState(false);
    const [option2Error, setOption2Error] = useState();

    const [cursorPointer, setCursorPointer] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [trims, setTrims] = useState();
    const [{ year, make, model, part, transmission, trim, stepBtnEnable }, dispatch] = useStateValue()
    const initialValues = {  
        name: '',  
        email: '',  
        zip: '',  
        phone: undefined,
        option1: '',  
        option2: ''
      }      
      const fetchTrims = (e) => {
        //console.log('YEAR ', year, 'SELECTED MODEL ', model);
        axios
            .get("v1/trim/" + year + "/" + model)
            .then(resp => {
                let ddlOptions = [{ "value": "999", "label": "I’m not sure."}]
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
    useEffect(() => {
        dispatch({
            type: 'ADD_STEP_ONE',
            item: ''
        });
        dispatch({
            type: 'ADD_STEP_TWO',
            item: ''
        });
        dispatch({
            type: 'ADD_STEP_THREE',
            item: 'THREE'
        });
        dispatch({
            type: 'ADD_BTN_ENABLE',
            item: false,
        });
        setInStack(' ✓ In Stock ')
        setPartsHeading(year +' '+ make +' '+ model +' '+ part)
        fetchTrims()
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
        //console.log('Cursor Pointer', stepBtnEnable)
    }, [cursorPointer, year, make, model, part, transmission, trim])

    const optionsTransmission = [
        { value: '1', label: '2 Wheel Drive, Automatic' },
        { value: '2', label: '4 Wheel Drive, Automatic' },
        { value: '3', label: '2 Wheel Drive, Manual' },
        { value: '4', label: '4 Wheel Drive, Manual' },
        { value: '8', label: 'Other, Not listed here' },
        { value: '9', label: "I'm not sure" }
    ]

    const ddlTrimChange = (e) => { 
        setCursorPointer('option2')
        dispatch({
            type: 'ADD_TRIM',
            item: e.label,
        });
    }
    const ddlTransmissionChange = (e) => {   
        setCursorPointer('')     
        dispatch({
            type: 'ADD_TRANS',
            item: e.label,
        });
    }

    const clickPrevFunction = (e) => {
        dispatch({
            type: 'ADD_STEP_ONE',
            item: ''
        });
        dispatch({
            type: 'ADD_STEP_TWO',
            item: 'TWO'
        });
        dispatch({
            type: 'ADD_STEP_THREE',
            item: '',
        });
        onClickToOne()
    }

    const ddlNameChange = (e) => {
        dispatch({
            type: 'ADD_NAME',
            item: e.target.value,
        });
    }

    const ddlEmailChange = (e) => {
        dispatch({
            type: 'ADD_EMAIL',
            item: e.target.value,
        });
        dispatch({
            type: 'ADD_BTN_ENABLE',
            item: true,
        });
    }

    const ddlPhoneChange = (e) => {
        dispatch({
            type: 'ADD_PHONE',
            item: e.target.value,
        });
    }

    const ddlZipChange = (e) => {
        dispatch({
            type: 'ADD_ZIP',
            item: e.target.value,
        });
    }

    const submitForm = (values) => {
        setIsSubmitting(true)
        onClickToFour();
      };
      const checkInput = (e) => {        
        if (!/[0-9]/.test(e.target.value)) {
            setIsPhoneError('Phone number should be of 10 digits with no special characters')
        }
        else
        {
            if (e.target.value.length < 10 || e.target.value.length > 10) {
                setIsPhoneError('Phone number should be of 10 digits with no special characters')
            }
            else
            {
                setIsPhoneError('')   
            }
        }        
      };
    return(
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
        } = formik;
        return (
              <form onSubmit={handleSubmit}>
                <InputWrapper>
                    <TitleDiv>
                        <h4 className="w-100 mb-1">For Quotes and Assistance</h4>
                    </TitleDiv>
                    <InputWrap>
                { cursorPointer === 'option1' && (
                    <StaticImage src="../../../assets/images/landing/cursor-arrow.png" className="curson-pointer" />
                )}
                <InputLabel htmlFor="trim">Option 1 (Optional)</InputLabel>
                <InputSelect
                    active={cursorPointer === 'option1' && 'true'}
                    onChange={(e) => ddlTrimChange(e)} 
                    onMouseDown={e=>setCursorPointer('option1')}
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
                    onMouseDown={e=>setCursorPointer('option2')}
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
                    <InputWrap>
                        <InputLabel htmlFor="name">NAME *</InputLabel>
                        <Field
                            name="name"
                            value={values.name}
                            render={({ field, form }) => (
                                <input
                                    aria-labelledby="name"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    onBlur={handleBlur}
                                    placeholder="Name"
                                    className="custominput"
                                    onChange={e => {
                                        handleChange(e);
                                        ddlNameChange(e)                                                         
                                    }}
                                />                            
                            )}
                        />
                        
                        {errors.name && touched.name && (
                            <ErrorLabel>{errors.name}</ErrorLabel>
                        )}
                    </InputWrap>
                    <InputWrap>
                        <InputLabel htmlFor="email" className="d-flex justify-content-start align-items-md-center align-items-sm-start">
                            <span className="mr-2">EMAIL * (FOR QUOTE ONLY)</span>
                            <ToolTip title="?" content="So we can send the lowest prices filtered with your Zip code- from our inventory and from our Nationwide Parts Locator Tool"/>
                            {/* <DialogToolTip content="We will send the lowest prices from our inventory and from our Nationwide Parts Locator Tool"/> */}
                        </InputLabel> 
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={values.email}
                                onChange={e => {
                                    handleChange(e);
                                    ddlEmailChange(e)                                                 
                                }}
                            placeholder="Email"
                            aria-labelledby="email"
                        />
                        
                        
                        {errors.email && touched.email && (
                            <ErrorLabel>{errors.email}</ErrorLabel>
                        )}
                    </InputWrap>
                </InputWrapper>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <InputWrap>
                        <InputLabel htmlFor="phone" className="d-flex justify-content-start align-items-center">
                            <span className="mr-2">PHONE * (For Quote Only)</span>
                            <ToolTip title="Why ?" content="So our parts specialists can ask you and let you know about different interchange options for your part and decode your VIN for free"/>
                        </InputLabel> 
                        <input
                                className="custominput"
                                aria-labelledby="phone"
                                type="tel"
                                name="phone"
                                pattern="[0-9]*"
                                placeholder='Phone'
                                id="phone"
                                value={values.phone}                                
                                    onChange={e => {
                                        checkInput(e);
                                        handleChange(e);
                                        ddlPhoneChange(e);                                                                                   
                                    }}
                                
                            />
                            { isPhoneError ? (
                                <ErrorLabel>{isPhoneError}</ErrorLabel>
                            ) : (
                                errors.phone && touched.phone && (
                                    <ErrorLabel>{errors.phone}</ErrorLabel>
                                )
                            )}
                        </InputWrap>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <InputWrap>
                        <InputLabel htmlFor="zip">ZIP * (FOR QUOTE ONLY)</InputLabel>
                            <input
                                className="custominput"
                                aria-labelledby="zip" 
                                type="text"
                                name="zip"
                                placeholder='Zipcode'
                                id="zip"
                                value={values.zip}
                                    onChange={e => {
                                        handleChange(e);
                                        ddlZipChange(e)                                       
                                    }}
                                
                            />
                        
                            {errors.zip && touched.zip && (
                                <ErrorLabel>{errors.zip}</ErrorLabel>
                            )}
                        </InputWrap>
                    </div>
                </div>
                
                <div className="form_button_outer">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                        <button
                        onClick={clickPrevFunction}
                        className="btn-outer-new text-center d-flex justify-content-center align-items-center"
                        type="button"><InputBgPrev img={arrowRightIcon}>&nbsp;</InputBgPrev><span>Previous Step</span></button>
                        </div>
                        <div className="col-md-6 col-sm-6">
                        {stepBtnEnable === true ? (
                            <button
                            type="submit"
                            className="btn2 d-flex align-items-center justify-content-center"
                            disabled={isSubmitting}
                            >
                                { isSubmitting && (
                                    <Loader
                                        type="Oval"
                                        color="#FFFFFF"
                                        height={20}
                                        width={20}
                                        timeout={300000}
                                    />
                                )}  
                                { !isSubmitting && (
                                    <>
                                    <span className="mr-2">FIND MY PART NOW</span>
                                    <InputBg img={arrowIcon}>&nbsp;</InputBg>
                                    </>
                                )}  

                        </button>
                        ) 
                         : 
                         (
                            <button
                            type="button"
                            className="btn2 disabled d-flex align-items-center justify-content-center"
                            disabled={isSubmitting}
                            >
                             <span className="mr-2">FIND MY PART NOW</span>
                             <InputBg img={arrowIcon}>&nbsp;</InputBg> 

                        </button>
                         )
                        }
                        
                        </div>
                    </div>
                </div>
              </form>
        );
      }}
    </Formik>
    )
        

    
}


export default StepTwoThree

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
  margin: 0.2rem 0rem;
  padding:0px;
  width: 100%;
  input{padding: 1.2rem 0.5rem;}
  input,textarea{    
    outline: none;
    width: 100%;
    height: 20px;
    border-radius:3px;
    border:1px solid #CCCCCC;
    margin:0rem 0rem 0.3rem 0rem;
  }
  textarea {
    height: 60px;
    padding: 0.5rem;
  }  
  position:relative;
  .curson-pointer{
    position:absolute;
    top:30px !important;
    left:-45px !important;
    z-index:999 !important;
}
`
const ErrorLabel = styled.label`
    padding:0px;
    margin:-5px 0px 0px;
    font-weight:400 !important;
    font-size:10px !important;
    line-height:15px !important;
    color:#FF7979 !important;
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
  @media (min-width: 480px) {
    height: 30px;
  }
  margin: 0px 0px 3px;
  text-align: start;
  h4{
    margin: 0px 0px 6px;
    color: #08275C;
    font-weight: 500;
    font-size: 18px;
    line-height:23px;
  }
  @media (max-width: 480px) {
    h4{
        line-height:1.2 !important;
        float:left;
        width:100%;
        overflow:hidden;
      }
  }
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
const InputWrapLoading = styled.div`
    width:400px;
    position:absolute;
    top:30px !important;
    left:10px !important;
    z-index:999 !important;
`