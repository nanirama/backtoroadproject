import React, {useState} from "react"
import Image from './image'
import Slider from "react-slick";
const LandingRecentArrivals = ({data, blockHeading}) => { 
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow"
      }
      type="button"
    >
       <svg viewBox="0 0 500 500" >
        <path d="M357,214v-64a9,9 0 01 15-5l106,96.5a9.5,9.5 0 01 0,15.5l-106,96.5a9,9 0 01-15-5v-64h-348a9,9 0 01 -9-9v-52.5a9,9 0 01 9-9z" />
      </svg>
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow"
      }
      type="button"
    >
       <svg viewBox="0 0 500 500" >
        <path d="M357,214v-64a9,9 0 01 15-5l106,96.5a9.5,9.5 0 01 0,15.5l-106,96.5a9,9 0 01-15-5v-64h-348a9,9 0 01 -9-9v-52.5a9,9 0 01 9-9z" />
      </svg>
    </button>
  );
    const settings = {
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: false,
      centerMode: false,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              arrows: false,
              initialSlide: 0,
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true
            }
          },
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              initialSlide: 0,
              slidesToShow: 2,
              slidesToScroll: 2,
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
      <>
                  <div className="recent_post_blk w-100 float-left" id="bestsellers">
                  <div className="container">                       
                  {blockHeading && <h2 property="name" className="tlt text-center text-uppercase">{blockHeading}</h2>}
                  <Slider {...settings}>
                  {data.map((item, index) => {
                      return (
                        <div
                        className="col-md-12 col-xs-12"
                        key={index}
                        >
                              <div className="post_box w-100 float-left">
                              <div className="post_img w-100 float-left mb-4">
                                <Image img={item.featuredImage.node.localFile} alt={item.title}/>
                              </div>
                              <div className="recent-title-content">
                                <h3>{item.title}</h3>
                                <h4>{item.itemprice.itemPrice}</h4>
                                {item.desc && <p>{item.desc}</p>}
                              </div>
                              <button className="btn1" aria-label={item.title}>Shop Now</button> </div>                        
                          </div>
                      )
                      })}
                  </Slider>
                  </div>
              </div>
      </>          
    )
}

export default React.memo(LandingRecentArrivals)