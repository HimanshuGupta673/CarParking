import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function BannerBox() {
  const navigate = useNavigate();
  const textStyle = {
    fontWeight: '600',
    marginBottom: '10px',
    color: '#fff'
  };
  const handlebook = () => {
    navigate('/bookslot')
  }
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
          width="70rem"
        >
          <Typography style={textStyle} variant="h3">
            CAMERA CAR PARKING OCCUPANCY DETECTION.
          </Typography>
          <Typography style={{ marginBottom: '20px', color: '#fff' }}>
            Making software intelligent...
          </Typography>
          <Button onClick={() => handlebook()} style={{ padding: '15px 15px' }} variant="contained">Book Slot</Button>
        </Box>
      </Box>
    </div>
  );
}

export default BannerBox;
