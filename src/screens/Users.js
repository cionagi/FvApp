//Dependency
import React, { Component } from 'react'
import CardPost from '../components/CardPost'

//Components
//Assets

class Users extends Component {
  render() {
    return (
      <div className="container">
        <div className={'row'}>
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </div>
    )
  }
}

export default Users
