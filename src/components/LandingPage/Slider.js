import React, { useState } from 'react'
import Image from './image'
import Slider from "react-slick";
import FormsControler from './FormsControler'

const LandingSlider = ({data}) => {
  const [infiniteValue, setInfiniteValue] = useState(false);
  const settings = {
    customPaging: function(i) {
      return (
        <a>1</a>
      );
    },
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dotsClass: "slick-dots slick-thumb",
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: infiniteValue,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
    ]

  };
  const afterChangeHandler = (currentSlide)=> {
    if(data.length==currentSlide+1)
    {
      setInfiniteValue(true)
    }
    else{
      setInfiniteValue(false)
    }
  }
    return(
        <div className="container-fluid padding-0 overflow-hidden">
          <div className="row position-relative">          
          
          <div className="col-md-12 col-sm-12 main-slider">
          <div className="col-lg-6 col-md-6 slider_form_above slider_form_desktop">                          
                      <div className="slider_form">
                        <FormsControler/> 
                      </div>                         
                 </div>
          <Slider {...settings} afterChange={afterChangeHandler}>
          {data.map((item, index) => {
            if(index<data.length)
            {
              return (
                <div key={index} className="slide-item d-flex justify-content-center">                
                  <div className="s_txt_outer">
                    <div className="container">
                        <div className="row d-flex align-items-center first-col">
                          <div className=" col-md-12 col-xs-12 col-lg-6 first-col">
                            <div className="s_txt">
                              <h2 className="text-uppercase mb-4">{item.title}</h2>
                              <div dangerouslySetInnerHTML={{ __html: item.content }} ></div> 
                            </div>
                          </div>                        
                        </div>
                      </div>
                    </div>                  
                     <Image img={item.featuredImage.node.localFile} imgalt={item.title} alt={item.title} className="slider-img"/>
                </div> 
              )
            }          
          })}              
          </Slider>
        </div>  
          <div className="slider_form mob_form" id="findmmypart">
              <FormsControler/>
          </div> 
        </div>  
        
      </div>
    )
}
export default LandingSlider