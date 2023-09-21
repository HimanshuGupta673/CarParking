import { Typography, Box, styled } from '@mui/material';
import React from 'react';

const StyledBox = styled(Box)(({ theme }) => ({
  height: '60px',
  display: 'flex',
  flexDirection: 'column', // Display children in a column
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'#1C1D21',
  color:'white',
  padding:'50px 0px'
}));

function Section8() {
  return (
    <StyledBox>
      <Box>
        <Typography variant="h4" fontWeight="600">PARKSmartly</Typography>
      </Box>
      <Box>
        <Typography variant="caption">COPYRIGHT © 2023. ALL RIGHTS RESERVED.</Typography>
      </Box>
    </StyledBox>
  );
}

export default Section8;
