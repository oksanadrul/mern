import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner';
import { getCurrentUserProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { deleteAccount } from '../../actions/profile'

const Dashboard = ({
  getCurrentUserProfile,
  auth: { user },
  profile: { profile, loading },
  deleteAccount
}) => {
  useEffect(() => {
    getCurrentUserProfile();
  }, [getCurrentUserProfile])

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
            onClick={() => deleteAccount()} className="btn btn-danger">
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

Dashboard.propTypes = {
  getCurrentUserProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentUserProfile, deleteAccount })(Dashboard);
