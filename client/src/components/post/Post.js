import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getPost } from '../../actions/post'
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

const Post = ({ match }) => {
  const statePost = useSelector(state => state.post);
  const dispatch = useDispatch()
  const { post, loading } = statePost;

  useEffect(() => {
    dispatch(getPost(match.params.id))
  }, [dispatch, match.params.id]);

  return loading || !post ? <Spinner />
    : <Fragment>
      <Link to="/posts" className="btn">Back To Posts</Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map(comment => <CommentItem key={comment._id} comment={comment} postId={post._id} />)}
      </div>
    </Fragment>
}


export default Post;
