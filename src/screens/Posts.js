//Dependency
import React, { Component } from 'react'
import ComentPost from '../components/ComentPost'
import { Link } from 'react-router-dom'

//Components
//Assets

class Posts extends Component {
  render() {
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <img src={'https://via.placeholder.com/1000x300'} />
          </div>
        </div>
        <div className={'container'}>
          <div className={'col-12 text-center'}>
            <h1>TITULO</h1>
            <Link to="/users/9">
              <span className="badge badge-secondary">Autor</span>
            </Link>
          </div>
          <div className={'col-12'}>
            <p className={'my-5 text-justify'}>
              lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </p>
          </div>
          <div className={'col-12'}>
            <h6>Comentarios</h6>
            <ComentPost />
            <ComentPost />
            <ComentPost />
            <ComentPost />
            <ComentPost />
            <ComentPost />
            <ComentPost />
            <ComentPost />
            <ComentPost />
          </div>
        </div>
      </>
    )
  }
}

export default Posts
