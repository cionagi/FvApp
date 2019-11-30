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
const NoMatch = ({ location }) => (
  <div className={'row '}>
    <div className={'col text-center d-flex align-items-center justify-content-center'} style={{ height: '80vh' }}>
      <h1>
        Ruta no encontrada <code>{location.pathname}</code>
      </h1>
    </div>
  </div>
)
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={'/'} component={Index} exact={true} />
        <Route path={'/posts/:id'} component={Posts} exact={true} />
        <Route path={'/users/:id'} component={Users} exact={true} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default App
