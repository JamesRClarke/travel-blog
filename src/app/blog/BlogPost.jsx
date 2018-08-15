import React from 'react'
import FeaturedImage from './shared/FeaturedImage'
import { Link } from 'react-router-dom'
import * as Markdown from 'react-markdown'

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

  </div>
)
export default BlogPost
