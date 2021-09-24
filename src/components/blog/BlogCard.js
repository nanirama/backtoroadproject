import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from '../LandingPage/image'
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
    return (
      <article className="blog">
        <Link to={`${siteURL}/${data.slug}`}>
          {data.featuredImage.node.localFile && <Image img={data.featuredImage.node.localFile} itemProp="image"
         imgalt={data.featuredImage.node.altText || data.title} alt={data.featuredImage.node.altText || 'Blog Image'}
         />}
         </Link>
        <div className="post_info">
            <div className="d-flex justify-content-between mb-2">
              <small className="align-self-start text-capitalize"><svg class="icon icon-person" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>By {data.author.node.name}</small>
              <small className="align-self-end">
    <svg viewBox="0 0 500 500">
      <path fill-rule="evenodd" d="M19,107a35,35 0 01 35-35h36v-27a44,44 0 01 44-44h19a44,44 0 01 44,44v27h106v-27a44,44 0 01 44-44h19a44,44 0 01 44,44v27h36a35,35 0 01 35,35v357a35,35 0 01-35,35h-392a35,35 0 01-35-35zM125.5,45a8.5,8.5 0 01 8.5-8.5h18.5a8.5,8.5 0 01 8.5,8.5v81a8.5,8.5 0 01-8.5,8.5h-18.5a8.5,8.5 0 01-8.5-8.5zM339,45a8.5,8.5 0 01 8.5-8.5h18.5a8.5,8.5 0 01 8.5,8.5v81a8.5,8.5 0 01-8.5,8.5h-18.5a8.5,8.5 0 01-8.5-8.5zM54,179h392v285h-392z" />

      <rect width="100" height="80" x="80" y="220" />
      <rect width="100" height="80" x="200" y="220" />
      <rect width="100" height="80" x="320" y="220" />

      <rect width="100" height="80" x="80" y="325" />
      <rect width="100" height="80" x="200" y="325" />
      <rect width="100" height="80" x="320" y="325" />
    </svg>
  {data.date}</small>
            </div>
            <h2 className="w-100 mt-1"><Link to={`${siteURL}/${data.slug}`}>{data.title}</Link></h2>
            {data.excerpt && <div dangerouslySetInnerHTML={{ __html: data.excerpt }} className="w-100 float-left overflow-hidden" ></div>}                    
        </div>
			</article>
    )
  }
  
  export default BlogCard
  