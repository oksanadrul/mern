import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT, CLEAR_PROFILE, CLEAR_ALL_POSTS } from '../../actions/types';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  root: {
    width: 300,
    background: 'transparent'
  },
});


const AuthLinks = ({ history }) => {
  const [value, setValue] = useState('dashboard');
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction component={Link} to='/profiles' label="Developers" value="folder" icon={<FolderIcon />} />
      <BottomNavigationAction component={Link} to='/posts' label="Posts" value="posts" icon={<ChatBubbleOutlineIcon />} />
      <BottomNavigationAction component={Link} to='/dashboard' label="Dashboard" value="dashboard" icon={<DashboardIcon />} />
      <BottomNavigationAction
        onClick={() => {
          dispatch({ type: LOGOUT })
          dispatch({ type: CLEAR_PROFILE })
          dispatch({ type: CLEAR_ALL_POSTS })
          history.push('/login')
        }}
        label="Logout" value="logout" icon={<ExitToAppIcon />} />
    </BottomNavigation>
  )
}

export default withRouter(AuthLinks);
