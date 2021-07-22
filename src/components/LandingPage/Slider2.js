import React from "react"
import Image from './image'
import Slider from "react-slick";
import FormsControler from './FormsControler'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
const LandingSlider2 = ({data}) => {
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
   
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="http://localhost:8000/static/86aba4144dab711a4202115b21cc37c0/09d70/feature_img2.webp" className="d-block w-100"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="http://localhost:8000//static/dd56781e990a3fcfe1979e8f71ead1ea/31299/slider.jpg"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label 2</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="visually-hidden">Previous</span> </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="visually-hidden">Next</span> </button>
            </div>
         </div>
        </div>  
        
      </div>
    )
}
export default LandingSlider2