//Dependency
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Components
//Assets
class CardPost extends Component {
  render() {
    const {
      post: { id, title, userId, body },
      showAuthor,
    } = this.props

    return (
      <div className={'col-3'}>
        <div className={'m-2 '}>
          <Link to={`/posts/${id}`}>
            <div className="card shadow-sm">
              <img src={'https://via.placeholder.com/450x300'} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                {showAuthor && (
                  <Link to={`/users/${userId}`}>
                    <span className="badge badge-secondary">Autor</span>
                  </Link>
                )}
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default CardPost
