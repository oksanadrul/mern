
import React from 'react';
import { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


const tableIcons = {
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline color="secondary" {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles(() => ({
  root: {
    overflowX: 'auto',
    background: 'transparent',
    boxShadow: 'none',
    maxWidth: '510px'
  },
  margin: {
    marginTop: '1rem',
  },
}));

const tableOptions = {
  search: true,
  searchFieldAlignment: 'right',
  headerStyle: {
    color: '#00bcd4'
  },
  actionsColumnIndex: -1,
  emptyRowsWhenPaging: false,
  showTitle: false,
  detailPanelType: 'multiple',
  padding: 'dense',
  draggable: true,
  tableLayout: 'auto'
};

const detailsRow = (rowData) => {
  return (
    <div style={{ padding: '12px 48px', maxWidth: '510px' }}>
      <span style={{ color: '#00bcd4' }}>Job description</span>: {rowData.description}
    </div>
  )
};

export {
  tableIcons,
  useStyles,
  tableOptions,
  detailsRow
}
