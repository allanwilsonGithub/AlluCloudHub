import React, { useState } from 'react'
import arch_diag from '../media/AlluCloudHubDocker.png'
import Jetbot from './Jetbot'

const Projects = () => {
    const [ ProjectPage, setProjectPage ] = useState('')
    return (
        <div align='center'>
          <h1>Projects</h1>
          <button key="Jetbot" className="button" onClick={() => setProjectPage('Jetbot')}>Nvidia Jetbot AI</button>
          <p className="project_text" align='left'>Minecraft Mods</p>
          <p className="project_text" align='left'>Roblox Mods</p>
          <p className="project_text" align='left'>FullstackOpen2021</p>
          <div>
            <p className="project_text" align='left'>Personal Website (www.allanwilson.net)</p>
            <img src={arch_diag} alt="own website" width="1000" height="500"></img>
          </div>
          <Jetbot />
        </div>
    )
}

export default Projects