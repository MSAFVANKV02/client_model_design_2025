// CustomAppBar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import MyLogo from '@/assets/images/logo/flower_ayaboo.png'; // Import your logo

const CustomAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src={MyLogo} alt="My Logo" style={{ height: '40px', marginRight: '10px' }} />
        <Typography variant="h6">My Application</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
