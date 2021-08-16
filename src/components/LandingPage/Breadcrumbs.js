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
                        typeof="WebPage"
                        to={item.link}                                               
                    ><span itemprop="name" property="name">{item.name}</span></Link>)}     
                    {!item.itemtype && (<Link
                        itemprop="item"
                        to={item.link}                        
                    ><span itemprop="name" property="name">{item.name}</span></Link>)}     
                    <meta itemprop="position" content={index+1} />
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
                        <meta itemprop="position" content={index+1} />
                    </li>
                    )}
                    </>
                )
            })}
            </ol>
            {/* <ol itemScope itemType="https://schema.org/BreadcrumbList">
            { makemodels.nodes.map((item, index) => (
                <li itemProp="itemListElement" itemScope
                itemType="https://schema.org/ListItem"  key={index}>          
                    <Link to={'/'}  itemScope itemType="https://schema.org/WebPage" itemProp="item" itemID={'/'}
><span itemProp="name">{item.name}</span></Link><meta itemProp="position" content={index+1} />
</li>    
            ))} <li itemProp="itemListElement" itemScope
                    itemType="https://schema.org/ListItem">
                    <span itemProp="name">{partname}</span>
                    <meta itemProp="position" content="3" />
                </li>
            </ol> */}
            </div>
        </div>
    )
}

export default LandingBreadcrumbs