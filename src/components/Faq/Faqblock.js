import React, { useState } from "react"
import Accordion from 'react-bootstrap/Accordion'
import { useStaticQuery, graphql } from "gatsby"
import { Card } from 'react-bootstrap'
import faqIcon from '../../assets/images/landing/Plus.png'
import faqActiveIcon from '../../assets/images/landing/minus.png'


const Faqblock = () => {
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
    const { data } = useStaticQuery(
        graphql`
          query {
            data : allFaqPageDataJson {
                edges {
                  node {
                    ans
                    que
                    id
                  }
                }
              }
          }
        `
      )
    return(    
                <div className="container d-flex flex-column mt-5 pt-5">
                <Accordion defaultActiveKey="0" activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
                {data.edges.map(({node}, index) => {
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
                                    <h4 onClick={e=>onClickHandler(index)}>{node.que}</h4>
                                </Accordion.Toggle>
                                <Accordion.Collapse
                                    eventKey={index+1}
                                    itemprop="acceptedAnswer"
                                    itemscope
                                    itemScope                                
                                    itemtype="https://schema.org/Answer"
                                >
                                    <Card.Body itemprop="text">
                                        <p>{node.ans}</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>  
                    )
                    })}                  
                </Accordion>
                </div>
    )
}
export default Faqblock