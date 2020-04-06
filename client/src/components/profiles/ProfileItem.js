import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  const devSkill = skills.slice(0, 4).map((skill, index) => (
    <li key={index} className='text-primary'>
      <i className='fas fa-check' /> {skill}
    </li>
  ));

  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Button component={Link} to={`/profile/${_id}`} variant="contained" color="primary">View Profile</Button>
      </div>
      <ul>
        {devSkill}
      </ul>
    </div>
  )
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileItem;
