import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  makeStyles, Stepper, StepLabel, Step, StepContent, Button,
  Paper, Typography, InputLabel, MenuItem, FormHelperText, FormControl,
  Select, TextField, Switch, InputAdornment
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import WarningIcon from '@material-ui/icons/Warning';

import { profileState } from './profileInitialStates';
import { createProfile } from '../../actions/profile';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    '& .MuiTextField-root': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  typography: {
    display: 'flex',
    alignItems: 'center',
  }
}));

function getSteps() {
  return [
    { name: 'status', value: 'Professional Status' },
    { name: 'company', value: 'Add Company' },
    { name: 'website', value: 'Website' },
    { name: 'location', value: 'Location' },
    { name: 'skills', value: 'Skills' },
    { name: 'githubusername', value: 'Github Username' },
    { name: 'bio', value: 'Bio' },
    { name: 'socialLinks', value: 'Social Network Links' }
  ];
}




const CreateProfile = ({ history }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState(profileState);
  const [displaySocialInputs, toogleSocialInputs] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const dispatch = useDispatch();

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const handleNext = (e) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) sendProfile(e);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendProfile = (e) => {
    e.preventDefault();
    dispatch(createProfile(formData, history))
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Fragment>
            <FormControl variant="outlined" fullWidth className={classes.formControl}>
              {status && <InputLabel id="demo-simple-select-label">Professional Status</InputLabel>}
              <Select
                displayEmpty
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Professional Status"
                name="status"
                value={status}
                onChange={e => onChange(e)}
                required
              >
                <MenuItem value="" disabled>* Select Professional Status</MenuItem>
                <MenuItem value="Developer">Developer</MenuItem>
                <MenuItem value="Junior Developer">Junior Developer</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
                <MenuItem value="Student or Learning">Student or Learning</MenuItem>
                <MenuItem value="Instructor or Teacherg">Instructor or Teacher</MenuItem>
                <MenuItem value="Intern">Intern</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
              {!status && <FormHelperText><small>* Required field</small></FormHelperText>}
            </FormControl>
          </Fragment>)
      case 1:
        return (
          <Fragment>
            <p className="form-text">Could be your own company or one you work for</p>
            <TextField fullWidth variant="outlined" type="text" placeholder="Company" name="company" value={company} onChange={e => onChange(e)} />
          </Fragment>
        );
      case 2:
        return (
          <Fragment>
            <p className="form-text">Could be your own or a company website</p>
            <TextField fullWidth variant="outlined" type="text" placeholder="Website" name="website" value={website} onChange={e => onChange(e)} />
          </Fragment>
        );
      case 3:
        return (
          <Fragment>
            <p className="form-text">City & state suggested (eg. Boston, MA)</p>
            <TextField fullWidth variant="outlined" type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
          </Fragment>
        );
      case 4:
        return (
          <Fragment>
            <p className="form-text">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</p>
            <TextField fullWidth variant="outlined" type="text" placeholder="* Skills" name="skills" value={skills} helperText="* Required field" onChange={e => onChange(e)} />
          </Fragment>
        );
      case 5:
        return (
          <Fragment>
            <p className="form-text">If you want your latest repos and a Github link, include your username</p>
            <TextField fullWidth variant="outlined" type="text" placeholder="Github Username" name="githubusername" value={githubusername} onChange={e => onChange(e)} />
          </Fragment>
        );
      case 6:
        return (
          <Fragment>
            <p className="form-text">Tell us a little about yourself</p>
            <TextField fullWidth variant="outlined" type="text" multiline rows={4} rowsMax={8} placeholder="A short bio of yourself" name="bio" value={bio} onChange={e => onChange(e)} />
          </Fragment>
        );
      case 7:
        return (
          <Fragment>
            <p className="form-text">Add Social Network Links</p>
            <Switch checked={displaySocialInputs} name="displaySocialInputs" label="Add" color="primary" onChange={() => toogleSocialInputs(!displaySocialInputs)} />
            {displaySocialInputs && <Fragment>
              <TextField fullWidth label="Twitter URL" variant="outlined"
                placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TwitterIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField fullWidth label="Facebook URL" variant="outlined"
                placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FacebookIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField fullWidth label="YouTube URL" variant="outlined"
                placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <YouTubeIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField fullWidth label="Linkedin URL" variant="outlined"
                placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkedInIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField fullWidth label="Instagram URL" variant="outlined"
                placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <InstagramIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Fragment>
            }
          </Fragment>
        );
      default:
        return 'Unknown step';
    }
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your profile stand out
     </p>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label.value}>
              {(activeStep > index && !formData[label.name]
                && (!formData.twitter || !formData.facebook || !formData.linkedin || !formData.youtube || !formData.instagram)) ? (
                  <StepLabel><Typography variant="caption" className={classes.typography}> <WarningIcon  color='primary' />{' '}{label.value} is opnional field, but you can fill it for completing all your Profile </Typography></StepLabel>
                ) : <StepLabel>{label.value}</StepLabel>
              }
              <StepContent>

                <Typography component={'div'}>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  {activeStep !== 0 && (
                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>Back</Button>)
                  }
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => handleNext(e)}
                    className={classes.button}
                    disabled={(label.name === 'status' && !status) || (label.name === 'skills' && !skills)}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button className={classes.button} component={Link} to='/profiles' variant="outlined" color="primary">Go Back</Button>
          </Paper>
        )}
      </div>
    </Fragment>
  )
}

export default withRouter(CreateProfile);
