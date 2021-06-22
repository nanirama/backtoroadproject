import React from "react"
import { Link } from "gatsby"
const LandingBreadcrumbs = (props) => {
    const { makemodels, partname } = props
    return(
        <div className="container">
            <div className="breadcrumb w-100 float-left">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
                
                {makemodels.map((item, index) => (
                    <li itemProp="itemListElement" itemScope
                    itemType="https://schema.org/ListItem"  key={index}>          
                        <Link to={'/'}  itemScope itemType="https://schema.org/WebPage" itemProp="item" itemID={'/'}
><span itemProp="name">{item.name}</span></Link><meta itemProp="position" content={index+1} />
</li>                
                ))}
                <li itemProp="itemListElement" itemScope
                    itemType="https://schema.org/ListItem">
                    <span itemProp="name">{partname}</span>
                    <meta itemProp="position" content="3" />
                </li>
            </ol>
            </div>
        </div>
    )
}

export default LandingBreadcrumbs