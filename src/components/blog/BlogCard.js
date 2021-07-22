import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from '../LandingPage/image'
import { FaUserAlt } from 'react-icons/fa';
import { CgCalendarDates } from 'react-icons/cg';
const BlogCard = ({ data }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {           
            siteUrl
          }
        }
      }
    `
  )
    const siteURL = site.siteMetadata.siteUrl 
    //console.log('BlogCard Image Source ',data);
    let iconStyles = { color: "gray", fontSize: "1.5em", marginRight:"5px" };
    let iconStyles2 = { color: "gray", fontSize: "1.9em", marginRight:"5px" };
    return (
      <article className="blog">
        <Link to={`${siteURL}/${data.slug}`}><Image img={data.featuredImage.node.localFile} itemProp="image"/></Link>
        <div className="post_info">
            <div className="d-flex justify-content-between mb-2">
              <small className="align-self-start text-capitalize"><FaUserAlt style={iconStyles} />By {data.author.node.name}</small>
              <small className="align-self-end"><CgCalendarDates style={iconStyles2} />{data.date}</small>
            </div>
            <h2 className="w-100 mt-1"><Link to={`${siteURL}/${data.slug}`}>{data.title}</Link></h2>
            {data.excerpt && <div dangerouslySetInnerHTML={{ __html: data.excerpt }} className="w-100 float-left overflow-hidden" ></div>}                    
        </div>
			</article>
    )
  }
  
  export default BlogCard
  