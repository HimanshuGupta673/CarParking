import React from 'react';
import { Typography, Box, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
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
  transition: 'border-bottom 0.2s ease',
  [theme.breakpoints.down('md')]: {
    marginBottom: '20px',
    marginLeft: '25px'
  },
  '&:hover': { 
    borderBottom: '2px solid #0064a8', 
  },
}));

function CustomButtons() {
    const navigate = useNavigate()
    const handleNavigateContact = () =>{
      navigate('/contact')
    }
    const handleNavigateRegister = () =>{
      navigate('/register')
    }

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
      <MarginLinks onClick={() => scrollToSection('banner')}>Home</MarginLinks>
      <MarginLinks onClick={() => scrollToSection('aboutUs')}>About Us</MarginLinks>
      <MarginLinks onClick={() => handleNavigateContact()}>Contact Us</MarginLinks>
      <MarginLinks onClick={() => handleNavigateRegister()}>Register</MarginLinks>
    </StyledLinks>
  );
}

export default CustomButtons;
