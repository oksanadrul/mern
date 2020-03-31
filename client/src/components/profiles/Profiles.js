import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import { connect } from 'react-redux'
import { getAllProfiles } from '../../actions/profile'
import ProfileItem from './ProfileItem'

const Profiles = ({
  profile: { profiles, loading },
  getAllProfiles
}) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);

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

Profiles.propTypes = {
  getAllProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { getAllProfiles })(Profiles);
