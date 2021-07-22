import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"

const BlogFilter = ({path}) => { 
    const { allWpCategory } = useStaticQuery(
        graphql`
          query {
            allWpCategory(sort: {order: ASC, fields: name}) {
                edges {
                  node {
                    id
                    name
                    slug
                  }
                }
              }
          }
        `
      )
    const onChangeHandler = (e)=>{
        return navigate('/blog/'+e.target.value)
    }
    return(
        <div className="select float-right">
        <select className="slct w-100 float-right" aria-label="Select Category" onBlur={e => onChangeHandler(e)}>
            <option value="">All</option>
            {allWpCategory.edges.map(({node},index)=>{
                return(
                    <>
                        { path === node.slug && <option key={index} value={node.slug} selected>{node.name}</option>}
                        { path !== node.slug && <option key={index} value={node.slug}>{node.name}</option>}                        
                    </>
                )                
            }             
            )}  
        </select>
        </div>
    )
  }
  
  export default BlogFilter
  