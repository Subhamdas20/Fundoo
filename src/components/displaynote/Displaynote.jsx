import React, { useState } from 'react';
import Icons from '../icons/Icons';
import './displaynote.scss';
import NotesService from '../../services/NotesService';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import { InputLabel } from '@mui/material';
import Input from '@mui/material/Input';
function Displaynote(props) {
  const [open, setOpen] = React.useState(false);
  const [dialognotes, setDialognotes] = useState({
    title: "",
    description: "",
    _id: ""
  })
  const [notes, setNotes] = useState({
    _id :"",
    title: "",
    description: "",
    isArchieved:"",
    isDeleted:"",
    color:"#ffffff"

  })

  const changeColor = () => {
    props.getnote()
  }
  const archieveChange = (id) => {

    let data = {
      "_id": id,
      "isArchieved": true
    }
    NotesService.updatenotes(data).then((result) => {
      props.getnote()
    }).catch((err) => {
    })
  }

  const isdeleteChange = (id) => {
    let data = {
      "_id": id,
      "isDeleted": true
    }
    NotesService.updatenotes(data).then((result) => {
      props.getnote()
    }).catch((err) => {
    })
  }

  const handleOpen = (data) => {
    setNotes(data)

    setOpen(true);
    setDialognotes({
      title: data.title,
      description: data.description
    })

    // console.log(notes);

  }
  const handleClose = (id) => {
    console.log(id, dialognotes._id , "inside closeeee");
    setOpen(false);
    let data = {
      // '_id':dialognotes._id,
      '_id': id,
      'title': dialognotes.title,
      'description': dialognotes.description
    }
    NotesService.updatenotes(data).then((result) => {
      props.getnote()
    }).catch((err) => {
    })
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#ffffff',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const changeField = (e, id) => {
    setDialognotes(previousvalues => {
      return { ...previousvalues, [e.target.name]: e.target.value, '_id': id }
    })
    console.log(dialognotes);
  }

  if (props.notesarray) {
    return (
      <div className='displaynote-container'>
        { props.notesarray.map((notes, index) => {
          if (!notes.isArchieved & !notes.isDeleted) {
           return <div className='main-display'  >
              <div className='wrap' >
                <div className='container-displaynote' style={{ backgroundColor: notes.color }}>
                  <div onClick={() => handleOpen(notes)}  >
                    <div className='title'>{notes.title}</div>
                    <div className='notes'>{notes.description}</div>
                  </div>
                  <div className='icons' ><Icons mode="display" isdeleteChange={() => isdeleteChange(notes._id)} archieveChange={() => archieveChange(notes._id)} notes={notes} modeone={changeColor} /></div>
                </div>

              </div>
            </div>
          }
        })
        }
        <Modal
      open={open}
      onClose={() => handleClose(notes._id)
      }
    >
      <Box sx={{ ...style, width: 500 }}  style={{ backgroundColor: notes.color }}>
        <div className='modal-input'>
          <input name='title' className='title-modal' onChange={(e) => { changeField(e, notes._id) }} defaultValue={dialognotes.title}  style={{ backgroundColor: notes.color }}/>
          <input name='description' className='description-modal' onChange={(e) => { changeField(e, notes._id) }} defaultValue={dialognotes.description} style={{ backgroundColor: notes.color }} />
        </div>

        <div className='modal-icons'  > <Icons mode="display" isdeleteChange={() => isdeleteChange(notes._id)} archieveChange={() => archieveChange(notes._id)} notes={notes} modeone={changeColor} />
          <button className='button-icon'  onClick={() => handleClose(notes)} style={{ backgroundColor: notes.color }}>close</button></div>
      </Box>
    </Modal>
       
    </div> 
    )
  }

}
export default Displaynote;
