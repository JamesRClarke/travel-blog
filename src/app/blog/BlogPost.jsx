import React from 'react'
import BlogContent from './shared/BlogContent'

const BlogPost = ({ location: { state: { props } }}) => (
  <div>
    <BlogContent {...props } ></BlogContent>
  </div>
)
export default BlogPost
