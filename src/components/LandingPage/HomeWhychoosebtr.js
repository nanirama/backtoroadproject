import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const Whychoosebtr = () => {
    const { data } = useStaticQuery(
        graphql`
          query {
            data : allHomeStatsDataJson {
                edges {
                  node {
                    desc
                    title
                    newicon {
                      childImageSharp {
                        fixed(quality: 100, webpQuality: 100, width: 64, height: 60) {
                          srcWebp
                        }
                      }
                    }
                  }
                }
              }
          }
        `
      )
    return(
            <div className="why_choose_blk w-100 float-left text-center">
                <div className="container">
                <h2 className="tlt text-center text-uppercase">Why Choose BTR?</h2>
                <div className="row d-flex flex-row">
                {data.edges.map(({node}, index) => {
                return (
                    <div key={index} className="col-lg-3 col-sm-6 col-xs-6">
                    <div className="sub_box w-100 float-left text-center">
                        <div className="icon mb-4">
                            {/* <GatsbyImage
                                alt={node.iconalt}
                                image={getImage(node.newicon)} 
                                width={64}
                                height={60}
                            />  */}
                            <img className="w-auto"
                              src={node.newicon.childImageSharp.fixed.srcWebp}
                              alt={node.iconalt}
                              width={64}
                              height={60}
                            />
                        </div>
                        <h3 className="mb-4">{node.title}</h3>
                        <p className="mb-0">{node.desc}</p>
                    </div>
                    </div>
                )
                })}   
                </div>
                </div>
            </div>
    )
}

export default Whychoosebtr