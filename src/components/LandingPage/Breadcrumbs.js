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
                <li property="itemListElement" typeof="ListItem">
                { item.link != null &&  (
                   <>
                    {item.itemtype && (<Link
                        property="item" typeof="WebPage"
                        to={item.link}                                               
                    ><span itemprop="name" property="name">{item.name}</span></Link>)}     
                    {!item.itemtype && (<Link
                        property="item" typeof="WebPage"
                        to={item.link}                        
                    ><span property="name">{item.name}</span></Link>)}     
                    <meta property="position" content={index+1} />
                   </>
                    ) } 
                    { item.link === null &&  (
                       <>
                        <span property="name">{item.name}</span>
                        <meta property="position" content={index+1} />
                        </>
                    )}
                    </li>
                )
            })}
            </ol>
            </div>
        </div>
    )
}

export default LandingBreadcrumbs