import React from 'react';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';

import './icons.scss'
function Icons() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return <div className='icons'>
    <icons1><AddAlertOutlinedIcon htmlColor="grey" /></icons1>
    <icons2><PersonAddAlt1OutlinedIcon htmlColor="grey"/></icons2>
    <icons3  ><ColorLensOutlinedIcon htmlColor="grey" onClick={handleOpen} variant="contained" aria-describedby={id}/>
    <Popover
       id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 1 }}>
        <div className='icon-popover'>
        <div className='color1'></div>
        <div className='color2'></div>
        <div className='color3'></div>
        <div className='color4'></div>
        <div className='color5'></div>
        <div className='color6'></div>
        <div className='color7'></div>
        <div className='color8'></div>
        <div className='color9'></div>
        <div className='color10'></div>
        </div>
        
        </Typography>
      </Popover>
    </icons3>
    <icons4><PhotoOutlinedIcon htmlColor="grey"/></icons4>
    <icons5><ArchiveOutlinedIcon htmlColor="grey"/></icons5>
    <icons6><MoreVertOutlinedIcon htmlColor="grey"/></icons6>

  </div>;
}

export default Icons;
