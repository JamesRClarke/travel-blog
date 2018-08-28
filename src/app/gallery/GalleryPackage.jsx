import React, {Component} from 'react';
import Gallery from 'react-grid-gallery';
import * as contentful from 'contentful'
//
const IMAGES =
[{
  src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  caption: "After Rain (Jeshu John - designerspics.com)"
},
{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
  caption: "Boats (Jeshu John - designerspics.com)"
},

{
  src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212
}]

class GalleryPackage extends Component {

  state = {
    images: []
  }

  client = contentful.createClient({
    space: 'dswjoml2z5ii',
    accessToken: '57cf7c344d46f37dee8b7959584d82b79c197d9705024bdde4516c030a042d38'
    // space: process.env.REACT_APP_CONTENTFUL_SPACE_KEY,
    // accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries({content_type: 'gallery'})
  setPosts = response => {

    let galleryImages = response.items;
    galleryImages.map(img => {
      img.fields.galleryImage[0].src = `https:${img.fields.image.fields.file.url}`;
      img.fields.galleryImage[0].thumbnail = `https:${img.fields.image.fields.file.url}`;
    })
    // const IMAGES = [];
    // galleryImages.map(img => {
    //   IMAGES.push(img.fields.galleryImage[0])
    // })
    this.setState({
      images: IMAGES
    })
    console.log(IMAGES);
  }


  render() {

    return (
      <Gallery images={this.state.images}/>
    )
  }


}

export default GalleryPackage
