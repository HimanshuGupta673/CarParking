import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
const Section3Styled = styled(Box)(({ theme }) => ({
    padding: '60px 200px'
}))
const BlueBorder = styled('div')`
  width: 40px;
  height: 4px;
  background-color: blue;
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
    justifyContent:'space-between',
    margin:'50px 0px'
}))
const StyledRow1 = styled(Box)(({ theme }) => ({
    display: 'flex',
    border:'1px solid black',
    width:'30rem',
    height:'10rem'
}))
const StyledEye = styled(Box)(({ theme }) => ({
    width:'30%',

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
                            <VisibilityIcon style={{padding:'20px 10px 0px 20px',color:'blue',fontSize:'30px'}} />
                        </StyledEye>
                        <Box>
                            <Typography style={{fontWeight:'600',fontSize:'20px',padding:'20px 0px'}}>Occupancy detection</Typography>
                            <Typography color="#808080">Application analyses images from the cameras and performs car/boat parking occupancy detection.</Typography>
                        </Box>
                    </StyledRow1>
                    <StyledRow1>
                    <StyledEye>
                            <VisibilityIcon style={{padding:'20px 10px 0px 20px',color:'blue',fontSize:'30px'}} />
                        </StyledEye>
                        <Box>
                            <Typography style={{fontWeight:'600',fontSize:'20px',padding:'20px 0px'}}>Occupancy detection</Typography>
                            <Typography color="#808080">Application analyses images from the cameras and performs car/boat parking occupancy detection.</Typography>
                        </Box>
                    </StyledRow1>
                </StyledRow>
                <StyledRow>
                    <StyledRow1>
                        <StyledEye>
                            <VisibilityIcon style={{padding:'20px 10px 0px 20px',color:'blue',fontSize:'30px'}} />
                        </StyledEye>
                        <Box>
                            <Typography style={{fontWeight:'600',fontSize:'20px',padding:'20px 0px'}}>Occupancy detection</Typography>
                            <Typography color="#808080">Application analyses images from the cameras and performs car/boat parking occupancy detection.</Typography>
                        </Box>
                    </StyledRow1>
                    <StyledRow1>
                    <StyledEye>
                            <VisibilityIcon style={{padding:'20px 10px 0px 20px',color:'blue',fontSize:'30px'}} />
                        </StyledEye>
                        <Box>
                            <Typography style={{fontWeight:'600',fontSize:'20px',padding:'20px 0px'}}>Occupancy detection</Typography>
                            <Typography color="#808080">Application analyses images from the cameras and performs car/boat parking occupancy detection.</Typography>
                        </Box>
                    </StyledRow1>
                </StyledRow>
            </Box>
        </Section3Styled>
    )
}

export default Section3
