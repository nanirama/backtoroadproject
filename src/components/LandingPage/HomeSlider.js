import React from "react"
import Slider from "react-slick";
import Image from './image'
import FormsControler from './FormsControler'


const HomeSlider = ({data}) => {
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
          {data.edges.map(({node}, index) => {
          return (
            <div key={index} className="slide-item d-flex justify-content-center">           
                <div className="s_txt_outer d-flex flex-column justify-content-end align-items-center">
                  <div className="container">
                      <div className="row d-flex align-items-center first-col">
                        <div className=" col-md-12 col-xs-12 col-lg-6 first-col">
                          <div className="s_txt">
                            <h2 className="text-uppercase mb-4">{node.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: node.content }} ></div> 
                            { node.eimg && (
                                  <div class="w-100 float-left eimg_icon"><Image img={node.eimg.img} width={node.eimg.width} height={node.eimg.height} className="slider-eimg"/></div>
                            )}
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
                  <Image img={node.img} imgalt={node.imgalt} alt={node.imgalt} className="slider-img"/>
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

export default HomeSlider