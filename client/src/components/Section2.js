import { Box, Typography ,styled} from '@mui/material'
import React from 'react'
import section2img from '../images/section2.png'
const Section2Styled = styled(Box)(({theme})=>({
    padding:'120px 200px',
}))
const StyledParkinto = styled(Typography)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    textAlign:'center',
    fontSize:'40px',
    fontWeight:'600',
    fontFamily:'sans-serif',
}))
const BlueBorder = styled('div')`
  width: 40px;
  height: 4px;
  background-color: blue;
  margin: 10px auto;
`;
const StyledText1 = styled(Typography)(({theme})=>({
    display:'flex',
    textAlign:'justify',
    fontFamily:'sans-serif',
    color:'#808080',
    marginBottom:'40px'
}))
const StyledText2 = styled(Typography)(({theme})=>({
    display:'flex',
    textAlign:'justify',
    fontFamily:'sans-serif',
    color:'#808080',
    marginTop:'40px'
}))
function Section2() {
    return (
        <Box bgcolor="#FAFAFA">
            <Section2Styled>
            <Box marginBottom="50px">
                <StyledParkinto>Parkinto</StyledParkinto>
                <BlueBorder />
            </Box>
            <Box>
                <StyledText1>
                    Parkinto is a genuine parking system product which is able to detect car/boat parking occupancy based on image only. Our application detects the "free/occupied" state of parking place with excellent results. The application uses advanced algorithms of A.I. and image recognition. Parkinto system is cloud-based service. Any type od your camera can by connected to Parkinto system easily.</StyledText1>
                    
            </Box>
            <Box>
                <Box>
                    <img src={section2img} alt="" />
                </Box>
            </Box>
            <Box>
                <StyledText2>
                    Parkinto comes with a new unique detection method using one or more cameras. Most of current technical solutions use sensors built into the ground under each parking space or mounted above each parking space. These solutions have a high installation cost and in some situations construction work may not be allowed.
                </StyledText2>
            </Box>
        </Section2Styled>
        </Box>
    )
}

export default Section2
