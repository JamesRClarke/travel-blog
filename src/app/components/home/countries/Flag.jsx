import React from 'react';

const Flag = (props) => {
  const imgLink = `https://www.countryflags.io/${props.countryCode}/shiny/64.png`;
    return(
        <img alt="flag" className="flag" src={imgLink}></img>
      )
  }

  export default Flag
