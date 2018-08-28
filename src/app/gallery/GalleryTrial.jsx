import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import Measure from 'react-measure';

const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 0.1, height: 0.2 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 0.1, height: 0.2 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 0.1, height: 0.2},
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];

class GalleryTrial extends React.Component{
  constructor(){
    super();
    this.state = { currentImage: 0, width: -1 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render(){
     const width = this.state.width;
    return(
      <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
        {
        ({measureRef}) => {
          if (width < 1 ){
            return <div ref={measureRef}></div>;
          }
          let columns = 1;
          if (width >= 480){
            columns = 2;
          }
          if (width >= 1024){
            columns = 3;
          }
          if (width >= 1824){
            columns = 4;
          }
          return <div ref={measureRef}>
            <Gallery photos={photos} columns={columns} onClick={this.openLightbox} />
            <Lightbox images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
        </div>
        }
      }
      </Measure>
      /*<div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
    </div>*/
    )
  }
}
export default GalleryTrial;
