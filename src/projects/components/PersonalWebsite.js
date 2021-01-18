import React from 'react'
import arch_diag from '../media/AlluCloudHubDocker.png'

const PersonalWebsite = () => {
    return (
        <div align='left'>
            <p className="project_heading">Personal Website (www.allanwilson.net)</p>
            <p className="project_section">Backlog</p>
            <ul className="project_text">Add DB container</ul>
            <img src={arch_diag} alt="own website" width="1000" height="500"></img>
        </div>
    )
}

export default PersonalWebsite