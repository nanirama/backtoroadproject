import React, {useState} from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Image from './image'
import Slider from "react-slick";
const HomeRecentArrivals = () => { 
    const data = useStaticQuery(graphql`
      query HomeRecentArrivalQuery {
        allRecentArrivalsDataJson {
            edges {
            node {
                priceFrom
                title
                img {
                    childImageSharp {
                      gatsbyImageData(width: 700, quality: 100, height: 700)
                    }
                }
            }
            }
        }
      }
    `) 
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
      autoplay: false,
      autoplaySpeed: 4000,
      arrows: true,
      infinite: false,
      initialSlide: 0,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: false,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
        responsive: [
          {
            breakpoint: 1800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
    
      };
    return(
      <>
                  <div className="recent_post_blk w-100 float-left d-flex flex-column justify-content-center" id="bestsellers">
                  <div className="container text-center">                       
                  <h2 property="name" className="tlt text-center text-uppercase">Recent Arrivals</h2>
                  </div>
                  <div className="container pb-5 mb-4">  
                  <Slider {...settings} className="d-flex align-items-stretch">
                  {data.allRecentArrivalsDataJson.edges.map(({node}, index) => {
                      return (
                          <div
                            className="col-md-12 col-xs-12 d-flex align-items-stretch"
                            key={index}
                            >
                              <div className="post_box w-100 float-left">
                              <div className="post_img w-100 float-left mb-4">
                                 <Image img={node.img} alt={node.title}/>
                              </div>
                              <div className="recent-title-content">
                                <h3>{node.title}</h3>
                                <h4>{node.priceFrom}</h4>
                              </div>
                              <button className="btn1 mt-4">Shop Now</button> </div>                        
                          </div>
                      )
                      })}
                  </Slider>
                  </div>
              </div>
      </>          
    )
}

export default React.memo(HomeRecentArrivals)