import React from "react"
import BlogCard from './BlogCard'

const RecentBlogs = ({data}) => { 
    return(
        <div className="w-100 float-left pt-2 pb-5">
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
        </div>
    )
  }
  
  export default RecentBlogs
  