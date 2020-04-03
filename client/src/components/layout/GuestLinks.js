import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    width: 400,
    background: 'transparent'
  },
});

const GuestLinks = () => {
  const classes = useStyles();
  const [value, setValue] = useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction component={Link} to='/profiles' label="Developers" value="folder" icon={<FolderIcon />} />
      <BottomNavigationAction component={Link} to='/register' label="Register" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction component={Link} to='/login' label="Login" value="recents" icon={<RestoreIcon />} />
    </BottomNavigation>
  )
};

export default GuestLinks;
