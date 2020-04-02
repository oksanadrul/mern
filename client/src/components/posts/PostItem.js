import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { useSelector, useDispatch } from 'react-redux'
import { updateLikes, deletePost } from '../../actions/post'


const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="avatar" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">Posted <Moment format='YYYY/MM/DD'>{date}</Moment></p>
        {showActions &&
          <Fragment>
            <button onClick={() => dispatch(updateLikes('like', _id))} type="button" className="btn btn-light">
              <i className="fas fa-thumbs-up"></i>{' '}
              {likes.length > 0 && (<span>{likes.length}</span>)}
            </button>
            <button onClick={() => dispatch(updateLikes('unlike', _id))} type="button" className="btn btn-light">
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Discussion {comments.length > 0 && (<span className='comment-count'>{comments.length}</span>)}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button onClick={() => dispatch(deletePost(_id))} type="button" className="btn btn-danger">
                <i className="fas fa-times"></i>
              </button>

            )}
          </Fragment>
        }
      </div>
    </div>
  )
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  showActions: PropTypes.bool.isRequired,
};

export default PostItem;
