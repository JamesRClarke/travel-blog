import React from 'react'
import * as contentful from 'contentful'

import BlogItem from './blog/BlogItem'
class Blog extends React.Component {
  state = {
    posts: []
  }

  client = contentful.createClient({
    space: 'dswjoml2z5ii',
    accessToken: '57cf7c344d46f37dee8b7959584d82b79c197d9705024bdde4516c030a042d38'
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries('blog')
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {
    let blogs = [];
    if (this.state.posts && this.state.posts.length) {
      this.state.posts.map(({fields}, i) => {
        let blogItem = <BlogItem key={i} index={i} {...fields} />;
        return blogs.push(blogItem);
      })
    } else {
      blogs = <div></div>;
    }

    return (
      <div className="my_journey_blogs">
        {blogs}
    </div>
  )
}
}
export default Blog;
