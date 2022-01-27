import React from 'react';
// import AddAlertIcon from '@mui/icons-material/AddAlert';
// import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
// import ColorLensIcon from '@mui/icons-material/ColorLens';
// import PhotoIcon from '@mui/icons-material/Photo';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import './icons.scss'
function Icons() {
  return <div className='icons'>
    <icons1><AddAlertOutlinedIcon htmlColor="grey" /></icons1>
    <icons2><PersonAddAlt1OutlinedIcon htmlColor="grey"/></icons2>
    <icons3><ColorLensOutlinedIcon htmlColor="grey"/></icons3>
    <icons4><PhotoOutlinedIcon htmlColor="grey"/></icons4>
    <icons5><ArchiveOutlinedIcon htmlColor="grey"/></icons5>
    <icons6><MoreVertOutlinedIcon htmlColor="grey"/></icons6>

  </div>;
}

export default Icons;
