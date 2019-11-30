//Dependency
import React, { Component } from 'react'
import { callGetPosts } from '../store/actions/posts'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//Components
import CardPost from '../components/CardPost'

//Assets

function Loading() {
  return (
    <div className={'col-12 text-center mt-5'}>
      <div className="spinner-border" style={{ width: '4rem', height: '4rem' }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

class Index extends Component {
  state = {
    posts: [],
    isLoading: true,
  }
  componentDidMount() {
    this.props.actions.callGetPosts()
  }

  componentWillReceiveProps(nextProps) {
    const { posts } = this.props
    if (posts.isFetching !== nextProps.posts.isFetching && !nextProps.posts.isFetching) {
      this.setState({
        isLoading: false,
        posts: nextProps.posts.list,
      })
    }
  }

  renderCardPost() {
    const { posts } = this.state
    if (posts !== undefined) {
      return posts.map((post) => {
        return <CardPost key={post.id} post={post} />
      })
    } else {
      return <h1>No posts</h1>
    }
  }

  render() {
    const { isLoading } = this.state

    return (
      <div className="container">
        <div className={'row'}>{isLoading ? <Loading /> : this.renderCardPost()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({ callGetPosts }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
