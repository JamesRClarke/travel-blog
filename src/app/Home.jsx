import React from 'react'
// import featuredImage from '../assets/images/featured_image.jpg'
import WorldMap from './components/home/WorldMap'
import Countries from './components/home/Countries'
import mapJson from '../assets/map/map.json'
const Home = () => (
  <div>
    <div className="map_container">
      <Countries />
      <WorldMap json={mapJson}  />
    </div>
  </div>
)
export default Home;
