import React from "react"
import Img from "gatsby-image"
import ImageWrap from './common/ImageWrap'
import parse from 'html-react-parser';

const getImage = node => {
    if (node.name === 'img') {
      return node;
    } else if (node.children != null) {
      for (let index = 0; index < node.children.length; index++) {
        let image = getImage(node.children[index]);
        if (image != null) return image;
      }
    }
  };
  
  const replaceMedia = node => {
    console.log('My image ',node);
    if (node.name === 'div') {
      const image = getImage(node);
      if (image != null) {
        return <ImageWrap src={image.attribs.src} alt={image.attribs.alt} width={image.attribs.width}/>;
      }
    }
  };

  const WhyBacktoroads = (props) => {
    const { title, content} = props
    return(
        <div className="backroad_blk w-100 float-left">
                <div className="container">
                <h2 className="pb-2 mb-4">{title}</h2>
                <div className="w-100 float-left overflow-hidden" className="w-100 float-left overflow-hidden">{parse(content, {replace: replaceMedia})}</div>
                <div dangerouslySetInnerHTML={{ __html: content }} className="w-100 float-left overflow-hidden" ></div>
                </div>
            </div>
    )
  }

  export default WhyBacktoroads;