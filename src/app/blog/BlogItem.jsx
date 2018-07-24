import React from 'react'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'
const BlogItem = (props) => (
  <div className="box">
    <BlogContent limit={90} {...props }>
      <BlogNav date={props.date} to={{
        pathname: `/${props.path}`,
        state: { props }
      }} />
    </BlogContent>
  </div>
)
export default BlogItem
