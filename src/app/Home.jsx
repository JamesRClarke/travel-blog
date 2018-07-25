import React from 'react'
// import featuredImage from '../assets/images/featured_image.jpg'
import WorldMap from './components/home/WorldMap'
import Countries from './components/home/Countries'
import mapJson from '../assets/map/map.json'


class Home extends React.Component {
  state = {
    center: [100.9925, 15.8700]
  }

  changeCenter = (center) => {
    this.setState({
      center: center
    })
  }

  render() {
    return(
      <div>
        <div className="map_container">
          <Countries clicked={this.changeCenter}/>
          <WorldMap json={mapJson} center={this.state.center} />
        </div>
      </div>
    )
  }
}
export default Home;
