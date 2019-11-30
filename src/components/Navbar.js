import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">FV App</span>
        </Link>
        <Link to="" onClick={this.goBack} className="back-icon">
          Volver atras
        </Link>
      </nav>
    )
  }
}

export default Navbar
