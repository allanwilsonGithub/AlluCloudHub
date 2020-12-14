import React from 'react'
import ReactDOM from 'react-dom'
import {recipes} from './cookbook/data/recipes_object'
import './alluStyle.css'
import TheMap from './map/components/TheMap'
import Fitness from './fitness/components/Fitness'
import Cookbook from './cookbook/components/Cookbook'
import Contact from './contact/components/Contact'
import Hobbies from './hobbies/components/Hobbies'

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
        <Link className="button2" to="/">cookbook</Link>
        <Link className="button2" to="/map">map</Link>
        <Link className="button2" to="/fitness">fitness</Link>
        <Link className="button2" to="/hobbies">hobbies</Link>
        <p><Link className="button3" to="/contact">contact</Link></p>
      </div>

      <Switch>
        <Route path="/map">
          <TheMap />
        </Route>
        <Route path="/fitness">
          <Fitness />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/hobbies">
          <Hobbies />
        </Route>
        <Route path="/">
          <Cookbook recipes={recipes}/>
        </Route>
      </Switch>

      <Footer />

     </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))