import React from 'react'
import '../../alluStyle.css'
import ReactTooltip from 'react-tooltip'
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
import office from '../media/TheOffice.jpg'
import vikings from '../media/vikings.png'
import brave_new_world from '../media/brave_new_world.jpg'
import cobra from '../media/cobra.png'
import movies from '../media/movies.png'
import silicon_valley from '../media/silicon_valley.png'



const DoIt2021 = () => {
    return (
        <div align='center'>
          <h1>2021 K<i>allan</i>ban</h1>
          <ReactTooltip type="info" effect="float"/>
          <h2 className="2021_text" align='left'>BACKLOG</h2>
          <a href="https://www.amazon.co.uk/Pillars-Earth-Ken-Follett/dp/0330450867"><img src={pillars} width="150" height="225" alt='pillars' className="border_2021_books"></img></a>
          <a href="https://fullstackopen.com/en/part8"><img src={fullstack8} width="150" height="225" alt='fullstack8' className="border_2021_coding"></img></a>
          <a href="https://fullstackopen.com/en/part9"><img src={fullstack9} width="150" height="225" alt='fullstack9' className="border_2021_coding"></img></a>
          <a href="https://fullstackopen.com/en/part10"><img src={fullstack10} width="150" height="225" alt='fullstack10' className="border_2021_coding"></img></a>
          <a href="https://fullstackopen.com/en/part11"><img src={fullstack11} width="150" height="225" alt='fullstack11' className="border_2021_coding"></img></a>
          <a href="https://www.amazon.co.uk/Vermin-Bill-Graham-ebook/dp/B079YJXF4D/ref=reads_cwrtbar_1"><img src={vermin} width="150" height="225" alt='vermin' className="border_2021_books"></img></a>
          <a href="https://www.amazon.co.uk/gp/product/B07Z435R7G/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0"><img src={blood_on_the_law} width="150" height="225" alt='bloodOnLaw' className="border_2021_books"></img></a>
          <a href="https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-nano/"><img src={jetson} width="150" height="225" alt='jetson' className="border_2021_project"></img></a>
          <a href="https://en.wikipedia.org/wiki/Cobra_Kai"><img src={cobra} width="150" height="225" alt='cobra' className="border_2021_tv"></img></a>
          <a href="https://www.imdb.com/title/tt2575988/"><img src={silicon_valley} width="300" height="200" alt='silicon_valley' className="border_2021_tv"></img></a>
          <br></br>
          <ReactTooltip id='movies' aria-haspopup='true' >
              <pre>
              Love And Monsters<br></br>
              Sleeper<br></br>
              Pieces of a Woman
              </pre>
          </ReactTooltip>
          <img src={movies} width="120" height="100" alt='movies' className="border_2021_movies" data-tip data-for='movies'></img>
          <hr></hr>
          <h2 className="2021_text" align='left'>IN DEV</h2>
          <a href="https://www.imdb.com/title/tt2306299/"><img src={vikings} width="150" height="225" alt='vikings' className="border_2021_tv" data-tip="s6ep14/20"></img></a>
          <a href="hhttps://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523"><img src={brave_new_world} width="150" height="225" alt='brave_new_world' className="border_2021_books" data-tip="podcast Audible"></img></a>
          <a href="https://www.amazon.co.uk/Apropos-Nothing-Woody-Allen/dp/1951627342"><img src={woody} width="150" height="225" alt='woody' className="border_2021_books"></img></a>
          <a href="https://fullstackopen.com/en/part7"><img src={fullstack7} width="150" height="225" alt='fullstack7' className="border_2021_coding"></img></a>


          <hr></hr>
          <h2 className="2021_text" align='left'>DONE DONE</h2>
          <a href="https://www.imdb.com/title/tt0386676/"><img src={office} width="150" height="225" alt='office' className="border_2021_tv" data-tip="2021-01-01"></img></a>
          <br></br>
          <img src={movies} width="120" height="100" alt='movies' className="border_2021_movies" data-tip=""></img>
        </div>
    )
}

export default DoIt2021