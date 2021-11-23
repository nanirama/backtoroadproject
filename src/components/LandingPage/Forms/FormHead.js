import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const FormHead = ({setInStack, onClick}) => {
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
                onMouseUp={handleYearChange}
                aria-label="years"
                aria-labelledby="years"
                >
                    <option disabled selected>SELECT YEAR</option>
                    { allyears && allyears.map((item, index)=>(
                        <option value={item.value}>{item.label}</option>
                    ))}
                </InputSelect>
            </InputWrap>                
            <InputWrap>
                { cursorPointer === 'make' && (
                    <StaticImage src="../../../assets/images/landing/cursor-arrow.png" className="curson-pointer" />
                )}
                <InputLabel htmlFor="make">Make * </InputLabel>  
                <InputSelect
                    active={cursorPointer === 'make' && 'true'}
                    onChange={(e) => fetchModels(e)}
                    onMouseUp={handleMakeChange}
                    aria-label="makes"
                    aria-labelledby="makes"
                    >
                        <option disabled selected>SELECT MAKE</option>
                        { allmakes && allmakes.map((item, index)=>(
                            <option value={item.value}>{item.label}</option>
                        ))}
                </InputSelect>  
            </InputWrap>
            <InputWrap>
                { cursorPointer === 'model' && (
                    <StaticImage src="../../../assets/images/landing/cursor-arrow.png" className="curson-pointer" />
                )}
                <InputLabel htmlFor="model">Model *</InputLabel>
                <InputSelect
                    active={cursorPointer === 'model' && 'true'}
                    onChange={(e) => fetchParts(e)}
                    onMouseUp={handleModelChange}
                    aria-label="models"
                    aria-labelledby="models"
                    >
                        <option disabled selected>SELECT MODEL</option>
                        { allmodels && allmodels.map((item, index)=>(
                            <option value={item.value}>{item.label}</option>
                        ))}
                </InputSelect>       
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
                    >
                        <option disabled selected>SELECT PART</option>
                        { allparts && allparts.map((item, index)=>(
                            <option value={item.value}>{item.label}</option>
                        ))}
                        
                </InputSelect>       
            </InputWrap>
            <div className="button_outer">
                    {stepOne !== '' ? (stepBtnEnable == true ? <button className="btn2 d-flex align-items-center justify-content-center" onClick={onClick} ><span>FIND MY PART NOW</span><InputBg img={arrowIcon}>&nbsp;</InputBg></button> : <button type="button" img={arrowIcon} className="btn2 d-flex align-items-center justify-content-center" onClick={onClick} disabled><span>FIND MY PART NOW</span><InputBg img={arrowIcon}>&nbsp;</InputBg></button> ): null}
             </div>
        </InputWrapper>
    )
}

export default FormHead

