import React from 'react'
import BlogContent from './shared/BlogContent'
const BlogItem = (props) => {
  return (
    <div className="container">
      <BlogContent  limit={60} {...props }/>
      </div>
    )
  }
  export default BlogItem
