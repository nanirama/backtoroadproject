import React from "react"
import { HowItWorksData } from "../../data/HowItWorksData"

const HowitWorks = () => {
    return(
        <div className="how_work_blk w-100 float-left text-center">
            <div className="container">
            <h2 className="tlt text-center text-uppercase">How It Works</h2>
            <div className="row" property="itemListElement" typeof="ListItem">
            {HowItWorksData.map((item, index) => {
                return (
                    <div key={index} className="col-lg-3 col-md-6 col-xs-12" itemScope itemType="https://schema.org/Product">
                        <div className="work_box w-100 float-left text-center">
                            <div className="icon mb-4">
                                <img itemProp="image" className="w-auto" src={item.newicon} alt={item.title} width="70" height="72" />
                            </div>
                            <h3 itemProp="name">{item.title}</h3>
                            <p itemProp="description" className="mb-0">{item.desc}</p>
                        </div>
                    </div>
                )
                })}  
            </div>
            </div>
        </div>
    )
}

export default HowitWorks