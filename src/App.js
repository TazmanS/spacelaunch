import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Event from './pages/Event'
import Rocket from './pages/Rocket'
import Launch from './pages/Launch'
import Launches from './pages/Launches'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route path="/spacelaunch" component={Home} exact/>
            <Route path="/spacelaunch/event" component={Event} />
            <Route path="/spacelaunch/rocket" component={Rocket} />
            <Route path="/spacelaunch/launch" component={Launch}/>
            <Route path="/spacelaunch/launches" component={Launches} />
          </Switch>
        </Router>  
      </ErrorBoundary>
    </div>
  )
}

export default App
