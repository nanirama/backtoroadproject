import React from "react"
import { HowItWorksData } from "../../data/HowItWorksData"

const HowitWorks = () => {
    return(
        <div class="how_work_blk w-100 float-left text-center">
            <div class="container">
            <h2 class="tlt text-center text-uppercase">How It Works</h2>
            <div class="row" property="itemListElement" typeof="ListItem">
            {HowItWorksData.map((item, index) => {
                return (
                    <div class="col-lg-3 col-md-6 col-xs-12" itemscope itemtype="https://schema.org/Product">
                        <div class="work_box w-100 float-left text-center">
                            <div class="icon mb-4">
                                <img itemprop="image" class="w-auto" src={item.newicon} alt={item.title} width="70" height="72" />
                            </div>
                            <h3 itemprop="name">{item.title}</h3>
                            <p itemprop="description" class="mb-0">{item.desc}</p>
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