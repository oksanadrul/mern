import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    '& .button-name': {
      ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        display: 'none'
      }
    },
    '& .MuiButton-label span': {
      ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        margin: 0
      }
    }
  },
}));

const DashboardActions = () => {
  const classes = useStyles();
  return (
    <ButtonGroup size="large" className={classes.margin} >
      <Button component={Link} to='/edit-profile' variant="outlined" color="primary" startIcon={<AccountCircleIcon />}>
        <span className="button-name">Edit Profile</span>
      </Button>
      <Button component={Link} to='/add-experience' variant="outlined" color="primary" startIcon={<WorkIcon />}>
        <span className="button-name">Add Experience</span>
      </Button>
      <Button component={Link} to='/add-experience' variant="outlined" color="primary" endIcon={<CastForEducationIcon />}>
        <span className="button-name">Add Education</span>
      </Button>
      <Button color="primary" endIcon={<GetAppIcon />}>
        <span className="button-name">Download CV</span>
      </Button>
    </ButtonGroup>
  )
}

export default DashboardActions;
