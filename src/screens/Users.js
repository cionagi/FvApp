//Dependency
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { callGetUser } from '../store/actions/users'

//Components
import CardPost from '../components/CardPost'
import Loading from '../components/Loading'

//Assets

class Users extends Component {
  state = {
    isLoading: true,
    posts: [],
  }

  componentDidMount() {
    const userId = this.props.match.params.id
    this.props.actions.callGetUser(userId)
  }

  componentWillReceiveProps(nextProps) {
    const { users } = this.props
    if (users.isFetching !== nextProps.users.isFetching && !nextProps.users.isFetching) {
      this.setState({
        isLoading: false,
        posts: nextProps.users.posts,
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
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({ callGetUser }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
