import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import mpIcon from "../../../assets/images/landing/callbtn.svg"

const LandingHeader = ({ logoImg, cpath }) => {
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
  //const logoImage = logoImg.childImageSharp.fixed.base64
  const siteURL = site.siteMetadata.siteUrl 
  // const handleMenuClick =(event) =>{
  //   event.preventDefault();
  //   this.setState({menuOpen: false});
  // }
  return(
    <header className="w-100 float-left pt-4 pb-3">
      <div className="container">
        <div className="row">
            <div className="col-lg-2 col-sm-3">
          <div className="logo w-auto float-left">
                  <Link to={`${siteURL}${cpath}`}>
                    <GatsbyImage
                      alt="Back to Roads Logo"
                      image={getImage(logoImg)} 
                      width={128} height={47}
                    />
                  </Link>
                </div>              
            </div>
            <div className="col-lg-10 col-sm-9 mobile-right">
                <div className="h_rgt w-auto float-right">
                        <div className="w-auto float-left mnav">
                              <nav>
                              <ul>
                                    <li><Link to={`${cpath}#findmypart`}>Find My Part</Link></li> 
                                    <li><Link to={`${cpath}#bestsellers`}>Best Selling Units</Link></li> 
                                    <li><Link to={`${cpath}#howitworks`}>How It Works?</Link></li> 
                                    <li><Link to={`${cpath}#whychoose`}>Why Choose Us</Link></li> 
                                    <li><Link to={`${cpath}#reviews`}>Customer Reviews</Link></li> 
                                    <li><Link to={`${cpath}#faq`}>FAQ</Link></li>  
                              </ul>                                  
                            </nav>
                        </div>
                        <a href="tel:18006083868" className="btn1 ph ml-3" title="CLICK TO CALL"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.59 1.322l2.844-1.322 4.041 7.89-2.725 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.861 3.591-19.101-18.258-11.384-22.281zm1.93 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398zm7.832 7.649l2.917.87c.223-.747.16-1.579-.24-2.317-.399-.739-1.062-1.247-1.808-1.469l-.869 2.916zm1.804-6.059c1.551.462 2.926 1.516 3.756 3.051.831 1.536.96 3.263.498 4.813l-1.795-.535c.325-1.091.233-2.306-.352-3.387-.583-1.081-1.551-1.822-2.643-2.146l.536-1.796zm.95-3.186c2.365.705 4.463 2.312 5.729 4.656 1.269 2.343 1.466 4.978.761 7.344l-1.84-.548c.564-1.895.406-4.006-.608-5.882-1.016-1.877-2.696-3.165-4.591-3.729l.549-1.841z"/></svg><span>1800 608 3868</span><strong>CLICK TO CALL</strong></a>
                        <a href="tel:18006083868" className="btnm1" title="CLICK TO CALL"><img src={mpIcon} alt="CLICK TO CALL"/></a>
                  </div>
            </div>
        </div>
      </div>
    </header>
  )
}
export default LandingHeader