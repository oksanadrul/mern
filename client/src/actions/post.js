import axios from 'axios';
import { setAlert } from './alert';
import { handleServerErrors } from './handleServerErrors';
import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST } from './types';

// Get all posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('api/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  } catch (error) {
    dispatch(setAlert(error.response.data.msg, 'danger'))
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    })
  }
}

// Update likes
export const updateLikes = (actionType, postId) => async dispatch => {
  try {
    const res = await axios.put(`api/posts/${actionType}/${postId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id: postId, likes: res.data }
    })
  } catch (error) {
    dispatch(setAlert(error.response.data.msg, 'danger'))
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    })
  }
}

// Delete post
export const deletePost = postId => async dispatch => {
  try {
    const res = await axios.delete(`api/posts/${postId}`);

    dispatch({
      type: DELETE_POST,
      payload: { id: postId }
    })

    dispatch(setAlert('Post removed', 'success'))
  } catch (error) {
    dispatch(setAlert(error.response.data.msg, 'danger'))
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    })
  }
}
