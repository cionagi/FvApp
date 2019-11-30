//Dependency
import React, { Component } from 'react'

//Components
import ComentPost from '../components/ComentPost'
import { bindActionCreators } from 'redux'
import { callGetCommentByPost, callGetPost } from '../store/actions/posts'
import { connect } from 'react-redux'
import PostInfo from '../components/PostInfo'
import Loading from '../components/Loading'

//Assets

class Posts extends Component {
  state = {
    isLoadingPostInfo: true,
    isLoadingPostComment: true,
  }

  componentDidMount() {
    const postId = this.props.match.params.id
    this.props.actions.callGetPost(postId)
  }

  componentWillReceiveProps(nextProps) {
    const { posts } = this.props
    if (posts.isLoadingPostInfo !== nextProps.posts.isLoadingPostInfo && !nextProps.posts.isLoadingPostInfo) {
      const postId = this.props.match.params.id
      this.props.actions.callGetCommentByPost(postId)
      this.setState({
        isLoadingPostInfo: false,
      })
    }

    if (posts.isLoadingPostComment !== nextProps.posts.isLoadingPostComment && !nextProps.posts.isLoadingPostComment) {
      this.setState({
        isLoadingPostComment: false,
      })
    }
  }

  drawComments() {
    const { comments } = this.props.posts.post
    return comments.map((comment) => {
      return <ComentPost key={comment.id} comment={comment} />
    })
  }

  render() {
    const { isLoadingPostInfo, isLoadingPostComment } = this.state
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <img src={'https://via.placeholder.com/1000x300'} alt={'test image'} />
          </div>
        </div>
        <div className={'container'}>
          {isLoadingPostInfo ? <Loading /> : <PostInfo post={this.props.posts.post} />}

          <div className={'col-12'}>
            <h6>Comentarios</h6>
            {isLoadingPostComment ? <Loading /> : this.drawComments()}
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({ callGetPost, callGetCommentByPost }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
