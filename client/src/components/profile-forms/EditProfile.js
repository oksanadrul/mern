import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { profileState } from './profileInitialStates';
import { createProfile, getCurrentUserProfile } from '../../actions/profile';

import {
  makeStyles, Button, Typography, InputLabel, MenuItem, FormHelperText, FormControl,
  Select, TextField, InputAdornment, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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
  details: {
    flexDirection: 'column',
    '& > p': {
      marginBottom: 15
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
}));


const EditProfile = ({ history }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState(profileState);

  const storeProfile = useSelector(state => state.profile)
  const { profile, loading } = storeProfile;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!profile) dispatch(getCurrentUserProfile());
    if (!loading) {
      const profileData = { ...profileState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }

      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      setFormData(profileData);
    }
  }, [profile, loading, dispatch]);

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

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendProfile = (e) => {
    e.preventDefault();
    dispatch(createProfile(formData, history, true))
  }

  return (
    <Fragment>
      <h1 className="large text-primary">
        Edit Your Profile
      </h1>
      <p className="lead">
        <PersonIcon fontSize="large" /> Let's get some information to make your profile stand out
      </p>
      <form className={classes.root} onSubmit={e => sendProfile(e)}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography className={classes.heading} color="primary">Professional Status</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <FormControl variant="outlined" fullWidth className={classes.formControl}>
              {status && <InputLabel>Professional Status</InputLabel>}
              <Select
                displayEmpty
                labelId="demo-simple-select-label"
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
                <MenuItem value="Instructor or Teacher">Instructor or Teacher</MenuItem>
                <MenuItem value="Intern">Intern</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
              {!status && <FormHelperText><small>* Required field</small></FormHelperText>}
            </FormControl>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography className={classes.heading} color="primary">Company</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <p className="form-text">Could be your own company or one you work for</p>
            <TextField fullWidth label="Company" variant="outlined" type="text" placeholder="Company" name="company" value={company} onChange={e => onChange(e)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography className={classes.heading} color="primary">Website</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <p className="form-text">Could be your own or a company website</p>
            <TextField fullWidth label="Website" variant="outlined" type="text" placeholder="Website" name="website" value={website} onChange={e => onChange(e)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography className={classes.heading} color="primary">Location</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <p className="form-text">City & state suggested (eg. Boston, MA)</p>
            <TextField fullWidth label="Location" variant="outlined" type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography className={classes.heading} color="primary">Skills</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <p className="form-text">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</p>
            <TextField fullWidth label="* Skills" variant="outlined" type="text" placeholder="* Skills" name="skills" value={skills} helperText="* Required field" onChange={e => onChange(e)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography className={classes.heading} color="primary">Github Username</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <p className="form-text">If you want your latest repos and a Github link, include your username</p>
            <TextField fullWidth label="Github Username" variant="outlined" type="text" placeholder="Github Username" name="githubusername" value={githubusername} onChange={e => onChange(e)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography className={classes.heading} color="primary">Bio</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <p className="form-text">Tell us a little about yourself</p>
            <TextField fullWidth label="Bio" variant="outlined" type="text" multiline rows={4} rowsMax={8} placeholder="A short bio of yourself" name="bio" value={bio} onChange={e => onChange(e)} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color="primary" />}>
            <Typography className={classes.heading} color="primary">Social Network</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <p className="form-text">Add Social Network Links</p>
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
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Button className={classes.button} component={Link} to='/dashboard' variant="outlined" color="primary">Go Back</Button>
        <Button className={classes.button} type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </Fragment>
  )
}

export default withRouter(EditProfile);
