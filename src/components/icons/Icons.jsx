import React from 'react';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';

import NotesService from '../../services/NotesService';

import './icons.scss'
import { green } from '@mui/material/colors';
function Icons(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const colrs = ["#f28b82", '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8', '#e6c9a8']

const addData=(data)=>{
  if(props.mode==="takenote"){
  props.modeone(data)
  }
  else if(props.mode==="display"){
    let datas={
      "_id": props.notes._id,
      "color":data,
    }
    NotesService.updatenotes(datas).then((result) => {
      // props.getnote()
      props.modeone()
  }).catch((err) => {
  })
    
  }

}

const addarchieve=()=>{
  if(props.mode==="takenote"){
    props.archieveChange()
    }
    else if(props.mode==="display"){
      props.archieveChange()
    }
}

  
  return <div className='icons'>
    <icons1><AddAlertOutlinedIcon htmlColor="grey" /></icons1>
    <icons2><PersonAddAlt1OutlinedIcon htmlColor="grey" /></icons2>
    <icons3  ><ColorLensOutlinedIcon htmlColor="grey" onClick={handleOpen} variant="contained" aria-describedby={id} />
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
            {
              colrs.map((colorcode) => {
                return <div className='icon-pop' style={{ backgroundColor: colorcode }} onClick={()=>addData(colorcode)}></div>
              }
              )}
          </div>
        </Typography>
      </Popover>
    </icons3>

    <icons4><PhotoOutlinedIcon htmlColor="grey" /></icons4>
    <icons5><ArchiveOutlinedIcon htmlColor="grey" onClick={()=>addarchieve()} /></icons5>
    <icons6><MoreVertOutlinedIcon htmlColor="grey" /></icons6>

  </div>;



}

export default Icons;
