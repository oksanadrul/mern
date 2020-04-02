import React, { Fragment, useEffect } from 'react'
import Spinner from '../layout/Spinner'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../actions/post'
import PostItem from './PostItem'
import PostForm from './PostForm'


const Posts = () => {
  const post = useSelector(state => state.post)
  const dispatch = useDispatch();

  const { posts, loading } = post;
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  return loading ? <Spinner /> : <Fragment>
    <PostForm />
    <h1 className="large text-primary">Posts</h1>
    <p className="lead"><i className="fas fa-user"></i> Welcome to the community!</p>
    <div className="posts">
      {posts.map(post => <PostItem key={post._id} post={post} showActions={true} />)}
    </div>
  </Fragment>
}

export default Posts;
