import React from "react"
import { Marker, Popup } from "react-leaflet"
import * as alluMapData from "../data/allu-map-data.json"
//import getAllMapDataFromPostgres from "../DB/connectToPostgresDB"

import { Icon } from "leaflet"

const walkingRoute = new Icon({
  iconUrl: './hiking.svg',
  iconSize: [25, 25]
})

const bucketList = new Icon({
  iconUrl: './bucketListIcon.svg',
  iconSize: [60, 45]
})

const fishingSpot = new Icon({
  iconUrl: './fishingSpot.svg',
  iconSize: [60, 45]
})

const adventurePark = new Icon({
  iconUrl: './zipline.svg',
  iconSize: [60, 45]
})


const DisplayWalkingRoutes = ( {activeRoute, setActiveRoute} ) => {
    return (
            <div>
            {
            alluMapData.places_of_interest.map(route => (
                    <Marker
                       key={route.properties.ID}
                       position={[
                         route.geometry.coordinates[0],
                         route.geometry.coordinates[1]
                       ]}
                       onClick={() => {
                         setActiveRoute(route)
                       }}
                       icon={eval(route.type)}
                    />
                ))}

                {activeRoute && (
                  <Popup
                       position={[
                         activeRoute.geometry.coordinates[0],
                         activeRoute.geometry.coordinates[1]
                       ]}
                       onClose={() => {
                         setActiveRoute(null)
                       }}
                   >
                   <div>
                     <h2>{activeRoute.properties.NAME}</h2>
                     <p>{activeRoute.properties.DESCRIPTION}</p>
                     <p><a href={activeRoute.properties.URL} target="_blank" rel="noopener noreferrer">link</a></p>
                   </div>
                   </Popup>
                   )}
            </div>
    )
}

export default DisplayWalkingRoutes