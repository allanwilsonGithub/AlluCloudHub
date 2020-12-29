import React from 'react'
import '../../alluStyle.css'
import woody from '../media/woody.jpg'
import pillars from '../media/pillars.jpeg'
import fullstack7 from '../media/fullstack7.png'
import fullstack8 from '../media/fullstack8.png'
import fullstack9 from '../media/fullstack9.png'
import fullstack10 from '../media/fullstack10.png'
import fullstack11 from '../media/fullstack11.png'
import vermin from '../media/vermin.jpg'
import blood_on_the_law from '../media/blood_on_the_law.png'
import jetson from '../media/jetson.png'

const DoIt2021 = () => {
    return (
        <div align='center'>
          <h1>2021</h1>
          <h2 className="2021_text" align='left'>BACKLOG</h2>
          <a href="https://www.amazon.co.uk/Apropos-Nothing-Woody-Allen/dp/1951627342"><img src={woody} width="150" height="225" alt='woody'></img></a>
          <a href="https://www.amazon.co.uk/Pillars-Earth-Ken-Follett/dp/0330450867"><img src={pillars} width="150" height="225" alt='pillars'></img></a>
          <a href="https://fullstackopen.com/en/part8"><img src={fullstack8} width="150" height="225" alt='fullstack8'></img></a>
          <a href="https://fullstackopen.com/en/part9"><img src={fullstack9} width="150" height="225" alt='fullstack9'></img></a>
          <a href="https://fullstackopen.com/en/part10"><img src={fullstack10} width="150" height="225" alt='fullstack10'></img></a>
          <a href="https://fullstackopen.com/en/part11"><img src={fullstack11} width="150" height="225" alt='fullstack11'></img></a>
          <a href="https://www.amazon.co.uk/Vermin-Bill-Graham-ebook/dp/B079YJXF4D/ref=reads_cwrtbar_1"><img src={vermin} width="150" height="225" alt='vermin'></img></a>
          <a href="https://www.amazon.co.uk/gp/product/B07Z435R7G/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0"><img src={blood_on_the_law} width="150" height="225" alt='vermin'></img></a>
          <a href="https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-nano/"><img src={jetson} className="border_2021" width="150" height="225" alt='jetson'></img></a>
          <hr></hr>
          <h2 className="2021_text" align='left'>IN DEV</h2>
          <a href="https://fullstackopen.com/en/part7"><img src={fullstack7} width="150" height="225" alt='fullstack7'></img></a>
          <hr></hr>
          <h2 className="2021_text" align='left'>DONE DONE</h2>
        </div>
    )
}

export default DoIt2021