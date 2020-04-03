import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const initialState = {
  name: '',
  email: '',
  password: '',
  password2: ''
}

const Register = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(setAlert('Password do not match', 'error'));
    } else {
      dispatch(register({ name, email, password }));
    }
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className="form-wrapper">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form onSubmit={e => onSubmit(e)} className={classes.root}>
        <TextField fullWidth variant="outlined" required
          label="Name"
          autoComplete="username"
          name="name"
          value={name}
          onChange={e => onChange(e)}
        />
        <TextField fullWidth variant="outlined" required
          label="Email Address"
          autoComplete="email"
          name="email"
          value={email}
          onChange={e => onChange(e)}
        />
        <TextField fullWidth variant="outlined" required
          label="Password"
          autoComplete="current-password"
          type="password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
        />
        <TextField fullWidth variant="outlined" required
          label="Confirm Password"
          type="password"
          autoComplete="new-password"
          name="password2"
          value={password2}
          onChange={e => onChange(e)}
        />
        <Button fullWidth size="large" variant="contained" type="submit" color="primary"> Register </Button>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  )
}

export default Register;
