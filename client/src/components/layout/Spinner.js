import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    position: 'absolute',
    top: '79px',
    left: '0'
  },
}));


export default () => {
  const classes = useStyles();
  return (<div className={classes.root}>
    <LinearProgress color="primary" />
  </div>
  )
};
