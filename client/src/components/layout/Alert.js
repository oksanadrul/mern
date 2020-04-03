import React from 'react';
import { useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Nontification(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Alert = () => {
  const alerts = useSelector(state => state.alert);
  return (
    alerts && alerts.map(alert => (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={true} >
        <Nontification severity={alert.alertType}>
          {alert.msg}
        </Nontification>
      </Snackbar>
    ))
  )
}

export default Alert;
