import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      width: '90%'
    },
    '& .MuiTextField-root': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  button: {
    margin: theme.spacing(3),
    '&.MuiButtonBase-root': {
      marginLeft: 0
    }
  },
  details: {
    flexDirection: 'column',
  },
}));

export {
  useStyles
}