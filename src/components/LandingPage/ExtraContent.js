import React from "react"
import styled from "styled-components"
import Image from './image'
import buttonBg from '../../assets/images/landing/arrow.png'

const ExtraContent = (props) => {
    const { extracontent } = props
    return(
     <>
            <div
                className="parts_blk w-100 float-left position-relative"
            >
                <div className="container"> <span className="superhead w-100 float-left text-center text-uppercase">Parts</span>
                {extracontent.summaryAboveTitle && <h1 className="text-center text-uppercase">{extracontent.summaryAboveTitle}</h1>}
                <div className="row">
                    <div className="col-md-6 col-xs-12 pr-4">
                    <h2 className="mb-4 pb-2">{extracontent.summaryTitle}</h2>
                    {extracontent.summaryContent && <div dangerouslySetInnerHTML={{ __html: extracontent.summaryContent }} className="w-100 float-left overflow-hidden main-content" ></div>}                    
                    </div>
                    <div className="col-md-6 col-xs-auto">
                    <div className="w-100 mimage">
                        {extracontent.summaryImage && <Image img={extracontent.summaryImage.localFile} imgalt="Summary"/>}  
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="about_blk w-100 float-left position-relative">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12 show">
                    <div className="w-100 float-left mt-2">
                        {extracontent.aboutImage && <Image img={extracontent.aboutImage.localFile} imgalt="About Part"/>} 
                    </div>
                    </div>
                    <div className="col-md-6 col-xs-12" >
                    {extracontent.aboutTitle && <h2 className="mb-4 pb-2">{extracontent.aboutTitle}</h2>}
                    {extracontent.aboutContent && <div dangerouslySetInnerHTML={{ __html: extracontent.aboutContent }} ></div>}                    
                    </div>
                    <div className="col-md-6 col-xs-auto hide">
                    <div className="w-auto">
                    {extracontent.aboutImage && <Image img={extracontent.aboutImage.localFile} imgalt="About Part"/>} 
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="benifits_blk w-100 float-left">
                <div className="container">
                    {extracontent.benefitsTitle && <h2 className="pb-2 mb-4">{extracontent.benefitsTitle}</h2>}
                    {extracontent.benefitsTopContent && <div dangerouslySetInnerHTML={{ __html: extracontent.benefitsTopContent }} className="w-100 float-left overflow-hidden" ></div>}
                    
                    <div className="row w-100 float-left">
                        <div className="col-md-6 col-xs-12">
                        {extracontent.benefitsListingContent && <div dangerouslySetInnerHTML={{ __html: extracontent.benefitsListingContent }} className="w-100 float-left overflow-hidden" ></div>}
                        </div>
                        <div className="col-md-6 col-xs-auto">
                        <div className="w-100 float-left">
                            {extracontent.benefitsImage && <Image img={extracontent.benefitsImage.localFile} imgalt="Benefits"/>}                            
                        </div>
                        </div>
                    </div>
                    {extracontent.benefitsBottomContent && <div dangerouslySetInnerHTML={{ __html: extracontent.benefitsBottomContent }} className="w-100 float-left overflow-hidden" ></div>}
                    
                    <Button className="btn1" img={buttonBg} aria-label="Find My Part Now">Find My Part Now</Button>
                </div>
            </div>
            <div className="backroad_blk w-100 float-left">
                <div className="container">
                    {extracontent.whyBackroad && <h2 className="pb-2 mb-4">{extracontent.whyBackroad}</h2>}   
                    {extracontent.whyBackroadTopContent && <div dangerouslySetInnerHTML={{ __html: extracontent.whyBackroadTopContent }} className="w-100 float-left overflow-hidden" ></div>}                 
                    
                    <div className="w-100 float-left mb-4 col-xs-auto">
                    <Image img={extracontent.wnyBackroadImage.localFile} imgalt="Why Backtoroads"/>
                    </div>
                    {extracontent.whyBackroadBottomContent && <div dangerouslySetInnerHTML={{ __html: extracontent.whyBackroadBottomContent }} className="w-100 float-left overflow-hidden" ></div>}                    
                </div>
            </div>
            </>
    )
}
const Button = styled.button`
  background-image: url(${props => props.img});
`;
export default ExtraContent