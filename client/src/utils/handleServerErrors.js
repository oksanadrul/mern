import { setAlert } from '../actions/alert';

const handleServerErrors = (err) => dispatch => {
  const errors = err.response.data.errors;

  if (errors) {
    errors.forEach(error => {
      dispatch(setAlert(error.msg, 'danger'));
    });
  }
};

export default handleServerErrors;
