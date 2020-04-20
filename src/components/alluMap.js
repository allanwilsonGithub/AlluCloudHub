import React from "react"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"
import * as alluMapData from "../data/allu-map-data.json"
import { Icon } from "leaflet"

const hikingIcon = new Icon({
  iconUrl: './hiking.svg',
  iconSize: [25, 25]
})

const DisplayMap = ( {activeRoute, setActiveRoute} ) => {
    return (
            <div>
                <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossOrigin=""
                />

                <Map center={[60.199550, 24.696819]} zoom={12}>

                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {alluMapData.walkingRoutes.map(route => (
                    <Marker
                       key={route.properties.ROUTE_ID}
                       position={[
                         route.geometry.coordinates[0],
                         route.geometry.coordinates[1]
                       ]}
                       onClick={() => {
                         setActiveRoute(route)
                       }}
                       icon={hikingIcon}

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
                     <p><a href={activeRoute.properties.URL}>link</a></p>
                   </div>
                   </Popup>
                   )}
                </Map>
            </div>
    )
}

export default DisplayMap


