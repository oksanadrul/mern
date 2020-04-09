import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Backdrop } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default () => {
  const classes = useStyles();
  return (<div className={classes.root}>
    <Backdrop className={classes.backdrop} open={true} >
      <CircularProgress value={5} />
    </Backdrop>
  </div>
  )
};
