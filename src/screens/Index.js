//Dependency
import React, { Component } from 'react'
import CardPost from '../components/CardPost'

//Components
//Assets
class Index extends Component {
  renderCardPost() {}

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

export default Index
