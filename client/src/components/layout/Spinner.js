import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    '& > .MuiLinearProgress-root': {
      marginLeft: '-2rem',
      marginRight: '-2rem'
    },
  },
}));


export default () => {
  const classes = useStyles();
  return (<div className={classes.root}>
    <LinearProgress color="primary" />
  </div>
  )
};
