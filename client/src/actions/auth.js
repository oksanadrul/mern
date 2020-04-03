
import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import { handleServerErrors } from './handleServerErrors';


// Load User
export const loadUser = () => async dispatch => {
  // if (Cookies.get('token')) {
  //   setAuthToken(Cookies.get('token'));
  // }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    })

  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}


// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());

  } catch (err) {
    dispatch(handleServerErrors(err));

    dispatch({
      type: REGISTER_FAIL
    })
  }
}

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })

    dispatch(loadUser());
  } catch (err) {
    dispatch(handleServerErrors(err));

    dispatch({
      type: LOGIN_FAIL
    })
  }
}


