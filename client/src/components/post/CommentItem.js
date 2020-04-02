import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment'
import { removeComment } from '../../actions/post'


const CommentItem = ({
  comment: { _id, text, name, avatar, user, date },
  postId,
}) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img
            className="round-img"
            src={avatar}
            alt="avatar"
          />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">Posted on <Moment format="YYYY/MM/DD">{date}</Moment></p>
        {!auth.lodaing && user === auth.user._id && (
          <button onClick={() => dispatch(removeComment(postId, _id))} type="button" className="btn btn-danger">
            <i className="fas fa-times"></i>
          </button>
        )}

      </div>
    </div>
  )
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
}

export default CommentItem;
