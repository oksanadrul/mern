import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT, CLEAR_PROFILE, CLEAR_ALL_POSTS } from '../../actions/types'

const AuthLinks = ({ history }) => {
  const dispatch = useDispatch();
  return (
    <ul>
      <li><Link to="/profiles">Developers</Link></li>
      <li><Link to="/posts">Posts</Link></li>
      <li>
        <Link to='/dashboard'>
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={() => {
          dispatch({ type: LOGOUT })
          dispatch({ type: CLEAR_PROFILE })
          dispatch({ type: CLEAR_ALL_POSTS })
          history.push('/login')
        }}
          href="#!"
        >
          <i className="fas fa-sign-out-alt" />{' '} <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  )
}

export default withRouter(AuthLinks);
