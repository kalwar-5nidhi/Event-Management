import React from 'react';
import { Typography, Box } from '@mui/material';
import mountains from '../Images/mountains.png';  // <-- fixed relative path

export default function Dashboard() {
  return (
    <Box
      p={3}
      sx={{
        height: '100vh',
        backgroundImage: `url(${mountains})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to Event Management Dashboard
      </Typography>
      {/* <Typography>
        Use the sidebar to navigate between Events and Create Event pages.
      </Typography> */}
    </Box>
  );
}
