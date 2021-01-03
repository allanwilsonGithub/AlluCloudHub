import React from 'react'
import arch_diag from '../media/AlluCloudHubDocker.png'

const Projects = () => {
    return (
        <div align='center'>
          <h1>Projects</h1>
          <p className="project_text" align='left'>Jetbot</p>
          <p className="project_text" align='left'>Minecraft Mods</p>
          <p className="project_text" align='left'>Roblox Mods</p>
          <p className="project_text" align='left'>FullstackOpen2021</p>
          <div>
            <p className="project_text" align='left'>Personal Website (www.allanwilson.net)</p>
            <img src={arch_diag} alt="own website" width="1000" height="500"></img>
          </div>
        </div>
    )
}

export default Projects