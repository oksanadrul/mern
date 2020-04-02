import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentUserProfile } from '../../actions/profile';
import { deleteAccount } from '../../actions/profile'

const Dashboard = () => {
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
        <Link to='/create-profile' className='btn btn-primary my-1'>
          Create Profile
          </Link>
      </Fragment>}
  </Fragment>
}

export default Dashboard;

