import React, {useEffect} from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Image from './image'
import buttonBg from '../../assets/images/landing/arrow.png'
import Aos from "aos"
import "aos/dist/aos.css"

const ExtraContent = (props) => {
    const { content, image, extracontent, make} = props
    useEffect(() => {
        Aos.init({})
      }, [])
    return(
        <React.Fragment>
            <div
                className="parts_blk w-100 float-left position-relative"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                <div className="container"> <span className="w-100 float-left text-center text-uppercase">Parts</span>
                <h1 className="text-center text-uppercase">Used {make.toLowerCase()} Parts</h1>
                <div className="row">
                    <div className="col-md-6 col-xs-12 pr-4">
                    <h2 className="mb-4 pb-2">Summary</h2>
                    <div dangerouslySetInnerHTML={{ __html: content }} className="w-100 float-left overflow-hidden" ></div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                    <div className="w-100 float-left">
                        {extracontent.summaryImage && <Image img={extracontent.summaryImage.localFile} imgalt="Summary"/>}  
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="about_blk w-100 float-left position-relative">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12 show"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                    >
                    <div className="w-100 float-left mt-2">
                        {extracontent.aboutImage && <Image img={extracontent.aboutImage.localFile} imgalt="About Part"/>} 
                    </div>
                    </div>
                    <div className="col-md-6 col-xs-12"
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                    >
                    <h2 className="mb-4 pb-2">{extracontent.aboutTitle}</h2>
                    <p dangerouslySetInnerHTML={{ __html: extracontent.aboutContent }} ></p>
                    </div>
                    <div className="col-md-6 col-xs-12 hide">
                    <div className="feature_img w-100 float-left">
                    {extracontent.aboutImage && <Image img={extracontent.aboutImage.localFile} imgalt="About Part"/>}  
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="benifits_blk w-100 float-left">
                <div className="container">
                    <h2 className="pb-2 mb-4">{extracontent.benefitsTitle}</h2>
                    <div dangerouslySetInnerHTML={{ __html: extracontent.benefitsTopContent }} className="w-100 float-left overflow-hidden" ></div>
                    <div className="row w-100 float-left">
                        <div className="col-md-6 col-xs-12">
                        <div dangerouslySetInnerHTML={{ __html: extracontent.benefitsListingContent }} className="w-100 float-left overflow-hidden" ></div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                        <div className="w-100 float-left">
                            <Image img={extracontent.benefitsImage.localFile} imgalt="Benefits"/>
                        </div>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: extracontent.benefitsBottomContent }} className="w-100 float-left overflow-hidden" ></div>
                    <Button className="btn1" img={buttonBg} aria-label="Find My Part Now">Find My Part Now</Button>
                </div>
            </div>
            <div className="backroad_blk w-100 float-left">
                <div className="container">
                    <h2 className="pb-2 mb-4">{extracontent.whyBackroad}</h2>
                    <div dangerouslySetInnerHTML={{ __html: extracontent.whyBackroadTopContent }} className="w-100 float-left overflow-hidden" ></div>
                    <div className="w-100 float-left mb-4">
                    <Image img={extracontent.wnyBackroadImage.localFile} imgalt="Why Backtoroads"/>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: extracontent.whyBackroadBottomContent }} className="w-100 float-left overflow-hidden" ></div>
                </div>
            </div>
        </React.Fragment>
    )
}
const Button = styled.button`
  background-image: url(${props => props.img});
`;
export default ExtraContent