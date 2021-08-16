import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const CustomerReviews = () => { 
  const { ReviewsData, GoogleImage } = useStaticQuery(
    graphql`
      query {
        GoogleImage: file(relativePath: { eq: "landing/google-new.png" }) {
          childImageSharp {
            gatsbyImageData(width: 40, quality: 100)
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
                  gatsbyImageData(layout: FIXED, width: 46, height: 46, quality: 100)
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
       <svg viewBox="0 0 500 500" >
        <path d="M357,214v-64a9,9 0 01 15-5l106,96.5a9.5,9.5 0 01 0,15.5l-106,96.5a9,9 0 01-15-5v-64h-348a9,9 0 01 -9-9v-52.5a9,9 0 01 9-9z" />
      </svg>
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
       <svg viewBox="0 0 500 500" >
        <path d="M357,214v-64a9,9 0 01 15-5l106,96.5a9.5,9.5 0 01 0,15.5l-106,96.5a9,9 0 01-15-5v-64h-348a9,9 0 01 -9-9v-52.5a9,9 0 01 9-9z" />
      </svg>
    </button>
  );
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    infinite: true,
    centerMode: false,
    initialSlide: 0,
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
                                      <div className="author_pic">
                                        <GatsbyImage
                                          alt={node.title}
                                          image={getImage(node.img)} 
                                          width={46}
                                          height={46}
                                        /> 
                                      </div>
                                      <div className="author_info float-left">
                                        <div className="text w-100 float-left pl-3 pr-1">
                                          <h4 className="tm-sub-heading w-100 float-left mb-0 text-left">{node.title}</h4>
                                            <div className="rating w-100 float-left text-left">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                                            </div>
                                        </div>
                                      </div>
                                      <div className="google">
                                        <GatsbyImage
                                          alt={`Google Review ${index}`}
                                          image={getImage(GoogleImage)} 
                                          width={40}
                                          height={40}
                                        />                                        
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