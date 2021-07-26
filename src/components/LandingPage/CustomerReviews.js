import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import useIntersectionObserver from '@react-hook/intersection-observer'
import Slider from "react-slick";
import Image from './image'
import { FaStar } from 'react-icons/fa';
const CustomerReviews = ({gImage}) => { 
  const containerRef5 = useRef()
    const lockRef5 = useRef()
    let { isIntersecting } = useIntersectionObserver(containerRef5)    
    if (isIntersecting && !lockRef5.current) {
        lockRef5.current = true
    }
  let iconStyles = { color: "#FFC93E", fontSize: "1.1em", marginRight:"5px" };

  const { ReviewsData } = useStaticQuery(
    graphql`
      query {
        ReviewsData : allReviewsJson {
          edges {
            node {
              heading
              content
              title
              img {
                childImageSharp {
                  gatsbyImageData(width: 50)
                }
              }
            }
          }
        }  
      }
    `
  )

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

  return (
    <>
    <div ref={containerRef5}>
                {lockRef5.current && (
                    <div className="tm_blk w-100 float-left" id="reviews">
                    <div className="container">
                      <h2 className="tlt text-center text-uppercase">Customer Reviews</h2>
                        
                        <Slider {...settings}>
                        {ReviewsData.edges.map(({node}, index) => {
                          return (
                            <div className="col-md-12 col-xs-12" key={index}>
                              <div className="tm_box w-100 float-left">
                                  <div className="reviewcontentheight d-flex flex-column align-self-stretch">
                                    <h3>{node.heading}</h3>
                                    <p>{node.content}</p>
                                  </div>
                                  <div className="bottom w-100 float-left">
                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                      <div className="pr-1 author_pic">
                                        <Image img={node.img} imgalt={node.title}/>
                                      </div>
                                      <div className="author_info float-left">
                                        <div className="text w-100 float-left pl-1 pr-1">
                                          <h4 className="tm-sub-heading w-100 float-left mb-0">{node.title}</h4>
                                            <div className="rating w-100 float-left">
                                              <FaStar style={iconStyles} />
                                              <FaStar style={iconStyles} />
                                              <FaStar style={iconStyles} />
                                              <FaStar style={iconStyles} />
                                              <FaStar style={iconStyles} />
                                            </div>
                                        </div>
                                      </div>
                                      <div className="google">
                                        <Image img={gImage} imgalt={`Google Review ${index}`}/>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              

                            </div>
                          )
                        })}
                        </Slider>
                    </div>
                    </div>
    )}
    </div>
    </>
    
  )
}

export default CustomerReviews