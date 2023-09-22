import { Box, Typography, styled } from '@mui/material'
import React from 'react'

import VideocamIcon from '@mui/icons-material/Videocam';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
const Title = styled(Box)`
font-size:60px
`
const Section7Styled = styled(Box)(({ theme }) => ({
  padding: '60px 200px',
  margin: '20px 0px',
  [theme.breakpoints.down('md')]: {
    padding: '60px 20px',
  },
}))
const BlueBorder = styled('div')`
  width: 40px;
  height: 4px;
  background-color: #0064a8;
  margin: 10px auto;
`;
const StyledFeatures = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '40px',
  fontWeight: '600',
  fontFamily: 'sans-serif',
}))
const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    display: 'block'
  }
}))
const StyledText = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display:'flex',
    textAlign:'justify'
  }
}))

const InBox = styled(Box)(({ theme }) => ({
  padding: '0px 35px',
  margin: '0px 20px',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
  transform: 'translateZ(0)',
  transition: 'transform 0.5s ease',
  willChange: 'transform',
  

  [theme.breakpoints.down('md')]: {
  padding: '20px 20px',
  margin:'40px 0px'
},
  [theme.breakpoints.between('md', 'lg')]: {
  padding: '20px 20px',
},
    
}))
function Section7() {
  return (
    <div id='aboutUs'>
      <Section7Styled>
        <Box marginBottom="40px">
          <StyledFeatures>About Us</StyledFeatures>
          <BlueBorder />
        </Box>
        <Box marginBottom="20px">
          {/* <StyledText color="#808080">We are a young "start-up" company, determined to invent new smart solutions, which helps with "small" problems of modern world. Our technical solutions are based on years of experience in the field of A.I.</StyledText> */}
        </Box>
        <Box>
          <Container>
            <InBox>
              <Title><VideocamIcon style={{ color: '#0064a8', fontSize: '40px' }} /></Title>
              <Typography style={{ fontWeight: '600', fontFamily: 'sans-serif', fontSize: '20px' }}>Image processing</Typography>
              <Typography style={{ fontFamily: 'sans-serif', color: "#808080", paddingBottom: "20px" }}>Teaching cameras to recognize objects.</Typography>
            </InBox>
            <InBox>
              <Title><AutoAwesomeIcon style={{ color: '#0064a8', fontSize: '40px' }} /></Title>
              <Typography style={{ fontWeight: '600', fontFamily: 'sans-serif', fontSize: '20px' }}>Customized applications</Typography>
              <Typography style={{ fontFamily: 'sans-serif', color: "#808080", paddingBottom: "20px" }}>Tell us about your problem and we design a solution just for you.</Typography>
            </InBox>
            <InBox>
              <Title><AutoFixNormalIcon style={{ color: '#0064a8', fontSize: '40px' }} /></Title>
              <Typography style={{ fontWeight: '600', fontFamily: 'sans-serif', fontSize: '20px' }}>Smart functions</Typography>
              <Typography style={{ fontFamily: 'sans-serif', color: "#808080", paddingBottom: "20px" }}>We are successful in the usage of A.I.</Typography>
            </InBox>
          </Container>
        </Box>
      </Section7Styled>
    </div>
  )
}

export default Section7
