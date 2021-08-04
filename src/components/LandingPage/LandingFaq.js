import React, { useState } from "react"
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap'
import faqIcon from '../../assets/images/landing/Plus.png'
import faqActiveIcon from '../../assets/images/landing/minus.png'


const LandingFaqs = ({data, title, subtitle}) => {
    const [activeEventKey, setActiveEventKey] = useState(null);
    const [activeIndexKey, setActiveIndexKey] = useState(0);
    const onClickHandler = (val)=>{
        if(val!==activeIndexKey)
        {
            setActiveEventKey(val)
            setActiveIndexKey(val)
        }
        else
        {
            if(activeEventKey===activeIndexKey)
            {
                setActiveEventKey(null)   
            }
            else
            {
                setActiveEventKey(val)
                setActiveIndexKey(val)
            }    
        }             
    }
    return(
            <div className="faq_blk w-100 float-left" id="faq">      
                <div className="container">
                <h2 className="tlt text-center">{title && title}</h2>
                <h3>{subtitle && subtitle}</h3>
                <Accordion defaultActiveKey="0" activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
                {data.map((item, index) => {
                    let bgImg = activeEventKey === index ? faqActiveIcon : faqIcon
                    return (
                            <Card
                            itemprop="mainEntity"
                                itemscope
                                itemScope                            
                                itemtype="https://schema.org/Question"
                                className="faq-card"
                                key={index}
                                style={{ backgroundImage: `url(${bgImg})` }}
                            >
                                <Accordion.Toggle as={Card.Header} eventKey={index+1} itemprop="name">
                                    <h4 onClick={e=>onClickHandler(index)}>{item.title}</h4>
                                </Accordion.Toggle>
                                <Accordion.Collapse
                                    eventKey={index+1}
                                    itemprop="acceptedAnswer"
                                    itemscope
                                    itemScope                                
                                    itemtype="https://schema.org/Answer"
                                >
                                    <Card.Body itemprop="text">
                                        <div dangerouslySetInnerHTML={{ __html: item.content }} ></div>
                                    </Card.Body>
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