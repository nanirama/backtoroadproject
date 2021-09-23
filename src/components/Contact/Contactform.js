import * as React from "react";

const Contactform = () => {
    return (  
<div className="fomr-outer w-100 float-left pt-5">
<div className="container">
<div className="row">
<div className="col-md-6 col-xs-12">
        <div className="form-blk w-100 float-left">
           <h3 className="mb-4">Send us a Message</h3>
                <input type="text" name="name" placeholder="Name" className="form-control border-0 mb-2 py-4 px-3"/>
                <input type="text" name="email" placeholder="Email"className="form-control border-0 mb-2 py-4 px-3"/>
                <input type="text" name="phone" placeholder="Phone"className="form-control border-0 mb-2 py-4 px-3"/>
                <textarea className="form-control border-0 mb-2">Message</textarea>
                <div className="w-100 d-inline-block text-center">
            <button className="btn2 border-0 float-none">Submit</button>
            </div>
        </div>
    </div>
    <div className="col-md-6 col-xs-12">
        <div className="info-blk w-100 float-left text-center mt-5">
        <h4 className="mb-4">Having trouble? Call us at <a href="tel:18006083868">1.800.608.3868</a></h4>
        <p className="pt-3">We have a dedicated team of customer service representatives trained to help you with even the minute aspects related to your order. Due to the personal attention we provide each customer we staff this department Monday to Friday, 8.30 am PST to 4.30 pm PST. Our goal is to help you efficiently and in a friendly manner.</p>
        <p>You can Email us at<br/>
        <a href="mailto:customerservice@backtoroadautoparts.com">customerservice@backtoroadautoparts.com</a></p>
        </div>
    </div>
</div>

</div>

</div>
       
    );
  };
  
  export default Contactform;

