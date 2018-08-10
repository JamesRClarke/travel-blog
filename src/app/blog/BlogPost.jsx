import React from 'react'
import FeaturedImage from './shared/FeaturedImage'
import { Link } from 'react-router-dom'
import * as Markdown from 'react-markdown'

const BlogPost = ({ location: { state: { props } }}) => (
  <div>
    <Link to="/blog"> Back to my Journey</Link>
    <div className="container individual_blog_post">
      <FeaturedImage url={props.featuredImage.fields.file.url} />
      <h1>{props.title}</h1>
      <Markdown>
        {props.content}
      </Markdown>
    </div>
  </div>
)
export default BlogPost
