import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../Home'
import Blog from './../Blog'
import BlogPost from '../blog/BlogPost'
import GalleryPackage from '../gallery/GalleryPackage'
import GalleryTrial from '../gallery/GalleryTrial'
const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/blog' component={Blog}/>
    <Route exact path='/gallery' component={GalleryTrial}/>
    <Route exact path='/blog/:blogPost' component={BlogPost}/>
  </Switch>
)
export default Router;
