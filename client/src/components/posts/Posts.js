import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/post'

const Posts = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts])
  return (
    <div>
      {JSON.stringify(posts)}
    </div>
  )
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts)
