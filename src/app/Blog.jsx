import React from 'react'
import * as contentful from 'contentful'

import BlogItem from './blog/BlogItem'
import PageHeader from './components/PageHeader'
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

  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  
  render() {
    return (
      <div>
        <PageHeader color="is-primary is-bold" title="Code Blog">
          Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
        </PageHeader>
        <br/>
        { this.state.posts.map(({fields}, i) =>
        <BlogItem key={i} {...fields} />
      )}
    </div>
  )
}
}
export default Blog;
