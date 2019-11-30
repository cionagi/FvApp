//Dependency
import React, { Component } from 'react'

//Components
//Assets
class CardPost extends Component {
  render() {
    return (
      <div className={'col-3'}>
        <div className={'m-2 '}>
          <div className="card shadow-sm">
            <img src={'https://via.placeholder.com/450x300'} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <span className="badge badge-secondary">Autor</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CardPost
