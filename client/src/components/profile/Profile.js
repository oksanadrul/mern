import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getProfileById } from '../../actions/profile'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
import ProfileGitHub from './ProfileGitHub'

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {

  useEffect(() => {
    getProfileById(match.params.id)
  }, [getProfileById, match.params.id]);


  return (
    <Fragment>{!profile || loading ? <Spinner /> : <Fragment>
      <Link to='/profiles' className='btn btn-light'>
        Back To Profiles
      </Link>
      {auth.isAuthenticated && !auth.loading && auth.user._id === profile.user._id && (<Link to='/edit-profile' className='btn btn-dark'>Edit Profile</Link>)}
      <div className="profile-grid my-1">
        <ProfileTop profile={profile} />
        <ProfileAbout profile={profile} />
        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          {profile.experience.length ?
            profile.experience.map(((exp, ind) => <ProfileExperience key={ind} expepience={exp} />))
            : <h4>No experience credentials</h4>
          }
        </div>
        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          {profile.education.length ?
            profile.education.map(((edu, ind) => <ProfileEducation key={ind} education={edu} />))
            : <h4>No education credentials</h4>
          }
        </div>

        {profile.githubusername && (
          <ProfileGitHub gitHubUserName={profile.githubusername} />
        )}
      </div>
    </Fragment>}
    </Fragment>
  )
}

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(Profile);
