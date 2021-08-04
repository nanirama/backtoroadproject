import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Select from 'react-select';

const GetQuoteNow = () => {
    const colourStylesTwo = {
        control: styles => ({ ...styles, backgroundColor: 'white', width: '350px', borderRadius: '10px', alignItems: 'left', }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {           
            return {
                ...styles,
                alignItems: 'left'
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

    return (
        <Container>            
                <SectionHeading css={`padding: 0.8rem 1rem;`}>
                    <SubHeading>
                        Get Quote Now (Complete the following fields to get an Instant Quote)
                    </SubHeading>
                </SectionHeading>
            <Content>
                <SectionColumnOne>
                    <SectionHeading>
                        <SubHeading>Vehicle Specifications</SubHeading>
                    </SectionHeading>
                    <Wrapper>
                        <InputWrap>
                            <InputLabel>Engine *</InputLabel>
                            <Select options={optionsEngine}  styles={colourStylesTwo}/>
                        </InputWrap>
                        <InputWrap>
                            <InputLabel>Transmission *</InputLabel>
                            <Select options={optionsTransmission} styles={colourStylesTwo}/>
                        </InputWrap>
                        <InputWrap>
                            <input
                                type="text" placeholder='VIN Number' id="vin-number"
                            />
                        </InputWrap>
                    </Wrapper>
                </SectionColumnOne>
                <SectionColumnTwo>
                    <SectionHeading>
                        <SubHeading>Your Part</SubHeading>
                    </SectionHeading>
                    <InputWrap>
                        <SubContents>2016,Audi,Audi A6,A/C Compressor</SubContents>
                    </InputWrap>
                </SectionColumnTwo>
            </Content>
            
            <Content>
                <SectionColumn>
                    <SubContents>We work on a nationwide live inventory with millions of parts which keeps updating. Our Senior Auto Parts Specialists will match your vehicle specifications and assist you with a quote.</SubContents>
                    <SectionHeading>
                        <SubHeading>For Quote and assistance</SubHeading>
                        </SectionHeading>
                    <Wrapper>
                        <InputWrap>
                            <InputLabel>Name *</InputLabel>
                            <input
                                type="text" placeholder='Name' id="vin-number"
                            />
                        </InputWrap>
                        <InputWrap>
                            <InputLabel>Phone *</InputLabel>
                            <input
                                type="text" placeholder='Phone' id="qqq"
                            />
                        </InputWrap>
                        <InputWrap>
                            <InputLabel>Email *</InputLabel>
                            <input
                                type="text" placeholder='Email' id="number"
                            />
                        </InputWrap>
                        <InputWrap>
                            <InputLabel>Zip *</InputLabel>
                            <input
                                type="text" placeholder='Zip' id="vin"
                            />
                        </InputWrap>
                        <InputWrap>
                            <InputLabel>State *</InputLabel>
                            <Select options={optionsStates} styles={colourStylesTwo}/>
                        </InputWrap>
                        <Button
                            primary="true"
                            round="true"
                            to="/get-quote-now"
                            data-aos="fade-up"
                            data-aos-delay="350"
                            data-aos-duration="1000"
                        >
                            Get Me a Price
                    </Button>
                    </Wrapper>
                </SectionColumn>
            </Content>
        </Container>
    )
}

export default GetQuoteNow

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
`

const Content = styled.div`
  display: flex;
  flex-flow:row wrap;
  width: 100%;
`
const SectionColumnOne = styled.div`
  line-height: 2;
  margin: 1rem;
  min-width: 450px;
  width: 60%;
  border-radius: 0px;
  transition: 0.2s ease;
  border: thin solid grey;

`
const SectionColumnTwo = styled.div`
  line-height: 2;
  margin: 1rem;
  min-width: 350px;
  width: 30%;
  border-radius: 0px;
  transition: 0.2s ease;
  border: thin solid grey;
`
const SectionColumn = styled.div`
  line-height: 2;
  width: 100%;
  margin: 1rem;
  position: relative;
  border-radius: 0px;
  transition: 0.2s ease;
  border: thin solid grey;

  @media screen and (max-width: 400px) {
    width: 150px;
    height: 200px;
  }
`

const InputWrap = styled.div`
  margin: 0.5rem;
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 12px;
    border: thin solid black;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-flow:row wrap;
  width: 100%;
`

const InputLabel = styled.div``

const SubHeading = styled.h2``

const SubContents = styled.h3`
  padding: 0.2rem 1rem;
`

const SectionHeading = styled.div`
  color: #ffffff;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(312deg,#6dd5ed, #2193b0);
  border: 1px solid rgba(255,255,255,0.20);
  box-shadow: 6px 6px 16px 0 rgba(217,210,200,0.51);
  top:0;
  border-radius: 0px;
  padding: 0.2rem 1rem;
`
