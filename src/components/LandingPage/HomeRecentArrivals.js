import React from "react"
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
                      gatsbyImageData(layout: FULL_WIDTH, quality: 100)
                    }
                }
            }
            }
        }
      }
    `)    
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
                  <h2 property="name" className="tlt text-center text-uppercase">Recent Arrivals</h2>
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
                              <h3>{node.title}</h3>
                              <h4>{node.priceFrom}</h4>
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