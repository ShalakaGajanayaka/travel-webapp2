import React from 'react';
import { Box } from '@mui/material';
import ErrorPage from '../errorpage/ErrorPage';

export default function Index() {
  return (
    <Box>
      <ErrorPage 
        errorMessage="No Support Requests Available" 
        errorDesc="You haven't submitted any support requests yet. Need help? Contact our support team!"
      />
    </Box>
  );
}