import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function BannerBox() {
    const textStyle = {
        fontWeight: '600',
        marginBottom: '10px',
        color: '#fff'
      };
  return (
    <div id="banner">
        
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      >
      <Box
        textAlign="center"
        width="70rem" // Set the fixed width
        >
        <Typography style={textStyle} variant="h3">
          CAMERA CAR PARKING OCCUPANCY DETECTION.
        </Typography>
        <Typography style={{marginBottom:'20px',color: '#fff'}}>
          Making software intelligent...
        </Typography>
        <Button style={{padding:'15px 15px'}} variant="contained">Learn More</Button>
      </Box>
    </Box>
          </div>
  );
}

export default BannerBox;
