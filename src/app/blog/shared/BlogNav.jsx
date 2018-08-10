import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const BlogNav = ({ to, date, status }) => (
    <div>
      <Link to={to} style={{color: 'blue'}}> Keep reading</Link>

      <p >
        {moment(date).calendar(null, {
          sameDay: '[Today]',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM Do YYYY'
        })}
      </p>
  </div>
)


export default BlogNav
