import React from 'react';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

const ServiceError = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
      <Alert severity="error" variant="filled" style={{ backgroundColor: '#FFCDD2', color: '#B71C1C' }}>
        <Typography>Sorry, unable to process your request. Please try again later.</Typography>
        <Button color="inherit" onClick={() => window.location.reload()}>Retry</Button>
      </Alert>
    </div>
  );
};

export default ServiceError;
