import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
  const alerts = useSelector(state => state.alert);
  return (
    alerts && alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>{alert.msg}</div>
    ))
  )
}

export default Alert;
