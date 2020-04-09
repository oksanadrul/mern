import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import MaterialTable from 'material-table';
import { Paper } from '@material-ui/core';
import { tableIcons, detailsRow, useStyles, tableOptions } from './tableSettings'


const Experience = ({ experience }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const columns = [
    { title: 'Company', field: 'company' },
    { title: 'Title', field: 'title' },
    {
      title: 'Years',
      field: 'years',
      sorting: false,
      render: (rowData) => <Fragment>
        <Moment format='YYYY/MM/DD'>{rowData.from}</Moment> - {' '}
        {!rowData.to ? ('Now') : (
          <Moment format='YYYY/MM/DD'>{rowData.to}</Moment>
        )}
      </Fragment>
    },
  ];

  return (
    <Paper className={`profile-exp ${classes.root}`}>
      <h2 className="my-2">Experience Credentials</h2>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={experience}
        options={tableOptions}
        detailPanel={[
          {
            tooltip: 'Details',
            render: rowData => detailsRow(rowData)
          },
        ]}
        editable={{
          onRowDelete: (oldData) => Promise.resolve(dispatch(deleteExperience(oldData._id)))
        }}
      />
    </Paper>
  )
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
}

export default Experience;
