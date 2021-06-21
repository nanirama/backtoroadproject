import React from "react"
import { Link } from "gatsby"
const LandingBreadcrumbs = (props) => {
    const { makemodels, partname } = props
    return(
        <div className="container">
            <div className="breadcrumb w-100 float-left">
            <ol itemscope itemtype="https://schema.org/BreadcrumbList">
                
                {makemodels.map((item, index) => (
                    <li itemprop="itemListElement" itemscope
                    itemtype="https://schema.org/ListItem"  key={index}>          
                        <Link to={'/'}  itemscope itemtype="https://schema.org/WebPage" itemprop="item" itemid={'/'}
><span itemprop="name">{item.name}</span></Link><meta itemprop="position" content={index+1} />
</li>                
                ))}
                <li itemprop="itemListElement" itemscope
                    itemtype="https://schema.org/ListItem">
                    <span itemprop="name">{partname}</span>
                    <meta itemprop="position" content="3" />
                </li>
            </ol>
            </div>
        </div>
    )
}

export default LandingBreadcrumbs