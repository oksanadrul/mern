import { setAlert } from '../actions/alert';

export const handleServerErrors = (err) => dispatch => {
  const errors = err.response.data.errors;

  if (errors) {
    errors.forEach(error => {
      dispatch(setAlert(error.msg, 'error'));
    });
  }
};
