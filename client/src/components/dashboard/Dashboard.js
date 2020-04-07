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
        <Experience experience={profile.experience} />
        <Education education={profile.education} />

        <div className="my-2">
          <button
            onClick={() => dispatch(deleteAccount())} className="btn btn-danger">
            <i className="fas fa-user-minus">{' '}Delete My Account</i>
          </button>
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

