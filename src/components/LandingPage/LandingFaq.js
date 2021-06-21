import React from "react"
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap'
import { css } from "@emotion/react"
import faqIcon from '../../assets/images/landing/Plus.png'


const LandingFaqs = ({data}) => {
    return(
        <div className="faq_blk w-100 float-left">          
            <div className="container">
            <h2 className="tlt text-center">FAQs</h2>
            <h3>General Questions</h3>
            <Accordion defaultActiveKey="0">
            {data.map((item, index) => {
                return (
                    <Card className="faq-card" key={index} css={css`background-image: url(${faqIcon});`}>
                        <Accordion.Toggle as={Card.Header} eventKey={index+1}  itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h4 itemprop="name">{item.title}</h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={index+1} >
                            <Card.Body itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><div itemprop="text" dangerouslySetInnerHTML={{ __html: item.content }} ></div></Card.Body>
                        </Accordion.Collapse>
                    </Card>  
                )
                })}                  
            </Accordion>
            </div>
        </div>
    )
}
export default LandingFaqs