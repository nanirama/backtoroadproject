import React from 'react'

const BlogItem = ({data})=>{
    console.log(data)
    return(
        <>
        <h2>{data.title}</h2>
        {data.excerpt && <div dangerouslySetInnerHTML={{ __html: data.excerpt }} className="w-100 float-left overflow-hidden main-content" ></div>}                    
        </>
    )
}

export default BlogItem