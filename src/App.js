import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Event from './pages/Event'
import Rocket from './pages/Rocket'
import Launch from './pages/Launch'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/event" component={Event} />
        <Route path="/rocket" component={Rocket} />
        <Route path="/launch" component={Launch} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
