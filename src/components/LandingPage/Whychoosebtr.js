import React from "react"
import { StatsData } from "../../data/StatsData"
//import Aos from "aos"
//import "aos/dist/aos.css"

const Whychoosebtr = () => {
    return(
        <div className="why_choose_blk w-100 float-left text-center">
            <div className="container">
            <h2
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="tlt text-center text-uppercase"
                >Why Choose BTR?</h2>
            <div className="row"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                itemscope itemtype="https://schema.org/Product"  
            >
            {StatsData.map((item, index) => {
            return (
                <div className="col-lg-3 col-sm-6 col-xs-12" property="itemListElement" typeof="ListItem">
                <div className="sub_box w-100 float-left text-center">
                    <div className="icon mb-4">
                        <img class="w-auto" src={item.newicon} alt={item.title} width="61" height="60" />
                    </div>
                    <h3 itemprop="name" className="mb-4">{item.title}</h3>
                    <p itemprop="description" className="mb-0">{item.desc}</p>
                </div>
                </div>
            )
            })}   
            </div>
            </div>
        </div>
    )
}

export default Whychoosebtr