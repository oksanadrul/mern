import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { educationState } from './profileInitialStates';
import { useStyles } from './formStyles';
import { addEducation } from '../../actions/profile';

import {
  Button, Typography, TextField, ExpansionPanel, ExpansionPanelDetails,
  ExpansionPanelSummary, FormControlLabel, Checkbox
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const AddEducation = ({ history }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState(educationState);
  const [toDateDisabled, toggleDisabled] = useState(false);
  const dispatch = useDispatch();

  const { school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const setEducation = e => {
    e.preventDefault();
    dispatch(addEducation(formData, history));
  }
  return (
    <Fragment>
      <h1 className="large text-primary">
        Add Your Education
      </h1>
      <p className="lead">
        <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that
        you have attended
      </p>
      <form className={classes.root} onSubmit={(e) => setEducation(e)}>
        <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography className={classes.heading} color="primary">School or Bootcamp</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <TextField fullWidth label="* School or Bootcamp" variant="outlined" type="text" placeholder="* School or Bootcamp" name="school" value={school} helperText="* Required field"  onChange={e => onChange(e)} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography className={classes.heading} color="primary">Degree or Certificate</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <TextField fullWidth label="* Degree or Certificate" variant="outlined" type="text" placeholder="* Degree or Certificate" name="degree" value={degree} helperText="* Required field" onChange={e => onChange(e)} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography className={classes.heading} color="primary">Field of Study</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <TextField fullWidth label="Field of Study" variant="outlined" type="text" placeholder="Field of Study" name="fieldofstudy" value={fieldofstudy} onChange={e => onChange(e)} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography className={classes.heading} color="primary">Time period</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <h4>From Date</h4>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker margin="normal" inputVariant="outlined" label="From" format="yyyy-MM-dd"
                    value={from}
                    onChange={(e) => {setFormData({...formData, from: e})}}
                  />

                <FormControlLabel
                  control={
                    <Checkbox name="current" color="primary" value={current} checked={current}
                      onChange={(e) => {
                        setFormData({...formData, current: !current, to: null});
                        toggleDisabled(!toDateDisabled)
                      }}
                    />
                  }
                  label="Current Job"
                />
                <h4>To Date</h4>
                <KeyboardDatePicker margin="normal" inputVariant="outlined" disabled={toDateDisabled} label="To" format="yyyy-MM-dd"
                  value={to}
                  onChange={(e) => { setFormData({...formData, to: e})}}
                  />
                </MuiPickersUtilsProvider>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography className={classes.heading} color="primary">Program Description</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <TextField fullWidth label="Program Description" variant="outlined" type="text" multiline rows={4} rowsMax={8} placeholder="Program Descriptionn" name="description" value={description} onChange={e => onChange(e)} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <Button className={classes.button} component={Link} to='/dashboard' variant="outlined" color="primary">Go Back</Button>
          <Button className={classes.button} type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </Fragment>
  )
}

export default withRouter(AddEducation);
