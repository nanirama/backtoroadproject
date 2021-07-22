import React from 'react'
import { graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"

export const ImageWrap = ({src, alt, width}) => {
    const data = useStaticQuery(allMedia);
    console.log('My files ',data);
    const originalSource = src.replace(/^(http?s:\/\/.+?\/.+?)-(\d+x\d+)\.(.+?)$/g, '$1.$3');
    const image = data.allWpMediaItem.edges.find(({node}) => node.source_url === originalSource);
    return image == null || image.node.localFile.childImageSharp == null ? (
      <img
        src={src}
        alt={alt}
        style={{width: width ? width : '100%'}}/>
    ) : (
      <Img
        fluid={image.node.localFile.childImageSharp.fluid}
        alt={alt}
        style={{
          width: width ? width + 'px' : '100%',
          maxWidth: '100%'
        }}/>
    );
  };
const allMedia = graphql`
query {
    allWpMediaItem {
        edges {
          node {
            localFile {
              childImageSharp {
                  fixed(width: 500, webpQuality: 100) {
                    srcWebp
                  }
                  fluid(maxWidth: 640, webpQuality: 100) {
                    srcWebp
                  }
                }
            }
          }
        }
      }
  }  
`;
export default ImageWrap