import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Event from './pages/Event'
import Rocket from './pages/Rocket'
import Launch from './pages/Launch'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/spacelaunch" component={Home} exact/>
          <Route path="/spacelaunch/event" component={Event} />
          <Route path="/spacelaunch/rocket" component={Rocket} />
          <Route path="/spacelaunch/launch" component={Launch} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
