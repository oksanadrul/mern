import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CodeIcon from '@material-ui/icons/Code';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';

const useStyles = makeStyles({
  root: {
    width: 250,
    background: 'transparent'
  },
});

const GuestLinks = () => {
  const classes = useStyles();
  const [value, setValue] = useState('login');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction component={Link} to='/profiles' label="Developers" value="profiles" icon={<CodeIcon />} />
      <BottomNavigationAction component={Link} to='/register' label="Register" value="register" icon={<AddToQueueIcon />} />
      <BottomNavigationAction component={Link} to='/login' label="Login" value="login" icon={<LockOpenIcon />} />
    </BottomNavigation>
  )
};

export default GuestLinks;
