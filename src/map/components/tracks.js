import React from "react"
import * as trackData from "../data/trackData.json"
import { Polyline } from "react-leaflet"



const DisplayTracks = () => {
  return (
    <div>
      {trackData.tracks.map(track => (
          <Polyline positions={
            track.points.map(point => (
              [point[1], point[0]]
            ))
            
          }
            color ={'green'}
            weight = {5}
            opacity = {0.5}
            key = {track.track_id}
           />
        )
      )}
    </div>
  )
}

export default DisplayTracks
