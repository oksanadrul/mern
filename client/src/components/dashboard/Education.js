import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import MaterialTable from 'material-table';
import { Paper } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import { tableIcons, detailsRow, useStyles, tableOptions } from './tableSettings';

const Education = ({ education }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const columns = [
    { title: 'School', field: 'school' },
    { title: 'Degree', field: 'degree' },
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
    <Paper className={`profile-github ${classes.root}`}>
      <h2 className="my-2">Education Credentials</h2>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        data={education}
        options={tableOptions}
        detailPanel={[
          {
            tooltip: 'Details',
            render: rowData => detailsRow(rowData)
          },
        ]}
        editable={{
          onRowDelete: (data) => Promise.resolve(dispatch(deleteEducation(data._id)))
        }}
      />
    </Paper>
  )
}

Education.propTypes = {
  education: PropTypes.array.isRequired,
}

export default Education;
