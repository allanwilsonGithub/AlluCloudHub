import React, { useState } from 'react'
import { Map, TileLayer } from "react-leaflet"
import DisplayWalkingRoutes from "./walkingRoutes"
import DisplayMunros from "./munros"
import DisplayTracks from './tracks'

const TheMap = () => {
  const [activeRoute, setActiveRoute] = useState(null)
  const [activeMunro, setActiveMunro] = useState(null)

    return (
            <div>
            <h1>Map</h1>
                <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossOrigin=""
                />

                <Map center={[60.199550, 24.696819]} zoom={8}>

                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <DisplayWalkingRoutes activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
                <DisplayMunros activeMunro={activeMunro} setActiveMunro={setActiveMunro} />
                <DisplayTracks />
                
                </Map>
            </div>
    )
}

export default TheMap


