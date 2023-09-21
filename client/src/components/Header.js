import React from 'react'
import {AppBar,Toolbar,Box,Typography,styled,Drawer,List } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import { useState } from 'react';
import CustomButtons from './CustomButtons';
const Darktheme = styled(AppBar)`
  position: fixed;
  z-index: 1111111;
  background-color: transparent !important; /* Make the background transparent */
`;

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));
const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 0 0 auto', 
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));
const Name = styled(Typography)(({ theme }) => ({ 
    [theme.breakpoints.down('md')]: {
        marginLeft:'20%'
    }
}));

function Header() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List style={{paddingTop:'50px'}}>
                <listItem>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );
  return (
    <Darktheme position="static">
      <Toolbar>
        <MenuButton
            color="inherit"
            onClick={handleOpen}
        >
            <Menu />
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
            {list()}
        </Drawer>
        <Name style={{fontSize:"30px"}} variant="h5">
            PARKSmartly
        </Name>

        <CustomButtonWrapper>
          <CustomButtons/>
        </CustomButtonWrapper>

      </Toolbar>
    </Darktheme>
  )
}

export default Header
