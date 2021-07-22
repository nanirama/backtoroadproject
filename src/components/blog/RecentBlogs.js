import React, { useRef } from "react"
import useIntersectionObserver from '@react-hook/intersection-observer'
import BlogCard from './BlogCard'

const RecentBlogs = ({data}) => { 
    const containerRef14 = useRef() 
    const lockRef14 = useRef()
    let { isIntersecting } = useIntersectionObserver(containerRef14)
    if (isIntersecting && !lockRef14.current) {
        lockRef14.current = true
    }
    return(
        <div className="w-100 float-left pt-2 pb-5" ref={containerRef14}> 
        {lockRef14.current && (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <h2 className="tlt">Recent Blog Posts</h2> 
                    </div>
                </div>  
                <div className="row d-flex align-items-stretch">                
                        { data.edges.map((item,index) => {
                            return (
                            <div className="col-md-4 col-sm-6 col-xs-12 align-self-stretch" key={index}>
                                <BlogCard data={item.node}/>
                            </div>
                            )
                        })}                
                </div>  
            </div>
        )}
        </div>
    )
  }
  
  export default RecentBlogs
  