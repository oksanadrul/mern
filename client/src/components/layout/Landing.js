import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';


const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, generate and download CV, share posts and get help from
            other developers
          </p>
          <ButtonGroup size="large" aria-label="large outlined primary button group">
            <Button color="primary" component={Link} to={'/register'}>Sign Up</Button>
            <Button color="primary" component={Link} to={'/login'}>Login</Button>
          </ButtonGroup>
        </div>
      </div>
    </section>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);
