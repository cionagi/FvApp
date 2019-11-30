//Dependency
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Components
import Index from './screens/Index'
import Posts from './screens/Posts'
import Users from './screens/Users'
import Navbar from './components/Navbar'

//Assets
import './App.scss'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={'/'} component={Index} exact={true} />
        <Route path={'/posts/:id'} component={Posts} exact={true} />
        <Route path={'/users/:id'} component={Users} exact={true} />
      </Switch>
    </Router>
  )
}

export default App
