import React, { useState } from 'react';
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

  // const[isDeleted,setisDelete]=useState(true)
  
 
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;
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
const addisdelete=()=>{
  if(props.mode==="display"){
    props.isdeleteChange()
    }
}

// const setDelete=()=>{
//   setisDelete(false)
// }

  
  return <div className='icons'>
    <div><AddAlertOutlinedIcon htmlColor="grey" /></div>
    <div><PersonAddAlt1OutlinedIcon htmlColor="grey" /></div>
    <div  ><ColorLensOutlinedIcon htmlColor="grey" onClick={handleOpen} variant="contained" aria-describedby={id} />
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
    </div>
    <div><PhotoOutlinedIcon htmlColor="grey" /></div>
    <div><ArchiveOutlinedIcon htmlColor="grey" onClick={()=>addarchieve()} /></div>
    <div><MoreVertOutlinedIcon htmlColor="grey" onClick={()=>addisdelete()} />

      
    </div>
  </div>;



}

export default Icons;
