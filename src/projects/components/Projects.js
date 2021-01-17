import React, { useState } from 'react'
import Jetbot from './Jetbot'
import CodeKingdoms from './CodeKingdoms'
import FullStackOpen from './FullStackOpen'
import PersonalWebsite from './PersonalWebsite'


const DisplayProject = (ProjectPage) => {
  console.log(ProjectPage)
  if (ProjectPage === 'Jetbot') {
    return (
      <p>WOOHOO</p>
      )
    } else {
    console.log(ProjectPage)
      return (
        <CodeKingdoms />
      )
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