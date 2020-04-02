import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST, GET_POST, ADD_COMMENT, DELETE_COMMENT } from './types';

// Get all posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');

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

// Get post by ID
export const getPost = postId => async dispatch => {

  try {
    const res = await axios.get(`/api/posts/${postId}`);

    dispatch({
      type: GET_POST,
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

// Add post
export const addPost = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post(`api/posts`, formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data
    })

    dispatch(setAlert('Post created', 'success'))
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
    const res = await axios.put(`/api/posts/${actionType}/${postId}`);

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
    await axios.delete(`/api/posts/${postId}`);

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

// Add comment to post
export const addComment = (postId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post(`/api/posts/comment/${postId}`, formData, config)

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    })

    dispatch(setAlert('Comment Added', 'success'))
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

// Remove comment to post
export const removeComment = (postId, commentId) => async dispatch => {
  try {
    await axios.delete(`/api/posts/comment/${postId}/${commentId}`)

    dispatch({
      type: DELETE_COMMENT,
      payload: { commentId }
    });
    dispatch(setAlert('Comment Removed', 'success'));

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
