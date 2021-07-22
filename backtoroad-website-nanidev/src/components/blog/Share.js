import React from 'react';
import PropTypes from 'prop-types';
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	RedditShareButton
} from 'react-share';

import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaRedditSquare, FaWhatsappSquare } from 'react-icons/fa';


const Share = ({ socialConfig, tags }) => {
    let fStyles = { color: "#3B5998", fontSize: "2em", marginRight:"5px" };
    let tStyles = { color: "#1DA1F2", fontSize: "2em", marginRight:"5px" };
    let lStyles = { color: "#0077B5", fontSize: "2em", marginRight:"5px" };
    let rStyles = { color: "#FF4500", fontSize: "2em", marginRight:"5px" };
    let wStyles = { color: "#128C7E", fontSize: "2em", marginRight:"5px" };
    return(
	<div className="post-social">
         <FacebookShareButton url={socialConfig.config.url} quote={socialConfig.config.title} hashtag={""}>
            <FaFacebookSquare style={fStyles}/>
         </FacebookShareButton>

          <TwitterShareButton url={socialConfig.config.url} quote={socialConfig.config.title}>
              <FaTwitterSquare style={tStyles}/>
          </TwitterShareButton>          

          <LinkedinShareButton url={socialConfig.config.url} quote={socialConfig.config.title}>
            <FaLinkedin style={lStyles}/>
          </LinkedinShareButton>

          <RedditShareButton url={socialConfig.config.url} title={socialConfig.config.title} >
            <FaRedditSquare style={rStyles}/>
          </RedditShareButton>

          <WhatsappShareButton url={socialConfig.config.url} title={socialConfig.config.title}>
               <FaWhatsappSquare style={wStyles}/>
           </WhatsappShareButton>
	</div>
)};

Share.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
	tags: [],
};

export default Share;

