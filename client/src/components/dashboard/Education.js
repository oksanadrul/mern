import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { useDispatch } from 'react-redux'
import { deleteEducation } from '../../actions/profile'

const Education = ({ education }) => {
  const dispatch = useDispatch();

  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td >{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td className="hide-sm">
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {' '}
        {!edu.to ? (
          'Now'
        ) : (
            <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
          )}
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => dispatch(deleteEducation(edu._id))}>Delete</button>
      </td>
    </tr >
  ));



  return (
    <div className="profile-github">
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>

    </div>
  )
}

Education.propTypes = {
  education: PropTypes.array.isRequired,
}

export default Education;
