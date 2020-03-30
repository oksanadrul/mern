import axios from 'axios';
import { setAlert } from './alert';
import { handleServerErrors } from './handleServerErrors';

import { GET_PROFILE, PROFILE_ERROR } from './types';

// Get current user profile
export const getCurrentUserProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {

    dispatch(setAlert(error.response.data.msg, 'danger'))
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    })
  }
}

// Create or update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('/api/profile', formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created'))

    if (!edit) {
      history.push('/dashboard');
    }

  } catch (error) {
    dispatch(handleServerErrors(error));
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    })
  }
}

