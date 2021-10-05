import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from '../components/LandingPage/common/layout'
import Seo from "../components/seo"
import Image from '../components/LandingPage/image'
import ContentModalBox from '../components/LandingPage/Forms/ContentModalBox'
import LandingBanner from '../components/LandingPage/LandingBanner';
import '../components/LandingPage/css/custom.css'

const Shipping = (props) => { 
     const [modalShow1, setModalShow1] = useState(false);
     const [modalShow2, setModalShow2] = useState(false);
     const shipping_array = [
                              { name: 'firstname', value: null },
                              { name: 'lastname', value: null },
                              { name: 'address', value: null },
                              { name: 'city', value: null },
                              { name: 'state', value: null },
                              { name: 'zipcode', value: null },
                              { name: 'phone', value: null }
                            ]
     const billing_array = [
                              { name: 'firstname', value: null },
                              { name: 'lastname', value: null },
                              { name: 'address', value: null },
                              { name: 'city', value: null },
                              { name: 'state', value: null },
                              { name: 'zipcode', value: null },
                              { name: 'phone', value: null }
                              ]

     const [shipping, setShipping] = useState(shipping_array);
     const [billing, setBilling] = useState(billing_array);
     const [checked, setChecked] = useState(false);
     const handleChange=( eventValue, field, state, setState )=> {
        const values = [...state];
        const valuesData = values.map(item => item.name===field ? { name: field, value: eventValue} : item)
        setState(valuesData);
        console.log('my Values', state)
    }
    const handleCheck = (e) => {
      setChecked(true);
    }
    useEffect(() => {
      if(checked){
        setBilling(shipping)
      }
      console.log('Billing Address', billing)
    }, [checked, shipping, billing, setBilling]);
     const {site, BannerImage, pageBanner, pageBannerM, pLogo1, pLogo2, pLogo3, pLogo4 } = useStaticQuery(
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
            <div className="payment payment-form px-md-4 pb-md-4 px-2 pb-2 w-100 float-left">
              
            <div className="row my-3">
            <div className="col-md-12 col-xs-12">
                <h4 className="mb-4">Quote</h4>
               </div>
               <div className="col-md-6 col-xs-12">
                  <input type="text" name="quote_number"
                  placeholder="Quote Number"
                  className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-6 col-xs-12">
                  <input type="text" name="email"
                  placeholder="Email Address" className="form-control py-4 mb-3"/>
                </div>
              <div className="col-md-12 col-xs-12">
                <h4 className="mb-4">Shipping Address</h4>
               </div>
                <div className="col-md-6 col-xs-12">
                  <input type="text" name="shipping_firstname"
                  onChange={e=>handleChange(e.target.value, 'firstname', shipping, setShipping)}
                  placeholder="First Name"
                  className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-6 col-xs-12">
                  <input type="text" name="shipping_lastname"
                  onChange={e=>handleChange(e.target.value, 'lastname', shipping, setShipping)}
                  placeholder="Last Name" className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-12 col-xs-12">
                  <input type="text" name="shipping_address"
                  onChange={e=>handleChange(e.target.value, 'address', shipping, setShipping)}
                  placeholder="Street Addess" className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-6 col-xs-12">
                  <input type="text" name="shipping_city"
                  onChange={e=>handleChange(e.target.value, 'city', shipping, setShipping)}
                  placeholder="City" className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-6 col-xs-12">
                  <select name="shipping_state"  class="form-control mb-3"
                  onChange={e=>handleChange(e.currentTarget.value, 'state', shipping, setShipping)}>
                    <option>Select State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                  </select>
                </div>
                <div className="col-md-6 col-xs-12">
                  <input type="text" name="shipping_zipcode"
                  onChange={e=>handleChange(e.target.value, 'zipcode', shipping, setShipping)}
                  placeholder="Zip Code" className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-6 col-xs-12">
                  <input type="text" name="shipping_phone"
                  onChange={e=>handleChange(e.target.value, 'phone', shipping, setShipping)}
                  placeholder="Phone Number" className="form-control py-4 mb-3"/>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6 col-xs-12 d-flex justify-content-start align-items-center">
                  <input type="checkbox" name="billing_same_as"
                   onChange={handleCheck} 
                  className="float-left checkbox-payment"
                  />
                  <label for="tracking" className="w-auto float-left pl-2">Billing Address same as Shipping Address.</label>
                </div>
              </div>
              <div className="row my-3">
              <div className="col-md-12 col-xs-12">
                <h4 className="mb-4">Billing Address</h4>
                </div>
                <div className="col-md-6 col-xs-12">
                  <input type="text" name="billing_firstname"
                  value={billing[0].value && billing[0].value }
                  placeholder="First Name" className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-6 col-xs-12">
                  <input type="text" name="billing_lastname"
                   value={billing[1].value && billing[1].value }
                   placeholder="Last Name" className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-12 col-xs-12">
                  <input type="text" name="billing_address"
                  value={billing[2].value && billing[2].value }
                  placeholder="Street Addess" className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-6 col-xs-12">
                  <input type="text" name="billing_city"
                  value={billing[3].value && billing[3].value }
                  placeholder="City" className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-6 col-xs-12">
                  <select name="billing_state"  class="form-control mb-3">
                    <option>Select State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                  </select>
                </div>
                <div className="col-md-6 col-xs-12">
                  <input type="text" name="billing_zipcode"
                  value={billing[5].value && billing[5].value }
                  placeholder="Zip Code" className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-6 col-xs-12">
                  <input type="text" name="billing_phone"
                  value={billing[6].value && billing[6].value }
                  placeholder="Phone Number" className="form-control py-4 mb-3"/>
                </div>
              </div>
              <h4 className="my-4">Payment Method</h4>
              <div className="row">
                <div className="col-md-12 col-xs-12">
                  <input type="text" value="Card Number" placeholder="Card Number" className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-6 col-xs-12">
                  <input type="text" value="Cardholder Name" placeholder="Cardholder Name" className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <input type="text" value="MM/YY" placeholder="MM/YY" className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <input type="text" value="CW" placeholder="CW" className="form-control py-4 mb-3"/>
                </div>
                <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12 d-flex flex-column text-center align-items-center">
                  <button className="btn2 border-0 float-none my-3 text-center w-100">Place Order</button>
                  <span>By placing this order you agree to <button onClick={() => setModalShow1(true)} className="popup_link">Terms and Conditions</button> and <button onClick={() => setModalShow2(true)} className="popup_link">Privacy Policy.</button></span> </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xs-12 px-2">
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
export default Shipping