//Dependency
import React, { Component } from 'react'

//Components
//Assets

class ComentPost extends Component {
  render() {
    return (
      <div className={'row'}>
        <div className={'col-12'}>
          <div className={'d-inline-flex align-items-center mt-2'}>
            <div>
              <img src={'https://via.placeholder.com/50x50'} />
            </div>
            <div>
              <p className={'m-2 w-50'}>
                lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ComentPost
