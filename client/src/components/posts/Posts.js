import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/post'
import PostItem from './PostItem'

const Posts = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts])
  return loading ? <Spinner /> : <Fragment>
    <h1 className="large text-primary">Posts</h1>
    <p className="lead"><i className="fas fa-user"></i> Welcome to the community!</p>
    <div className="posts">
      {posts.map(post => <PostItem key={post._id} post={post} />)}
    </div>
  </Fragment>
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts)
