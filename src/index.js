import React from 'react'
import ReactDOM from 'react-dom'
import {recipes} from './cookbook/data/recipes_object'
import './alluStyle.css'
import TheMap from './map/components/TheMap'
import Fitness from './fitness/components/Fitness'
import Cookbook from './cookbook/components/Cookbook'
import Home from './home/components/Home'
import Hobbies from './projects/components/Projects'
import DoIt2021 from './DoIt2021/components/DoIt2021'

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <p className='footer'>www.allanwilson.net</p>
    </div>
  )
}


const App = () => {

  return (
    <Router>
      <div>
        <Link className="button2" to="/DoIt2021">2021 K<i>allan</i>ban</Link>
        <Link className="button2" to="/cookbook">cookbook</Link>
        <Link className="button2" to="/map">map</Link>
        <Link className="button2" to="/fitness">fitness</Link>
        <Link className="button2" to="/projects">projects</Link>
        <p><Link className="button3" to="/">...</Link></p>
      </div>

      <Switch>
        <Route path="/map">
          <TheMap />
        </Route>
        <Route path="/fitness">
          <Fitness />
        </Route>
        <Route path="/projects">
          <Hobbies />
        </Route>
        <Route path="/DoIt2021">
          <DoIt2021 />
        </Route>
        <Route path="/cookbook">
          <Cookbook recipes={recipes}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />

     </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))