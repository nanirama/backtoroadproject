 
import React from "react"
import Image from './image'
import Slider from "react-slick";
import FormsControler from './FormsControler'

const LandingSlider = ({data}) => {
  console.log('Slides Data ', data);
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
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
    return(
        <div className="container-fluid padding-0 overflow-hidden">
          <div className="row position-relative">          
          
          <div className="col-md-12 col-sm-12 main-slider">
          <Slider {...settings}>
          {data.map((item, index) => {
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
                        <div className="col-lg-6 col-md-6 slider_form_above">                          
                              <div className="slider_form">
                                <FormsControler/> 
                              </div>                         
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <Img fixed={item.featuredImage.node.localFile.childImageSharp.fluid} /> */}
                  {/* <img src={item.featuredImage.node.localFile.childImageSharp.fluid.base64} alt={item.title}/> */}
                   <Image img={item.featuredImage.node.localFile} imgalt={item.title} alt={item.title}/>
              </div> 
            )
          })}              
          </Slider>
        </div>  
          <div className="slider_form mob_form">
              <FormsControler/>
          </div> 
        </div>  
        
      </div>
    )
}
export default LandingSlider