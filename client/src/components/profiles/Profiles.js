import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

const Profiles = () => {
  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const { profiles, loading } = profile;

  useEffect(() => {
    dispatch(getAllProfiles());
  }, [dispatch]);

  const allProfiles = profiles.map(profile => (
    <ProfileItem key={profile._id} profile={profile} />
  ))

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
          <Fragment>
            <h1 className='large text-primary'>Developers</h1>
            <p className='lead'>
              <i className='fab fa-connectdevelop' /> Browse and connect with
              developers
          </p>
            <div className='profiles'>
              {profiles.length ?
                allProfiles
                :
                <h4>No profiles found...</h4>
              }
            </div>
          </Fragment>
        )}
    </Fragment>
  );
}

export default Profiles;
