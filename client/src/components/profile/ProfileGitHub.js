import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getGitHubRepos } from '../../actions/profile'


const ProfileGitHub = ({ gitHubUserName }) => {
  const repos = useSelector(state => state.profile.repos);
  const profileGitHubError = useSelector(state => state.profile.error)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGitHubRepos(gitHubUserName))
  }, [dispatch, gitHubUserName])

  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">Github Repos</h2>
      {!repos.length ? (
        Object.keys(profileGitHubError).length ? <h4>No Github profile found</h4> :
          <Spinner />
      ) : (
          repos.map(repo => (
            <div key={repo.id} className="repo bg-white p-1 my-1">
              <div>
                <h4>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h4>
                <p>{repo.description}</p>
              </div>
              <div>
                <ul>
                  <li className="badge badge-primary">
                    Stars: {repo.stargazers_count}
                  </li>
                  <li className="badge badge-dark">
                    Watchers: {repo.watchers_count}
                  </li>
                  <li className="badge badge-light">Forks: {repo.forks_count}</li>
                </ul>
              </div>
            </div>
          ))
        )}
    </div>
  );
}

ProfileGitHub.propTypes = {
  gitHubUserName: PropTypes.string.isRequired,
}

export default ProfileGitHub;
