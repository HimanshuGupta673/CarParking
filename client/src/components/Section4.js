import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Carousel from 'react-multi-carousel';
import image1 from '../images/image11.jpg'
const Section4Styled = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: '60px 200px'
}))
const BlueBorder = styled('div')`
  width: 40px;
  height: 4px;
  background-color: #0064a8;
  margin: 10px 0px;
`;
const StyledBox1 = styled(Box)(({ theme }) => ({
    width: '50%'
}))
const StyledBox2 = styled(Box)(({ theme }) => ({
    width: '50%',
    // paddingLeft:'20px',
    marginLeft:'20px'
}))
const StyledTypo = styled(Box)(({ theme }) => ({
    margin: '20px 0px'
}))
const StyledImage = styled('img')(({ theme }) => ({
    width:'90%',
    height:'90%'
}))
const listItemStyle = {
    display: 'flex',
    alignItems: 'center', // Center items vertically
  };

  const iconStyle = {
    color: '#0064a8',
    marginRight: '8px', // Add space between the icon and text
  };
function Section4() {
    return (
        <Box bgcolor="#FAFAFA">
            <Section4Styled>
                <StyledBox1>
                    <Box>
                        <Typography style={{
                            fontSize: '40px',
                            fontWeight: '600',
                            fontFamily: 'sans-serif',
                        }}>Usage</Typography>
                        <BlueBorder />
                    </Box>
                    <Box>
                        <Typography style={{ color: '#808080' }}>We focus mainly on parking space owners. We offer the ability to observe and monitor parking spaces and provide data to web pages or other systems owned by the customer. Typical usecases are:</Typography>
                        <StyledTypo style={listItemStyle}>
                            <CheckCircleOutlineIcon style={iconStyle} />
                            Municipal parking
                        </StyledTypo>
                        <StyledTypo style={listItemStyle}>
                            <CheckCircleOutlineIcon style={iconStyle} />
                            Hotel parking
                        </StyledTypo>
                        <StyledTypo style={listItemStyle}>
                            <CheckCircleOutlineIcon style={iconStyle} />
                            Shopping mall parking
                        </StyledTypo>
                        <StyledTypo style={listItemStyle}>
                            <CheckCircleOutlineIcon style={iconStyle} />
                            Office park parking
                        </StyledTypo>
                    </Box>
                </StyledBox1>
                <StyledBox2 >
                    <StyledImage src={image1} alt="" />
                </StyledBox2>
            </Section4Styled>
        </Box>
    )
}

export default Section4


