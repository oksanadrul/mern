import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
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

const Login = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    dispatch(login(email, password));
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className="form-wrapper">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form onSubmit={e => onSubmit(e)} className={classes.root}>
        <TextField fullWidth variant="outlined"
          label="Email Address"
          autoComplete="email"
          name="email"
          value={email}
          onChange={e => onChange(e)}
        />
        <TextField fullWidth variant="outlined"
          label="Password"
          autoComplete="password"
          name="password"
          value={password}
          type="password"
          onChange={e => onChange(e)}
          minLength="6"
        />
        <Button fullWidth size="large" variant="contained" type="submit" color="primary"> Login </Button>
      </form>
      <p className="my-1">
        Don't  have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  )
};

export default Login;
