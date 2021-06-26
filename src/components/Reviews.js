import React from "react"
import styled from "styled-components"
import { FcGoogle } from 'react-icons/fc'
import { FaStar } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          initialSlide: 0,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 440,
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
    <ReviewsContainer>
      <Header>CUSTOMER REVIEWS</Header>
        
        <Slider {...settings} css={`height: 440px;`}>
        <div>
        <ReviewsTiles>
          <ReviewTitle>William Edwards</ReviewTitle>
          <ReviewDate>28/12/2020</ReviewDate>
          <GoogleIcon />
          <ReviewContent>
            Wow!! Backtoroad saved me 700 dollars with purchasing the transfer
            case i needed for my ford truck.It took a week to get it..but well
            worth the wait.It is in and works great.Much appreciation mike.
          </ReviewContent>
          <StartIconWrapper>
            <StarIcon css={`left: 10px; margin:1px;`} />
            <StarIcon css={`left: 25px; margin:1px;`} />
            <StarIcon css={`left: 40px; margin:1px;`} />
            <StarIcon css={`left: 56px; margin:1px;`} />
            <StarIcon css={`left: 70px; margin:1px;`}/>
          </StartIconWrapper>
          <ReviewRating>5</ReviewRating>
        </ReviewsTiles>
        </div>
        <div>
        <ReviewsTiles>
          <ReviewTitle>Daniel Peacher</ReviewTitle>
          <ReviewDate>09/06/2020</ReviewDate>
          <GoogleIcon />
          <ReviewContent>
            Friendly guys who made me the perfect abs up on the spot,I gave Darren my vehicle details 
            he gave me a great price and I had my abs the next day, to easy. I recommend this trader to everyone.
          </ReviewContent>
          <StartIconWrapper>
            <StarIcon css={`left: 10px; margin:1px;`} />
            <StarIcon css={`left: 25px; margin:1px;`} />
            <StarIcon css={`left: 40px; margin:1px;`} />
            <StarIcon css={`left: 56px; margin:1px;`} />
            <StarIcon css={`left: 70px; margin:1px;`} />
          </StartIconWrapper>
          <ReviewRating>5</ReviewRating>
        </ReviewsTiles>
        </div>
        <div>
        <ReviewsTiles>
          <ReviewTitle>Roger Sanders</ReviewTitle>
          <ReviewDate>20/04/2020</ReviewDate>
                  <GoogleIcon />
          <ReviewContent>
            Best in the business I'm 78 years old and they treat me so nice. 
            I was very hesitant to buy something of the web cause I was afraid of getting the wrong computer module. 
            Called these folks, they said all they needed is the VIN number to my car and they got me the right part. 
            Works like a charm. Excellent trustworthy service
          </ReviewContent>
          <StartIconWrapper>
            <StarIcon css={`left: 10px; margin:1px;`} />
            <StarIcon css={`left: 25px; margin:1px;`} />
            <StarIcon css={`left: 40px; margin:1px;`} />
            <StarIcon css={`left: 56px; margin:1px;`} />
            <StarIcon css={`left: 70px; margin:1px;`} />
          </StartIconWrapper>
          <ReviewRating>5</ReviewRating>
        </ReviewsTiles>
        </div>
        <div>
        <ReviewsTiles>
          <ReviewTitle>Kevin Davis</ReviewTitle>
          <ReviewDate>12/06/2020</ReviewDate>
          <GoogleIcon />
          <ReviewContent>
            Part came in a reasonable time and looks like a good abs assembly ,saved money too. I would recommend backtoroad auto.
          </ReviewContent>
          <StartIconWrapper>
            <StarIcon css={`left: 10px; margin:1px;`} />
            <StarIcon css={`left: 25px; margin:1px;`} />
            <StarIcon css={`left: 40px; margin:1px;`} />
            <StarIcon css={`left: 56px; margin:1px;`} />
            <StarIcon css={`left: 70px; margin:1px;`} />
          </StartIconWrapper>
          <ReviewRating>5</ReviewRating>
        </ReviewsTiles>
        </div>
        <div>
        <ReviewsTiles>
          <ReviewTitle>Chris Higgins</ReviewTitle>
          <ReviewDate>05/10/2018</ReviewDate>
          <GoogleIcon />
          <ReviewContent>
            I had trouble with local wrecking yards and their service. Phillips hooked me up today, so he gets his name in this. 
            Well be returning again to find the piece that cannot be found. 
            A real relief from the shoddy places down west. Got more than what i expected, ordered through phone, feels good.
          </ReviewContent>
          <StartIconWrapper>
            <StarIcon css={`left: 10px; margin:1px;`} />
            <StarIcon css={`left: 25px; margin:1px;`} />
            <StarIcon css={`left: 40px; margin:1px;`} />
            <StarIcon css={`left: 56px; margin:1px;`} />
            <StarIcon css={`left: 70px; margin:1px;`} />
          </StartIconWrapper>
          <ReviewRating>5</ReviewRating>
        </ReviewsTiles>
        </div>
        <div>
        <ReviewsTiles>
          <ReviewTitle>Victoria Steinfield</ReviewTitle>
          <ReviewDate>13/11/2019</ReviewDate>
          <GoogleIcon />
          <ReviewContent>
            The front lower control arms on my 05 4Runner were so rusted/seized that it made an alignment impossible. 
            Staff was friendly and knowledgeable and had the part I needed for cheaper than I thought. Great business. Highly recommend!!!
          </ReviewContent>
          <StartIconWrapper>
            <StarIcon css={`left: 10px; margin:1px;`} />
            <StarIcon css={`left: 25px; margin:1px;`} />
            <StarIcon css={`left: 40px; margin:1px;`} />
            <StarIcon css={`left: 56px; margin:1px;`} />
            <StarIcon css={`left: 70px; margin:1px;`} />
          </StartIconWrapper>
          <ReviewRating>5</ReviewRating>
        </ReviewsTiles>
        </div>
        <div>
        <ReviewsTiles>
          <ReviewTitle>Benita Monroe</ReviewTitle>
          <ReviewDate>12/11/2019</ReviewDate>
          <GoogleIcon />
          <ReviewContent>
            I ordered an ABS Assembly for my Toyota camry. It came very quickly and was in wonderful condition. 
            They kept me updated through the entire process. From the order all the way through the delivery. 
            I am beyond pleased with my experience with Joe.Thank you Backtoroad auto!!
          </ReviewContent>
          <StartIconWrapper>
            <StarIcon css={`left: 10px; margin:1px;`} />
            <StarIcon css={`left: 25px; margin:1px;`} />
            <StarIcon css={`left: 40px; margin:1px;`} />
            <StarIcon css={`left: 56px; margin:1px;`} />
            <StarIcon css={`left: 70px; margin:1px;`} />
          </StartIconWrapper>
          <ReviewRating>5</ReviewRating>
        </ReviewsTiles>
        </div>
        <div>
        <ReviewsTiles>
          <ReviewTitle>Chester Brown</ReviewTitle>
          <ReviewDate>06/06/2019</ReviewDate>
          <GoogleIcon />
          <ReviewContent>
            I purchased some parts for 2004 land cruiser and I was getting ready to make the payment then the dude gave me a discount and dropped the price without me asking for a better deal. 
            Professional and respectful. I usually call them if I need parts even though I live in Utah.
          </ReviewContent>
          <StartIconWrapper>
            <StarIcon css={`left: 10px; margin:1px;`} />
            <StarIcon css={`left: 25px; margin:1px;`} />
            <StarIcon css={`left: 40px; margin:1px;`} />
            <StarIcon css={`left: 56px; margin:1px;`} />
            <StarIcon css={`left: 70px; margin:1px;`} />
          </StartIconWrapper>
          <ReviewRating>5</ReviewRating>
        </ReviewsTiles>
        </div>

        <div>
        <ReviewsTiles>
          <ReviewTitle>Patrick Burgois</ReviewTitle>
          <ReviewDate>31/10/2018</ReviewDate>
          <GoogleIcon />
          <ReviewContent>
            They are helpful and knowledgeable. I called to get a window for my car right as they were about to close. Instead of being grumpy about it, they helped me in getting it..
          </ReviewContent>
          <StartIconWrapper>
            <StarIcon css={`left: 10px; margin:1px;`} />
            <StarIcon css={`left: 25px; margin:1px;`} />
            <StarIcon css={`left: 40px; margin:1px;`} />
            <StarIcon css={`left: 56px; margin:1px;`} />
            <StarIcon css={`left: 70px; margin:1px;`} />
          </StartIconWrapper>
          <ReviewRating>5</ReviewRating>
        </ReviewsTiles>
        </div>

        <div>
        <ReviewsTiles>
          <ReviewTitle>Jeremy Franklin</ReviewTitle>
          <ReviewDate>12/07/2019</ReviewDate>
          <GoogleIcon />
          <ReviewContent>
            We received the abs computer and wanted to say thank you working fine
          </ReviewContent>
          <StartIconWrapper>
            <StarIcon css={`left: 10px; margin:1px;`} />
            <StarIcon css={`left: 25px; margin:1px;`} />
            <StarIcon css={`left: 40px; margin:1px;`} />
            <StarIcon css={`left: 56px; margin:1px;`} />
            <StarIcon css={`left: 70px; margin:1px;`} />
          </StartIconWrapper>
          <ReviewRating>5</ReviewRating>
        </ReviewsTiles>
        </div>
        <div>
        <ReviewsTiles>
          <ReviewTitle>Michelle Davis</ReviewTitle>
          <ReviewDate>11/12/2018</ReviewDate>
          <GoogleIcon />
          <ReviewContent>
            As a Dodge owner this is the first place I check for parts and knowledge great staff and always helpful in all things Dodge👍
          </ReviewContent>
          <StartIconWrapper>
            <StarIcon css={`left: 10px; margin:1px;`} />
            <StarIcon css={`left: 25px; margin:1px;`} />
            <StarIcon css={`left: 40px; margin:1px;`} />
            <StarIcon css={`left: 56px; margin:1px;`} />
            <StarIcon css={`left: 70px; margin:1px;`} />
          </StartIconWrapper>
          <ReviewRating>5</ReviewRating>
        </ReviewsTiles>
        </div>

        <div>
        <ReviewsTiles>
          <ReviewTitle>Michael Smith</ReviewTitle>
          <ReviewDate>21/09/2018</ReviewDate>
          <GoogleIcon />
          <ReviewContent>
            certainly not the cheapest  but not the highest as well. i love my supra and they got me a good tranny runs great
          </ReviewContent>
          <StartIconWrapper>
            <StarIcon css={`left: 10px; margin:1px;`} />
            <StarIcon css={`left: 25px; margin:1px;`} />
            <StarIcon css={`left: 40px; margin:1px;`} />
            <StarIcon css={`left: 56px; margin:1px;`} />
            <StarIcon css={`left: 70px; margin:1px;`} />
          </StartIconWrapper>
          <ReviewRating>5</ReviewRating>
        </ReviewsTiles>
        </div>
        <div>
        <ReviewsTiles>
          <ReviewTitle>Ramirez Lopez</ReviewTitle>
          <ReviewDate>12/04/2019</ReviewDate>
          <GoogleIcon />
          <ReviewContent>
            They had the part I need woohooo
          </ReviewContent>
          <StartIconWrapper>
            <StarIcon css={`left: 10px; margin:1px;`} />
            <StarIcon css={`left: 25px; margin:1px;`} />
            <StarIcon css={`left: 40px; margin:1px;`} />
            <StarIcon css={`left: 56px; margin:1px;`} />
            <StarIcon css={`left: 70px; margin:1px;`} />
          </StartIconWrapper>
          <ReviewRating>5</ReviewRating>
        </ReviewsTiles>
        </div>
        </Slider>

    </ReviewsContainer>
  )
}

export default Reviews

const ReviewsContainer = styled.div`
  margin-top: 1rem;
  min-height: 20vh;
  padding: 2rem calc((100vw - 1300px) / 2);
  color: #fff;
`

const Header = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2rem);
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 2rem;
  font-weight: bold;
  color: #000000; 
`

const ReviewsTiles = styled.div`
  line-height: 2;
  width: 285px;
  height: 385px;
  left: 5px;
  position: relative;
  transition: 0.2s ease;
  display: inline-block;
  text-align: center;
  margin: 10px;
  border: solid thin black;
  border-radius: 10px;
  background-color: #fdfdfd; /* For browsers that do not support gradients */
  background-image: linear-gradient(#fdfdfd, #ffffff);
  border: 1px solid rgba(255,255,255,0.20);
  box-shadow: 6px 6px 16px 0 rgba(217,210,200,0.51);
  white-space: normal;

   @media screen and (max-width: 600px) {
    width: 92vw;
    padding: 10px;
   }
`

const ReviewTitle = styled.div`
  position: absolute;
  top: 15px;
  font-size: 24px;
  left: 5px;
  color: #000;
  padding-left: 15px;
`

const ReviewDate = styled.div`
  position: absolute;
  top: 45px;
  font-size: 13px;
  left: 5px;
  color: #000;
  padding-left: 15px;
`

const ReviewContent = styled.div`
  position: absolute;
  top: 90px;
  font-size: 14px;
  padding: 15px;
  color: #000;
  text-align: start;
  word-break: normal;
  overflow-wrap: break-word;
`
const ReviewRating = styled.div`
  position: absolute;
  top: 346px;
  font-size: 14px;
  left: 90px;
  color: #000;
`
const StarIcon = styled(FaStar)`
  color: orange;
  position: absolute;
  top: 350px;
  font-size: 14px;
  display: inline-block;
`

const GoogleIcon = styled(FcGoogle)`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 16px;
  right: 20px;
  padding-right: 15px;
`

const StartIconWrapper = styled.div`
  padding-left: 15px;
`
