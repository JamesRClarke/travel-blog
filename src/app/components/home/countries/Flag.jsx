import React, {Component} from 'react';

class Flag extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const imgLink = `https://www.countryflags.io/${this.props.countryCode}/shiny/64.png`;
    return(
        <img className="flag" src={imgLink}></img>
      )
    }
  }

  export default Flag
