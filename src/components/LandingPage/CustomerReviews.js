import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick";
import Image from './image'
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaStar } from 'react-icons/fa';
const CustomerReviews = ({gImage}) => { 
  let iconStyles = { color: "#FFC93E", fontSize: "1.1em", marginRight:"5px" };

  const { ReviewsData, GoogleImage } = useStaticQuery(
    graphql`
      query {
        GoogleImage: file(relativePath: { eq: "landing/google-new.png" }) {
            childImageSharp {
                fixed(width: 42, height: 42, base64Width: 42) {
                  base64
                }
            }
        }
        ReviewsData : allReviewsJson {
          edges {
            node {
              heading
              content
              title
              img {
                childImageSharp {
                  fixed(width: 50, height: 50, base64Width: 50) {
                    base64
                  }
                }
              }
            }
          }
        }  
      }
    `
  )
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaLongArrowAltLeft className="arr"/>
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaLongArrowAltRight className="arr"/>
    </button>
  );
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    centerMode: false,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          initialSlide: 0,
          slidesToShow: 3,
          slidesToScroll: 3,
          prevArrow: <SlickArrowLeft />,
          nextArrow: <SlickArrowRight />
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: false,
          arrows: true,
          infinite: true,
          initialSlide: 0,
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: <SlickArrowLeft />,
          nextArrow: <SlickArrowRight />
        }
      },
      {
        breakpoint: 600,
        settings: {
          initialSlide: 0,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          prevArrow: <SlickArrowLeft />,
          nextArrow: <SlickArrowRight />
        }
      },
    ]

  };

  return (
    <>
                    <div className="tm_blk w-100 float-left text-center" id="reviews">
                    <div className="container">
                      <h2 className="tlt text-center text-uppercase">Customer Reviews</h2>
                        
                        <Slider {...settings}>
                        {ReviewsData.edges.map(({node}, index) => {
                          return (
                            <div className="col-md-12 col-xs-12" key={index}>
                              <div className="tm_box w-100 float-left">
                                  <div className="text-left reviewcontentheight d-flex flex-column align-self-stretch">
                                    <h3>{ `"${node.heading}"` }</h3>
                                    <p>{node.content}</p>
                                  </div>
                                  <div className="bottom w-100 float-left pt-4">
                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                      <div className="pr-1 author_pic">
                                        <img src={node.img.childImageSharp.fixed.base64} alt={node.title} width={50} height={50}/>                                        
                                        <Image img={node.img} imgalt={node.title}/>
                                      </div>
                                      <div className="author_info float-left">
                                        <div className="text w-100 float-left pl-3 pr-1">
                                          <h4 className="tm-sub-heading w-100 float-left mb-0 text-left">{node.title}</h4>
                                            <div className="rating w-100 float-left text-left">
                                              <FaStar style={iconStyles} />
                                              <FaStar style={iconStyles} />
                                              <FaStar style={iconStyles} />
                                              <FaStar style={iconStyles} />
                                              <FaStar style={iconStyles} />
                                            </div>
                                        </div>
                                      </div>
                                      <div className="google">
                                        <img src={GoogleImage.childImageSharp.fixed.base64} width={42} height={42} alt={`Google Review ${index}`}/>                                        
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
   
    </>
    
  )
}

export default CustomerReviews