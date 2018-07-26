import React from "react"
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps"
import { Motion, spring } from "react-motion";
import markerCoordinates from '../../../assets/map/markers.json'

const mapStyles = {
  width: "100%",
  height: "500px",
}
const markers = markerCoordinates;


const WorldMap = (props) => (
  <div className="world_map globe">
    <Motion
          defaultStyle={{
            x: props.center[0],
            y: props.center[1]
          }}
          style={{
            x: spring(props.center[0]),
            y: spring(props.center[1])
          }}
        >
          {({ x, y }) => (
    <ComposableMap
      width={500}
      height={500}
      projection="orthographic"
      projectionConfig={{ scale: 250 }}
      style={mapStyles}
      disableOptimisation={true}
    >
      <ZoomableGlobe center={[x, y]}>
        <circle cx={250} cy={250} r={250} fill="#98F5FF" stroke="#436b95" />
        <Geographies
          disableOptimization
          geography={props.json}
        >
          {(geos, proj) =>
            geos.map((geo, i) => (
              <Geography
                key={geo.id + i}
                geography={geo}
                projection={proj}
                style={{
                  default: { fill: "#436b95" }
                }}
              />
            ))
          }
        </Geographies>
        <Markers>
         {markers.map((marker, i) => (
           <Marker
             key={i}
             marker={marker}
             style={{
               hidden: { display: "none" }
             }}
           >
             <circle cx={0} cy={0} r={6} fill="#000"  strokeWidth="1.5" stroke="white" />
           </Marker>
         ))}
       </Markers>
      </ZoomableGlobe>
    </ComposableMap>
  )}
  </Motion>
  </div>
)

export default WorldMap
