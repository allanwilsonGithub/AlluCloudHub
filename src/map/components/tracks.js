import React from "react"
import * as trackData from "../data/trackData.json"
import { Polyline } from "react-leaflet"



const DisplayTracks = () => {
  console.log(trackData)
  console.log(trackData.MTBtracks[0].geometry.coordinates[0][0])

  return (
    <div>
      {trackData.MTBtracks.map(track => (
          <Polyline positions={
            track.geometry.coordinates.map(point => (
              [point[0], point[1]]
            ))
          }
            color ={'#8f3c87'}
            weight = {5}
            opacity = {1}
            key = {track.properties.name}
           />
        )
      )}
    </div>
  )
}

export default DisplayTracks
