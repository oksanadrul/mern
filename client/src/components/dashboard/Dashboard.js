import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner';
import { getCurrentUserProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions'

const Dashboard = ({
  getCurrentUserProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentUserProfile();
  }, [])

  return loading && !profile ? <Spinner /> : <Fragment>
    <h1 className='large text-primary'>Dashboard</h1>
    <p className='lead'>
      <i className='fas fa-user' /> Welcome {user && user.name}
    </p>
    {profile ? (
      <Fragment>
        <DashboardActions />
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
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentUserProfile })(Dashboard);
