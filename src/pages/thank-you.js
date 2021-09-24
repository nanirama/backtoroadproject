import React from 'react'
import Layout from '../components/LandingPage/common/layout'
import Seo from "../components/seo"
import HomeWhychoosebtr from '../components/LandingPage/HomeWhychoosebtr';
import '../components/LandingPage/css/custom.css'


const Thankyou = () => {
    return (
<Layout>
   <div className="w-100 float-left py-md-5 py-4">
      <div className="container">
         <h1 className="text-center thankyou-title">Thank You For Your<br/>Submission</h1>
      </div>
   </div>
   <div className="w-100 float-left justify-content-center d-flex align-items-center text-center py-5">
      <div className="container">
         <div className="row">
            <div className="col-md-6 col-xs-12">
               <p className="mb-4"><span>You Requested Quote For:</span> </p>
               <p className="text-blue">2004 Ford F150 Transmission Assembly</p>
            </div>
            <div className="col-md-6 col-xs-12">
               <p className="mb-4"><span>Information Provided For Quotes:</span></p>
               <p className="mb-2">Derek L. Stine</p>
               <p className="mb-2"><a href="mailto:derekl12@gmail.com">derekl12@gmail.com</a></p>
               <p className="mb-2">513-709-8789 </p>
            </div>
         </div>
      </div>
   </div>
   <div className="w-100 float-left mt-5 text-center">
      <div className="container">
         <p>You will receive an email from us containing the parts quote information you requested. Please check your junk/spam folders for all correspondence including quotes from us. In the mean time if you have any questions or require additional information, please don't hesitate to contact us directly.  </p>
         <div className="btn-outer w-100 d-inline-block">
            <button className="btn2 border-0 mr-4 float-none">Home Page</button>
            <button className="btn2 border-0 float-none">Contact Us</button>
         </div>
      </div>
   </div>
   <HomeWhychoosebtr/>
</Layout>


    )
}

export default Thankyou
