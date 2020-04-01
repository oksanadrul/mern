import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`profile/${user}`}>
          <img className="round-img" src={avatar} alt="avatar" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">Posted <Moment format='YYYY/MM/DD'>{date}</Moment></p>
        <button type="button" class="btn btn-light">
          <i class="fas fa-thumbs-up"></i>{' '}
          {likes.length && (<span>{likes.length}</span>)}
        </button>
        <button type="button" class="btn btn-light">
          <i class="fas fa-thumbs-down"></i>
        </button>
        <Link to={`/post/${_id}`} class="btn btn-primary">
          Discussion {comments.length && (<span class='comment-count'>{comments.length}</span>)}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button type="button" class="btn btn-danger">
            <i class="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {})(PostItem)
