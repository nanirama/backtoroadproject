import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from '../components/LandingPage/common/layout'
import Seo from "../components/seo"
import Image from '../components/LandingPage/image'
import ContentModalBox from '../components/LandingPage/Forms/ContentModalBox'
import LandingBanner from '../components/LandingPage/LandingBanner';
import '../components/LandingPage/css/custom.css'
import { Field, Formik } from 'formik';  
import { FocusError } from 'focus-formik-error'
import * as yup from 'yup';  


const validationSchema = yup.object().shape({  
   quote: yup  
    .string()  
    .required('Please enter the Quote Number from the Quote sent to your email'),   
    password: yup  
    .string()  
    .required('Please enter Password'), 
    email: yup  
    .string()  
    .required('Please enter the email address to which we sent you the quote')  
    .email('Enter valid email address'), 
   shippingFirstname: yup  
    .string()  
    .required('Please enter First Name'),   
   shippingLastname: yup  
    .string()  
    .required('Please enter Last Name'), 
   shippingAddress: yup  
    .string()  
    .required('Please enter Address'),
   shippingCity: yup  
    .string()  
    .required('Please enter City'),
   shippingState: yup  
    .string()  
    .required('Please enter State'),
   shippingZipcode: yup  
    .string()  
    .required('Please enter Zipcode'),
   shippingPhone: yup  
    .number()
    .required('Please enter Phone Number'),
    billingFirstname: yup  
    .string()  
    .required('Please enter First Name'),   
   billingLastname: yup  
    .string()  
    .required('Please enter Last Name'), 
   billingAddress: yup  
    .string()  
    .required('Please enter Address'),
   billingCity: yup  
    .string()  
    .required('Please enter City'),
   billingState: yup  
    .string()  
    .required('Please enter State'),
   billingZipcode: yup  
    .string()  
    .required('Please enter Zipcode'),
   billingPhone: yup  
    .number()
    .required('Please enter Phone Number'),
   cardNumber: yup  
    .number()
    .required('Please enter Card Number'),
   cardName: yup  
    .string()
    .required('Please enter Card Name'),
   cardMonthYear: yup  
    .string()
    .required('Please enter Card Month and Year'),
   cardCvv: yup  
    .number()
    .required('Please enter Cvv Number'),
}); 


const Payment = (props) => { 
  const initialValues = {  
    quote: '',  
    email: '', 
    password: '',
    shippingFirstname: '',  
    shippingLastname: '',  
    shippingAddress: '',  
    shippingCity: '',  
    shippingState: '',  
    shippingZipcode: '',  
    shippingPhone: undefined,  
    billingFirstname: '',  
    billingLastname: '',  
    billingAddress: '',  
    billingCity: '',  
    billingState: '',  
    billingZipcode: '',  
    billingPhone: undefined,  
    cardNumber: undefined,  
    cardName: '',
    cardMonthYear: '',
    cardCvv: undefined,  
  }
  const submitForm = (values) => {
    console.log(values);
  };

     const [formValid, setFormValid] = useState(false);
     const [modalShow1, setModalShow1] = useState(false);
     const [modalShow2, setModalShow2] = useState(false);

     const [checked, setChecked] = useState(false);

     const [shippingFirstname, setShippingFirstname] = useState(null);
     const [shippingLastname, setShippingLastname] = useState(null);
     const [shippingAddress, setShippingAddress] = useState(null);
     const [shippingCity, setShippingCity] = useState(null);
     const [shippingState, setShippingState] = useState(null);
     const [shippingZipcode, setShippingZipcode] = useState(null);
     const [shippingPhone, setShippingPhone] = useState(null);


    //  const [billingFirstname, setBillingFirstname] = useState(null);
    //  const [billingLastname, setBillingLastname] = useState(null);
    //  const [billingAddress, setBillingAddress] = useState(null);
    //  const [billingCity, setBillingCity] = useState(null);
    //  const [billingState, setBillingState] = useState(null);
    //  const [billingZipcode, setBillingZipcode] = useState(null);
    //  const [billingPhone, setBillingPhone] = useState(null);

    // const handleCheck = (e) => {
    //   setChecked(true);
    // }
     const {site, usStates, BannerImage, pageBanner, pageBannerM, pLogo1, pLogo2, pLogo3, pLogo4 } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
                siteUrl
              }
            }
            usStates : allUsstatesJson(sort: {fields: name, order: ASC}) {
              edges {
                node {
                  name
                  abbreviation
                  id
                }
              }
            }
            BannerImage: file(relativePath: { eq: "landing/ban_img.png" }) {
              childImageSharp {
                  gatsbyImageData(
                      width: 300
                  )
              }
            }
            pageBanner: file(relativePath: { eq: "part-banner.jpg" }) {
                childImageSharp {
                    fluid(quality: 100, webpQuality: 100, maxWidth: 1920) {
                        srcWebp
                      }
                }
            }
            pageBannerM: file(relativePath: { eq: "part-banner_mobile.jpg" }) {
              childImageSharp {
                fluid(quality: 100, webpQuality: 100, maxWidth: 768) {
                    srcWebp
                  }
              }
            } 
            pLogo1: file(relativePath: { eq: "authorize-net-logo.png" }) {
              childImageSharp {
                gatsbyImageData(width: 150, quality: 100)
              }
            } 
            pLogo2: file(relativePath: { eq: "elavon_logo.png" }) {
              childImageSharp {
                gatsbyImageData(width: 150, quality: 100)
              }
            } 
            pLogo3: file(relativePath: { eq: "mcafee.png" }) {
              childImageSharp {
                gatsbyImageData(width: 150, quality: 100)
              }
            } 
            pLogo4: file(relativePath: { eq: "visa-mastercard-amex.png" }) {
              childImageSharp {
                gatsbyImageData(width: 150, quality: 100)
              }
            } 
          }
        `
      )
    const pageBimg = pageBanner.childImageSharp.fluid.srcWebp
    const pageMimg = pageBannerM.childImageSharp.fluid.srcWebp
    const siteURL = site.siteMetadata.siteUrl 

    return (
      <Layout pdata={props}>
         <Seo
            title="Payment | BackToRoad Auto Parts"
            description="Find Details On Our Shipping And Handling Policies For Used Auto Parts."
            cpath = {props.location.pathname}
        /> 
        <PageBannerDiv className="w-100 float-left text-center page-header" img={pageBimg} mimg={pageMimg}>
            <div className="container">
                <h1 className="page-title text-uppercase text-white">Payment</h1>
                <div className="breadcrumb w-100 float-left border-0 p-0">
                  <ol className="d-flex" itemscope itemScope itemtype="https://schema.org/BreadcrumbList">
                      <li
                          itemprop="itemListElement"                
                          itemScope
                          itemtype="https://schema.org/ListItem"
                      >
                      <Link
                                  itemprop="item" 
                                  to={siteURL}                                               
                              ><span itemprop="name">Home</span></Link>
                              <meta itemprop="position" content={1} />
                      </li>
                      <li className="text-uppercase"
                          itemprop="itemListElement"
                          itemscope
                          itemScope
                          itemtype="https://schema.org/ListItem"
                      >
                      <span itemprop="name">Payment</span>
                      <meta itemprop="position" content={2} />                        
                      </li>
                  </ol>
                </div>
            </div>
        </PageBannerDiv> 
        <div className="container-fluid mt-5 my-3 float-left">
        <div className="row">
        <div className="container">
          <div className="row d-flex justify-content-between">
            
            <div className="col-lg-8 col-xs-12 px-2">
            <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur
        } = formik;
        return (
          <div className="payment payment-form px-md-4 pb-md-4 px-2 pb-2 w-100 float-left">
              <form onSubmit={handleSubmit}>
              <FocusError formik={formik} />
                <div className="row my-3">
                    <div className="col-md-12 col-xs-12">
                       <h4 className="mb-4">Quote</h4>
                    </div>
                    <div className="col-md-6 col-xs-12 mb-2">
                      <input
                        type="text"
                        name="quote"
                        id="quote"
                        value={values.quote}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Quote Number"
                        className="form-control py-4 mb-1"
                      />
                      {errors.quote && touched.quote && (
                        <span className="text-error">{errors.quote}</span>
                      )}
                      { !errors.quote && !touched.quote && (
                        <span>Please enter the Quote Number from the Quote sent to your email</span>
                      )}
                    </div>
                    <div className="col-md-6 col-xs-12 mb-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Email Address"
                          className="form-control py-4 mb-1"
                      />
                      {errors.email && touched.email && (
                        <span className="text-error">{errors.email}</span>
                      )}
                      { !errors.email && !touched.email && (
                        <span>Please enter the email address to which we sent you the quote</span>
                      )}
                    </div>
                    <div className="col-md-12 col-xs-12">
                      <h4 className="mb-4">Shipping Address</h4>
                    </div>
                    <div className="col-md-6 col-xs-12 mb-2">
                      <Field
                        name="shippingFirstname"
                        value={values.shippingFirstname}
                        render={({ field, form }) => (
                          <input
                          placeholder="Firstname"
                          className="form-control py-4 mb-1"
                            {...field}
                            onChange={e => {
                              handleChange(e)
                              setShippingFirstname(e.target.value)
                              checked && form.setFieldValue('billingFirstname', e.target.value)                       
                            }}
                          />
                        )}
                      />
                      {errors.shippingFirstname && touched.shippingFirstname && (
                        <span className="text-error">{errors.shippingFirstname}</span>
                      )}
                    </div>
                    <div className="col-md-6 col-xs-12 mb-2">
                      <Field
                        name="shippingLastname"
                        value={values.shippingLastname}
                        render={({ field, form }) => (
                          <input
                          placeholder="Lastname"
                          className="form-control py-4 mb-1"
                            {...field}
                            onChange={e => {
                              handleChange(e)
                              setShippingLastname(e.target.value)
                              checked && form.setFieldValue('billingLastname', e.target.value)                       
                            }}
                          />
                        )}
                      />
                      {errors.shippingLastname && touched.shippingLastname && (
                        <span className="text-error">{errors.shippingLastname}</span>
                      )}
                    </div>
                    <div className="col-md-12 col-xs-12 mb-2">
                      <Field
                          name="shippingAddress"
                          value={values.shippingAddress}
                          render={({ field, form }) => (
                            <input
                            placeholder="Address"
                            className="form-control py-4 mb-1"
                              {...field}
                              onChange={e => {
                                handleChange(e)
                                setShippingAddress(e.target.value)
                                checked && form.setFieldValue('billingAddress', e.target.value)                       
                              }}
                            />
                          )}
                        />
                        {errors.shippingAddress && touched.shippingAddress && (
                          <span className="text-error">{errors.shippingAddress}</span>
                        )}
                    </div>
                    <div className="col-md-6 col-xs-12 mb-2">
                      <Field
                        name="shippingCity"
                        value={values.shippingCity}
                        render={({ field, form }) => (
                          <input
                          placeholder="City"
                          className="form-control py-4 mb-1"
                            {...field}
                            onChange={e => {
                              handleChange(e)
                              setShippingCity(e.target.value)
                              checked && form.setFieldValue('billingCity', e.target.value)                       
                            }}
                          />
                        )}
                      />
                      {errors.shippingCity && touched.shippingCity && (
                        <span className="text-error">{errors.shippingCity}</span>
                      )}
                    </div>
                    <div className="col-md-6 col-xs-12 mb-2">
                      <Field
                        name="shippingState"
                        value={values.shippingState}
                        render={({ field, form }) => (
                          <Select
                            {...field}
                            onChange={e => {
                              handleChange(e)
                              setShippingState(e.currentTarget.value)
                              checked && form.setFieldValue('billingState', e.currentTarget.value)                       
                            }}
                          >
                            { usStates.edges.map((item,index)=>{
                              return(
                                <option value={item.node.abbreviation} label={item.node.name} selected />
                              )
                            })}                           
                            
                        </Select>
                        )}
                      />
                      {errors.shippingState && touched.shippingState && (
                        <span className="text-error">{errors.shippingState}</span>
                      )}
                    </div>
                    <div className="col-md-6 col-xs-12 mb-2">
                      <Field
                        name="shippingZipcode"
                        value={values.shippingZipcode}
                        render={({ field, form }) => (
                          <input
                          placeholder="Zipcode"
                          className="form-control py-4 mb-1"
                            {...field}
                            onChange={e => {
                              handleChange(e)
                              setShippingZipcode(e.target.value)
                              checked && form.setFieldValue('billingZipcode', e.target.value)                       
                            }}
                          />
                        )}
                      />
                      {errors.shippingZipcode && touched.shippingZipcode && (
                        <span className="text-error">{errors.shippingZipcode}</span>
                      )}
                    </div>
                    <div className="col-md-6 col-xs-12 mb-2">
                      <Field
                        name="shippingPhone"
                        value={values.shippingPhone}
                        render={({ field, form }) => (
                          <input
                          placeholder="Phone Number"
                          className="form-control py-4 mb-1"
                            {...field}
                            onChange={e => {
                              handleChange(e)
                              setShippingPhone(e.target.value)
                              checked && form.setFieldValue('billingPhone', e.target.value)                       
                            }}
                          />
                        )}
                      />
                      {errors.shippingPhone && touched.shippingPhone && (
                        <span className="text-error">{errors.shippingPhone}</span>
                      )}
                    </div>
                </div>
                <div className="row my-3">
                  <div className="col-md-6 col-xs-12 d-flex justify-content-start align-items-center">
                  <Field
                    name="billing_same_as"
                    value={values.billing_same_as}
                    render={({ field, form }) => (
                      <Checkbox
                        {...field}
                        onChange={e => {
                          setChecked(!checked);                          
                          !checked && form.setFieldValue('billingFirstname', shippingFirstname)  
                          !checked && form.setFieldValue('billingLastname', shippingLastname)  
                          !checked && form.setFieldValue('billingAddress', shippingAddress)  
                          !checked && form.setFieldValue('billingCity', shippingCity)  
                          !checked && form.setFieldValue('billingState', shippingState)  
                          !checked && form.setFieldValue('billingZipcode', shippingZipcode)  
                          !checked && form.setFieldValue('billingPhone', shippingPhone)                       
                        }}
                      />
                    )}
                  />
                    <label for="tracking" className="w-auto float-left pl-2">Billing Address same as Shipping Address.</label>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-md-12 col-xs-12">
                    <h4 className="mb-4">Billing Address</h4>
                  </div>
                  <div className="col-md-6 col-xs-12 mb-2">
                      <input
                        type="text"
                        name="billingFirstname"
                        id="billingFirstname"
                        value={values.billingFirstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Firstname"
                        className="form-control py-4 mb-1"
                      />
                      {errors.billingFirstname && touched.billingFirstname && (
                        <span className="text-error">{errors.billingFirstname}</span>
                      )}
                  </div>
                  <div className="col-md-6 col-xs-12 mb-2">
                      <input
                        type="text"
                        name="billingLastname"
                        id="billingLastname"
                        value={values.billingLastname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Lastname"
                        className="form-control py-4 mb-1"
                      />
                      {errors.billingLastname && touched.billingLastname && (
                        <span className="text-error">{errors.billingLastname}</span>
                      )}
                  </div>
                   <div className="col-md-12 col-xs-12 mb-2">
                    <input
                        type="text"
                        name="billingAddress"
                        id="billingAddress"
                        value={values.billingAddress}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Address"
                        className="form-control py-4 mb-1"
                      />
                      {errors.billingAddress && touched.billingAddress && (
                        <span className="text-error">{errors.billingAddress}</span>
                      )}
                    </div>
                    <div className="col-md-6 col-xs-12 mb-2">
                        <input
                          type="text"
                          name="billingCity"
                          id="billingCity"
                          value={values.billingCity}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="City"
                          className="form-control py-4 mb-1"
                        />
                        {errors.billingCity && touched.billingCity && (
                          <span className="text-error">{errors.billingCity}</span>
                        )}
                    </div>
                    <div className="col-md-6 col-xs-12 mb-2">
                        <Select
                          name="billingState"
                          id="billingState"
                          value={values.billingState}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          { usStates.edges.map((item,index)=>{
                                return(
                                  <option value={item.node.abbreviation} label={item.node.name} />
                                )
                            })}     
                          </Select>
                        {errors.billingState && touched.billingState && (
                          <span className="text-error">{errors.billingState}</span>
                        )}
                    </div>
                    <div className="col-md-6 col-xs-12 mb-2">
                        <input
                          type="text"
                          name="billingZipcode"
                          id="billingZipcode"
                          value={values.billingZipcode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Zipcode"
                          className="form-control py-4 mb-1"
                        />
                        {errors.billingZipcode && touched.billingZipcode && (
                          <span className="text-error">{errors.billingZipcode}</span>
                        )}
                    </div>
                    <div className="col-md-6 col-xs-12 mb-2">
                        <input
                          type="text"
                          name="billingPhone"
                          id="billingPhone"
                          value={values.billingPhone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Phone Number"
                          className="form-control py-4 mb-1"
                        />
                        {errors.billingPhone && touched.billingPhone && (
                          <span className="text-error">{errors.billingPhone}</span>
                        )}
                    </div>
                </div>
                <div className="row my-3">
                  <div className="col-md-12 col-xs-12">
                    <h4 className="mb-4">Payment Method</h4>
                  </div>
                  <div className="col-md-12 col-xs-12 mb-2">
                      <input
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          value={values.cardNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Card Number"
                          className="form-control py-4 mb-1"
                        />
                        {errors.cardNumber && touched.cardNumber && (
                          <span className="text-error">{errors.cardNumber}</span>
                        )}
                  </div>
                  <div className="col-md-6 col-xs-12 mb-2">
                      <input
                          type="text"
                          name="cardName"
                          id="cardName"
                          value={values.cardName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Card Name"
                          className="form-control py-4 mb-1"
                        />
                        {errors.cardName && touched.cardName && (
                          <span className="text-error">{errors.cardName}</span>
                        )}
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 mb-2">
                      <input
                          type="text"
                          name="cardMonthYear"
                          id="cardMonthYear"
                          value={values.cardMonthYear}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="MM/YY"
                          className="form-control py-4 mb-1"
                        />
                        {errors.cardName && touched.cardMonthYear && (
                          <span className="text-error">{errors.cardMonthYear}</span>
                        )}
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                      <input
                          type="text"
                          name="cardCvv"
                          id="cardCvv"
                          value={values.cardCvv}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="CVV Number"
                          className="form-control py-4 mb-1"
                        />
                        {errors.cardName && touched.cardCvv && (
                          <span className="text-error">{errors.cardCvv}</span>
                        )}
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 d-flex flex-row justify-content-start align-items-start">
                    <Checkbox onChange={e=>setFormValid(!formValid)} /><span>I have read and agree to the BacktoRoads Company <button onClick={() => setModalShow1(true)} className="popup_link">Terms and Conditions</button> and <button onClick={() => setModalShow2(true)} className="popup_link">Privacy Policy.</button></span>
                    </div>
                    <div className="col-md-6 col-sm-8 col-xs-12 d-flex flex-column text-center align-items-start">
                      <button type="submit"  className="btn2 border-0 my-3 text-center w-100" disabled={!formValid}>Place Order</button>
                    </div>
                </div>
              </form>
            </div>
        );
      }}
    </Formik>
            </div>
            
              
          
          <div className="col-lg-4 col-xs-12 px-2 d-flex flex-sm-column-reverse flex-md-column">
            <div className="ph-blk payment p-4">
              <h5 className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path d="M21.225,17.889c-0.406-0.238-0.905-0.233-1.309,0.007l-2.046,1.219c-0.458,0.273-1.03,0.241-1.45-0.087 c-0.726-0.567-1.895-1.521-2.912-2.538c-1.017-1.017-1.971-2.186-2.538-2.912c-0.328-0.42-0.36-0.992-0.087-1.45l1.219-2.046 c0.241-0.404,0.243-0.907,0.005-1.313L9.105,3.641c-0.291-0.496-0.869-0.74-1.428-0.603C7.134,3.17,6.429,3.492,5.69,4.232 c-2.314,2.314-3.543,6.217,5.159,14.919s12.604,7.474,14.919,5.159c0.741-0.741,1.062-1.447,1.195-1.991 c0.135-0.558-0.105-1.132-0.6-1.422C25.127,20.174,22.461,18.613,21.225,17.889z"></path>
                </svg>
                1.800.608.3868</h5>
              <p className="mb-0">If you have questions, please contact your sales executive, Kory Lonberger. You can also Contact the sales team at 1.800.608.3868 option 2.</p>
            </div>
            <div className="container d-flex justify-content-center my-3 payment-images">
              <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-lg-6 col-md-3 col-sm-6 d-flex justify-content-center align-items-center mb-2">
                  <Image img={pLogo1}/>
                  </div>
                  <div className="col-lg-6 col-md-3 col-sm-6 d-flex justify-content-center align-items-center mb-2">
                  <Image img={pLogo2}/>
                  </div>
                  <div className="col-lg-6 col-md-3 col-sm-6 d-flex justify-content-center align-items-center mb-2">
                  <Image img={pLogo3}/>
                  </div>
                  <div className="col-lg-6 col-md-3 col-sm-6 d-flex justify-content-center align-items-center mb-2">
                  <Image img={pLogo4}/>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        </div>

        <LandingBanner bannerImage={BannerImage}/> 
        <ContentModalBox
                    show={modalShow1}
                    onHide={() => setModalShow1(false)}
        >  
        <h4>Terms and Conditions</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>
        
        </ContentModalBox>
        <ContentModalBox
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
        >  
        <h4>Privacy Policy.</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>
        </ContentModalBox>
        </Layout>
    )
}
const PageBannerDiv = styled.div`    
    @media (max-width: 767px) {
        background-image: url(${props => props.mimg});
        background-size: 100% 100% !important;
        padding:16vw 0;
    }
    @media (min-width: 767px) {
      background-image: url(${props => props.img});
      padding:120px 0;
      background-size: cover;
    }    
    background-repeat:no-repeat;
    background-position:left top;    
`;
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  outline: none;
  width: 20px;
  height: 20px;
  margin-right:10px;
  border-radius: 32px;
  background-color: #fff;
  border: none;
  margin-bottom: 10px;
`
const Select = styled.select`
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  background: white;
  color: #495057;
  padding: 0.1rem 0.5rem !important;
  font-size: 14px;
  & >option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
         border:2px solid red;
       }
`;
export default Payment