import React from "react"
import { Link } from "gatsby"
const LandingBreadcrumbs = (props) => {
    const { makemodels, partname, bcrumb } = props
    console.log('Brrmdjcd', bcrumb)
    return(
        <div className="container">
            <div className="breadcrumb w-100 float-left">
            <ol vocab="https://schema.org/" typeof="BreadcrumbList">
            { bcrumb.map((item, index)=>{
                return(
                <>
                { item.link != null &&  (
                    <li property="itemListElement" typeof="ListItem">
                    {item.itemtype && (<Link
                        property="item" typeof="WebPage"
                        to={item.link}                                               
                    ><span itemprop="name" property="name">{item.name}</span></Link>)}     
                    {!item.itemtype && (<Link
                        property="item" typeof="WebPage"
                        to={item.link}                        
                    ><span property="name">{item.name}</span></Link>)}     
                    <meta property="position" content={index+1} />
                    </li>
                    ) } 
                    { item.link === null &&  (
                        <li property="itemListElement" typeof="ListItem">
                        <span property="name">{item.name}</span>
                        <meta property="position" content={index+1} />
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