import React from 'react'
import { useEffect } from 'react';
import {AppBar,Toolbar,Box,Typography,styled,Drawer,List } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import { useState } from 'react';
import CustomButtons from './CustomButtons';
const Darktheme = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'transparent',
    position: 'fixed',
    zIndex: '1111111',
    transition: 'background-color 0.3s, color 0.3s', // Add transition for smooth color change
  }));
  const LightTheme = styled(Darktheme)(({ theme }) => ({
  
    backgroundColor: 'white !important',
    color: 'black !important',
    transition: 'background-color 0.3s, color 0.3s',
  }));
  
  

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
    const [scrolling, setScrolling] = useState(false);
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
    const handleScroll = () => {
        if (window.scrollY > 0 && !scrolling) {
          setScrolling(true);
        } else if (window.scrollY === 0 && scrolling) {
          setScrolling(false);
        }
      };
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrolling]);
  return (
    <Darktheme position="static" className={scrolling ? 'light-theme' : ''}>
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
        <Name className="webName" style={{fontSize:"30px",fontFamily: 'Croissant One, cursive'}} variant="h5">
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
