import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthLinks from './AuthLinks';
import GuestLinks from './GuestLinks';

const Navbar = () => {
  const authState = useSelector(state => state.auth);
  const { isAuthenticated, loading } = authState;

  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>
        </h1>
        {!loading && <Fragment>{isAuthenticated ? <AuthLinks /> : <GuestLinks />}</Fragment>}
      </nav>
    </div>
  )
}

export default Navbar;
