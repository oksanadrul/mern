import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthLinks from './AuthLinks';
import GuestLinks from './GuestLinks';
import { Button } from '@material-ui/core';

const Navbar = () => {
  const authState = useSelector(state => state.auth);
  const { isAuthenticated } = authState;

  return (
    <div>
      <nav className="navbar bg-dark">
        <Button variant="contained" color="primary">Hello World</Button>
        <h1>
          <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>
        </h1>
        <Fragment>{isAuthenticated ? <AuthLinks /> : <GuestLinks />}</Fragment>
      </nav>
    </div>
  )
}

export default Navbar;
