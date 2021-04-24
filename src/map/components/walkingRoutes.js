import React from "react"
import { Marker, Popup } from "react-leaflet"
import * as alluMapData from "../data/allu-map-data.json"
//import getAllMapDataFromPostgres from "../DB/connectToPostgresDB"

import { Icon } from "leaflet"

const walkingRoute = new Icon({
  iconUrl: './hiking.svg',
  iconSize: [25, 25]
})

const bucketListIcon = new Icon({
  iconUrl: './hiking.svg',
  iconSize: [50, 50]
})

const DisplayWalkingRoutes = ( {activeRoute, setActiveRoute} ) => {
    return (
            <div>
            {
            alluMapData.places_of_interest.map(route => (
                    <Marker
                       key={route.properties.ROUTE_ID}
                       position={[
                         route.geometry.coordinates[0],
                         route.geometry.coordinates[1]
                       ]}
                       onClick={() => {
                         setActiveRoute(route)
                       }}
                       icon={walkingRoute}
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