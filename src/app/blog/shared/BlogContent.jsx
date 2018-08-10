import React from 'react'
import * as Markdown from 'react-markdown'
import FeaturedImage from './FeaturedImage'
import { Link } from 'react-router-dom'
import moment from 'moment'

const BlogContent = (props) => {
  return (
    <div className="single_blog_post">
      <h1>Day {props.index}</h1>
      <div className={`${props.index % 2 === 0 ? 'flex_row' : 'flex_row_reverse'}`}>
        <FeaturedImage url={props.featuredImage.fields.file.url} />
        <div className="single_blog_post_content">
          <h3 style={{marginBottom: '30px'}}>{props.title}</h3>
          <Markdown
            source={
              props.limit ? props.content.split(" ").splice(0,props.limit).join(" ").concat('...') : props.content
            }
            />
          <div className="read_more_date">
              <Link to={{ pathname: `/blog/${props.path}`, state: { props: props} }} style={{color: 'blue'}}> Keep reading</Link>

              <p >
                {moment(props.date).calendar(null, {
                  sameDay: '[Today]',
                  lastDay: '[Yesterday]',
                  lastWeek: '[Last] dddd',
                  sameElse: 'MMM Do YYYY'
                })}
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogContent
