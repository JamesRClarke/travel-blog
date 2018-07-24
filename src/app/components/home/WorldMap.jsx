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


const mapStyles = {
  width: "100%",
  height: "500px",
}

const markers = [
  { coordinates: [3.3792, 6.5244] },
  { coordinates: [139.6917, 35.6895] },
  { coordinates: [-74.0721, 4.711] },
  { coordinates: [-118.2437, 34.0522] }
]


const WorldMap = (props) => (
  <div className="world_map globe">

    <ComposableMap
      width={500}
      height={500}
      projection="orthographic"
      projectionConfig={{ scale: 250 }}
      style={mapStyles}
      disableOptimisation={true}
    >
      <ZoomableGlobe>
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
         {markers.map(marker => (
           <Marker
             marker={marker}
             style={{
               hidden: { display: "none" }
             }}
           >
             <circle cx={0} cy={0} r={8} fill="#fff" stroke="#000" />
           </Marker>
         ))}
       </Markers>
      </ZoomableGlobe>
    </ComposableMap>
  </div>
)

export default WorldMap
