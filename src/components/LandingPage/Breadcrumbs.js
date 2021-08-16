import React from "react"
import { Link } from "gatsby"
const LandingBreadcrumbs = (props) => {
    const { makemodels, partname, bcrumb } = props
    return(
        <div className="container">
            <div className="breadcrumb w-100 float-left">
            <ol vocab="https://schema.org/" typeof="BreadcrumbList" itemscope itemScope itemtype="https://schema.org/BreadcrumbList">
            { bcrumb.map((item, index)=>{
                return(
                    <>
                
                { item.link != null &&  (
                <li
                    key={index}
                    itemprop="itemListElement"                
                    itemScope
                    itemtype="https://schema.org/ListItem"
                    property="itemListElement"
                    typeof="ListItem"
                >     
                    {item.itemtype && (<Link
                        itemprop="item" 
                        property="item"
                        typeof="WebPage"
                        to={item.link}                                               
                    ><span itemprop="name" property="name">{item.name}</span></Link>)}     
                    {!item.itemtype && (<Link
                        itemprop="item"
                        property="item"
                        typeof="WebPage"
                        to={item.link}                        
                    ><span itemprop="name" property="name">{item.name}</span></Link>)}     
                    <meta property="position" itemprop="position" content={index+1} />
                    </li> 
                    ) } 
                    { item.link === null &&  (
                        <li
                            key={index}
                            itemprop="itemListElement"
                            itemscope
                            itemScope
                            itemtype="https://schema.org/ListItem"
                            className="active"
                            property="itemListElement"
                            typeof="ListItem"
                        >
                        <span itemprop="name" property="name">{item.name}</span>
                        <meta property="position" itemprop="position" content={index+1} />
                    </li>
                    )}
                    </>
                )
            })}
            </ol>
            </div>
        </div>
    )
}

export default LandingBreadcrumbs