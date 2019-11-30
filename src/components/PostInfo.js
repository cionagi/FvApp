import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class PostInfo extends Component {
  render() {
    const { title, body, userId } = this.props.post
    return (
      <>
        <div className={'col-12 text-center'}>
          <h1>{title}</h1>
          <Link to={`/users/${userId}`}>
            <span className="badge badge-secondary">Autor</span>
          </Link>
        </div>
        <div className={'col-12'}>
          <p className={'my-5 text-justify'}>{body}</p>
        </div>
      </>
    )
  }
}

export default PostInfo
