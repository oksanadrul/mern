import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { experienceState } from './profileInitialStates'
import { addExperience } from '../../actions/profile';

import {
  makeStyles, Button, Typography, TextField, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary,
  FormControlLabel, Checkbox
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

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


const AddExperience = ({ history }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState(experienceState);
  const [toDateDisabled, toggleDisabled] = useState(false);
  const dispatch = useDispatch();

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e => {
    console.log(e.target.name, 'e')
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const setExperience = e => {
    e.preventDefault();
    dispatch(addExperience(formData, history));
  }

  return (
    <Fragment>
      <h1 className="large text-primary">
        Add An Experience
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <form className={classes.root} onSubmit={e => setExperience(e)}>

        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography className={classes.heading} color="primary">Job Title</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <TextField fullWidth label="* Job Title" variant="outlined" type="text" placeholder="* Job Title" name="title" value={title} helperText="* Required field"  onChange={e => onChange(e)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography className={classes.heading} color="primary">Company</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <TextField fullWidth label="* Company" variant="outlined" type="text" placeholder="* Company" name="company" value={company} helperText="* Required field" onChange={e => onChange(e)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography className={classes.heading} color="primary">Location</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <TextField fullWidth label="Location" variant="outlined" type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography className={classes.heading} color="primary">Time period</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <h4>From Date</h4>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  inputVariant="outlined"
                  label="From"
                  format="yyyy-MM-dd"
                  value={from}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      from: e,
                    });
                  }}
                />

              <FormControlLabel
                control={
                  <Checkbox name="current" color="primary" value={current} checked={current}
                    onChange={(e) => {
                    setFormData({
                      ...formData,
                      current: !current,
                      to: null
                    });
                    toggleDisabled(!toDateDisabled)
                    }}
                  />
                }
                label="Current Job"
              />
              <h4>To Date</h4>
              <KeyboardDatePicker margin="normal" inputVariant="outlined" disabled={toDateDisabled} label="To"
                format="yyyy-MM-dd" value={to}
                onChange={(e) => {
                    setFormData({
                      ...formData,
                      to: e
                    })
                  }}
                />
              </MuiPickersUtilsProvider>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography className={classes.heading} color="primary">Job Description</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <TextField fullWidth label="Job Description" variant="outlined" type="text" multiline rows={4} rowsMax={8} placeholder="Job Description" name="description" value={description} onChange={e => onChange(e)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Button className={classes.button} component={Link} to='/dashboard' variant="outlined" color="primary">Go Back</Button>
        <Button className={classes.button} type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </Fragment>
  )
}

export default withRouter(AddExperience);
