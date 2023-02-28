import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { IconsToolbar } from './Dashboard.style';

export default function ButtonAppBar() {
  return (
    <Box sx={{ marginLeft: '104px' }}>
      <AppBar position="static" >
        <Toolbar>

          <Typography component="div" sx={{ fontSize: '30px', display: 'flex', alignItems: 'center' }}>
            <b> Dryver</b>
          </Typography>

          <Typography sx={{ fontSize: '10px', alignSelf: 'self-end', marginBottom: '17px', marginLeft: '7px' }}>
            BACKOFFICE
          </Typography>
          <IconsToolbar>
            <AiOutlineSearch size={20} />
            <IoMdNotifications size={20} />
          </IconsToolbar>



        </Toolbar>
      </AppBar>
    </Box >
  );
}
