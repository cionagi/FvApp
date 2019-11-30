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
      <div className={'col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'}>
        <div className={'m-2 '}>
          <Link to={`/posts/${id}`}>
            <div className="card shadow-sm custom-card">
              <img src={'https://via.placeholder.com/450x300'} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-truncate font-weight-bold text-muted">{title}</h5>
                <p className="card-text text-muted">{body}</p>
              </div>
              <div className="card-body">
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
