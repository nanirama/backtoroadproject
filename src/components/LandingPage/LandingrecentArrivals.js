import React from "react"
import Image from './image'
import Slider from "react-slick";
const LandingRecentArrivals = ({data, blockHeading}) => { 
    const settings = {
      dots: true,
      arrows: false,
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
                  <Slider {...settings} className="d-flex align-items-stretch">
                  {data.map((item, index) => {
                      return (
                          <div
                            className="col-md-12 col-xs-12 d-flex align-items-stretch"
                            key={index}
                            >
                              <div className="post_box w-100 float-left">
                              <div className="post_img w-100 float-left mb-4">
                                <Image img={item.featuredImage.node.localFile} alt={item.title}/>
                              </div>
                              <h3>{item.title}</h3>
                              <h4>{item.itemprice.itemPrice}</h4>
                              <p>{item.desc}</p>
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