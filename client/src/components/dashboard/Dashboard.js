import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentUserProfile } from '../../actions/profile';
import { deleteAccount } from '../../actions/profile';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ProfileTop from '../profile/ProfileTop';
import ProfileAbout from '../profile/ProfileAbout';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  margin: {
    marginTop: '1rem',
  },
}));


const Dashboard = () => {
  const classes = useStyles();
  const auth = useSelector(state => state.auth);
  const profileState = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const { user } = auth;
  const { profile, loading } = profileState;

  useEffect(() => {
    dispatch(getCurrentUserProfile());
  }, [dispatch])

  return loading && !profile ? <Spinner /> : <Fragment>
    <h1 className='large text-primary'>Dashboard</h1>
    <p className='lead'>
      <i className='fas fa-user' /> Welcome {user && user.name}
    </p>
    {profile ? (
      <Fragment>
        <DashboardActions />
        <div className="profile-grid my-1">
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
        </div>


        <div className="my-2">
          <Button color="secondary" variant="contained" endIcon={<DeleteIcon />} onClick={() => dispatch(deleteAccount())}>
            Delete My Account
          </Button>
        </div>
      </Fragment>
    ) :
      <Fragment>
        <p>You have not yet setup a profile, please add some info</p>
        <Button component={Link} to='/create-profile' variant="outlined" color="primary" className={classes.margin}>Create Profile </Button>
      </Fragment>}
  </Fragment>
}

export default Dashboard;

