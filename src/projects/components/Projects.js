import React, { useState } from 'react'
import Jetbot from './Jetbot'
import CodeKingdoms from './CodeKingdoms'
import FullStackOpen from './FullStackOpen'
import PersonalWebsite from './PersonalWebsite'


const DisplayProject = (ProjectPage) => {
  if (ProjectPage.ProjectPage === 'Jetbot') {
    return (
      <Jetbot />
    )
  } else if (ProjectPage.ProjectPage === 'CodeKingdoms') {
    return (
      <CodeKingdoms />
    )
  } else if (ProjectPage.ProjectPage === 'FullStackOpen') {
    return (
      <FullStackOpen />
    )
  } else if (ProjectPage.ProjectPage === 'PersonalWebsite') {
    return (
      <PersonalWebsite />
    )
  } else {
    return ""
  }
}

const Projects = () => {
    const [ ProjectPage, setProjectPage ] = useState('')
    return (
        <div align='center'>
          <h1>Projects</h1>
          <button key="Jetbot" className="button" onClick={() => setProjectPage('Jetbot')}>Nvidia Jetbot AI</button>
          <button key="CodeKingdoms" className="button" onClick={() => setProjectPage('CodeKingdoms')}>CodeKingdoms</button>
          <button key="FullStackOpen" className="button" onClick={() => setProjectPage('FullStackOpen')}>FullstackOpen 2021</button>
          <button key="PersonalWebsite" className="button" onClick={() => setProjectPage('PersonalWebsite')}>Personal Website</button>
          <DisplayProject ProjectPage={ProjectPage}/>
        </div>
      )
    }

export default Projects