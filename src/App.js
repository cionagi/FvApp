//Dependency
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Components
import Index from './screens/Index'
import Posts from './screens/Posts'
import Users from './screens/Users'

//Assets
import './App.scss'

function App() {
  return (
    <Router>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
      </nav>
      <Switch>
        <Route path={'/'} component={Index} exact={true} />
        <Route path={'/posts/:id'} component={Posts} exact={true} />
        <Route path={'/users/:id'} component={Users} exact={true} />
      </Switch>
    </Router>
  )
}

export default App
