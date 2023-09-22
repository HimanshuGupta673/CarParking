import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
const Section3Styled = styled(Box)(({ theme }) => ({
    padding: '60px 200px',
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
const StyledRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '50px 0px',
    [theme.breakpoints.down('md')]: {
        display:'block',
    },
}))
const StyledRow1 = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '30rem',
    height: '10rem',
    transition: 'background-color 0.3s ease',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    transform: 'translateZ(0)',
    transition: 'transform 0.5s ease',
    willChange: 'transform',

    '&:hover': {
        backgroundColor: '#1C1D21',
        color: 'white',
    },
    [theme.breakpoints.down('md')]: {
        width:'fit-content',
        height:'100%',
        margin:'40px 0px',
        paddingBottom:'20px'
    },
}))
const StyledEye = styled(Box)(({ theme }) => ({
    width: '30%',
    padding:'20px 10px'
}))
const StyledTypo = styled(Typography)(({ theme }) => ({
    '&:hover': {
        color: 'white',
    },
}))
function Section3() {
    return (
        <Section3Styled>
            <Box>
                <StyledFeatures>
                    Features
                </StyledFeatures>
                <BlueBorder />
            </Box>
            <Box>
                <StyledRow>
                    <StyledRow1>
                        <StyledEye>
                            <VisibilityIcon style={{ color: '#0064a8', fontSize: '30px' }} />
                        </StyledEye>
                        <Box>
                            <StyledTypo style={{ fontWeight: '600', fontSize: '20px', padding: '20px 0px' }}>Occupancy detection</StyledTypo>
                            <Typography color="#808080">Application analyses images from the cameras and performs car/boat parking occupancy detection.</Typography>
                        </Box>
                    </StyledRow1>
                    <StyledRow1>
                        <StyledEye>
                            <EqualizerIcon style={{ color: '#0064a8', fontSize: '30px' }} />
                        </StyledEye>
                        <Box>
                            <StyledTypo style={{ fontWeight: '600', fontSize: '20px', padding: '20px 0px' }}>Statistics</StyledTypo>
                            <Typography color="#808080">Our system provides several types of statistics about usage of your parking spaces.</Typography>
                        </Box>
                    </StyledRow1>
                </StyledRow>
                <StyledRow>
                    <StyledRow1>
                        <StyledEye>
                            <MobileFriendlyIcon style={{ color: '#0064a8', fontSize: '30px' }} />
                        </StyledEye>
                        <Box>
                            <StyledTypo style={{ fontWeight: '600', fontSize: '20px', padding: '20px 0px' }}>Navigace</StyledTypo>
                            <Typography color="#808080">Thanks to the mobile app, it is easy to navigate directly to free parking place.</Typography>
                        </Box>
                    </StyledRow1>
                    <StyledRow1>
                        <StyledEye>
                            <DirectionsCarIcon style={{  color: '#0064a8', fontSize: '30px' }} />
                        </StyledEye>
                        <Box>
                            <StyledTypo style={{ fontWeight: '600', fontSize: '20px', padding: '20px 0px' }}>Reading car license plates</StyledTypo>
                            <Typography color="#808080">Application is able to read and recognize car license plates, so you know who parks on your parking place.</Typography>
                        </Box>
                    </StyledRow1>
                </StyledRow>
            </Box>
        </Section3Styled>
    )
}

export default Section3
