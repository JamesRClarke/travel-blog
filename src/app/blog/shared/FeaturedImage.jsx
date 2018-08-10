import React from 'react';

const FeaturedImage = (props) => {
  const imgLink = `https:${props.url}`;
  return(
      <img alt="featured" src={imgLink}/>
    
  )
}

export default FeaturedImage
