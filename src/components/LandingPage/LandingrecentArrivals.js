import React from "react"
import Image from './image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const LandingRecentArrivals = ({data}) => { 

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
        <div className="recent_post_blk w-100 float-left">
            <div className="container" itemScope itemType="https://schema.org/Product"  >                       
            <h2 property="name" className="tlt text-center text-uppercase">Recent Arrivals</h2>
            <Slider {...settings}>
            {data.map((item, index) => {
                return (
                    <div
                      className="col-md-12 col-xs-12"
                      key={index}
                      property="itemListElement" typeof="ListItem">
                        <div className="post_box w-100 float-left">
                        <div className="post_img w-100 float-left mb-4">
                          <Image img={item.featuredImage.node.localFile} itemProp="image"/>
                        </div>
                        <h3 itemProp="name">{item.title}</h3>
                        <p itemProp="description">{item.desc}</p>
                        <button className="btn1" aria-label={item.title}>Shop Now</button> </div>                        
                    </div>
                )
                })}
            </Slider>
            </div>
        </div>
    )
}

export default React.memo(LandingRecentArrivals)