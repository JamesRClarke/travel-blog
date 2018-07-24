import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../Home'
import Blog from './../Blog'
import BlogPost from '../blog/BlogPost'
const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/blog' component={Blog}/>
    <Route path='/:blogPost' component={BlogPost}/>
  </Switch>
)
export default Router;
