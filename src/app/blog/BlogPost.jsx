import React from 'react'
import FeaturedImage from './shared/FeaturedImage'
import { Link } from 'react-router-dom'
import * as Markdown from 'react-markdown'

import {
  FacebookShareButton,
  FacebookIcon,
  // FacebookShareCount,

  TwitterShareButton,
  TwitterIcon,
  // TwitterShareCount,

  EmailShareButton,
  EmailIcon
  // EmailShareCount


  // GooglePlusShareButton,
  // LinkedinShareButton,
  // TwitterShareButton,
  // TelegramShareButton,
  // WhatsappShareButton,
  // PinterestShareButton,
  // VKShareButton,
  // OKShareButton,
  // RedditShareButton,
  // TumblrShareButton,
  // LivejournalShareButton,
  // MailruShareButton,
  // ViberShareButton,
  // WorkplaceShareButton,
  // EmailShareButton,
} from 'react-share';

const url = window.location.href;

const BlogPost = ({ location: { state: { props } }}) => (
  <div className="row">
    <div className="col-sm-6">
      <Link className="individual_blog_back" to='/blog'> <i className="far fa-arrow-alt-circle-left"></i> Back</Link>
    </div>
    <div className="container individual_blog_post col-sm-6">
      <FeaturedImage url={props.featuredImage.fields.file.url} />
      <h1>{props.title}</h1>
      <Markdown>
        {props.content}
      </Markdown>
    </div>
    <div className="social_share_buttons container">
      <FacebookShareButton
        url={url}
        quote={props.title}
        className="Demo__some-network__share-button">
        <FacebookIcon
          size={32}
          round />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        quote={props.title}
        className="Demo__some-network__share-button">
        <TwitterIcon
          size={32}
          round />
      </TwitterShareButton>
      <EmailShareButton
        url={url}
        quote={props.title}
        className="Demo__some-network__share-button">
        <EmailIcon
          size={32}
          round />
      </EmailShareButton>
    </div>
  </div>
)
export default BlogPost
