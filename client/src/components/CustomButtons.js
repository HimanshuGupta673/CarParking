import React from 'react';
import { Typography, Box, styled } from '@mui/material';

const StyledLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    padding: '18px 0px'
  },
}));

const MarginLinks = styled(Typography)(({ theme }) => ({
  marginLeft: '18px',
  fontSize: '15px',
  fontWeight: 'normal',
  fontFamily: 'inherit',
  cursor:'pointer',
  [theme.breakpoints.down('md')]: {
    marginBottom: '20px',
    marginLeft: '25px'
  }
}));

function CustomButtons() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  return (
    <StyledLinks>
      <MarginLinks onClick={() => scrollToSection('about')}>Home</MarginLinks>
      <MarginLinks onClick={() => scrollToSection('skills')}>About Us</MarginLinks>
      <MarginLinks onClick={() => scrollToSection('projects')}>Contact Us</MarginLinks>
      <MarginLinks onClick={() => scrollToSection('aspiration')}>Register</MarginLinks>
    </StyledLinks>
  );
}

export default CustomButtons;
