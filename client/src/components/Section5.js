import React from 'react'
import { Box,styled,Typography } from '@mui/material'
import SpeedIcon from '@mui/icons-material/Speed';
import RestoreIcon from '@mui/icons-material/Restore';
import MenuIcon from '@mui/icons-material/Menu';
import SupportIcon from '@mui/icons-material/Support';
const AspireBox = styled(Box)(({theme})=>({
    margin:'0px 220px 30px 220px',
    padding:'30px 0px',
    fontSize:'60px',
    [theme.breakpoints.down('md')]:{
        margin:'0px 0px',
        fontSize:'45px'
    },
    [theme.breakpoints.between('md', 'lg')]: {
        margin:'0px 170px 30px 170px'
    },
}))
const Title = styled(Box)`
font-size:60px
`
const Container = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('sm')]:{
        display:'block'
    }
}))

const InBox = styled(Box)(({theme})=>({
    padding:'0px 35px',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
        padding:'20px 20px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        padding:'20px 20px',
    },
    
}))
function Section5() {
  return (
    <div id='banner2' >
      <AspireBox id='aspiration'>
        <Container>
            <InBox>
                <Title><SpeedIcon style={{color:'#0064a8',fontSize:'40px'}}/></Title>
                <Typography style={{fontWeight:'600',fontFamily:'sans-serif',fontSize:'20px'}}>High precision of detection</Typography>
            </InBox>
            <InBox>
                <Title><RestoreIcon style={{color:'#0064a8',fontSize:'40px'}}/></Title>
                <Typography style={{fontWeight:'600',fontFamily:'sans-serif',fontSize:'20px'}}>Instant data refresh</Typography>
            </InBox>
            <InBox>
                <Title><MenuIcon style={{color:'#0064a8',fontSize:'40px'}}/></Title>
                <Typography style={{fontWeight:'600',fontFamily:'sans-serif',fontSize:'20px'}}>Observed parking place on one camera</Typography>
            </InBox>
            <InBox>
                <Title><SupportIcon style={{color:'#0064a8',fontSize:'40px'}}/></Title>
                <Typography style={{fontWeight:'600',fontFamily:'sans-serif',fontSize:'20px'}}>Non-stop technical support</Typography>
            </InBox>
        </Container>
      </AspireBox>
    </div>
  )
}

export default Section5




