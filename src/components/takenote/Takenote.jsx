import React, { useState } from 'react';
import './takenote.scss'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Icons from '../icons/Icons';
import { Input } from '@mui/material';
import NotesService from '../../services/NotesService';

import InputBase from '@mui/material/InputBase';

function Takenote(props) {
    const [takenote, setTakenote] = useState(true)
    const [field, setField] = useState({
        title: '',
        description: '',
    })

    const changeField = (e) => {
        setField((previousstate) => {
            return { ...previousstate, [e.target.name]: e.target.value }
        })
    }

    const close = () => {
        let data = {
            "title": field.title,
            "description": field.description,
            "isArchieved": false,
            "isDeleted":false,
        }
        setTakenote(true)
        NotesService.addnotes(data).then(() => {
            props.getnote();
            console.log("sucess", data);
        }).catch((err) => {
            console.log(err,"error");
        })
    }

    return <div className='app-barcontent'>
        {takenote ?
            <div className='bar' onClick={() => setTakenote(false)}>
                <div className='takenote'>Take a note...</div>
                <div className='bar-icons'>
                    <div><CheckBoxOutlinedIcon htmlColor="grey" /></div>
                    <div><BrushOutlinedIcon htmlColor="grey" /></div>
                    <div><InsertPhotoOutlinedIcon htmlColor="grey" /></div>
                </div>
            </div>
            :
            <div className='bar-input' >
                <div> <InputBase name="title" placeholder="Title" fullWidth multiline className='text-area' rows="1" cols="50" onChange={(e) => changeField(e)} >
                    Title
                </InputBase></div>
                <div> <InputBase name="description" placeholder="Take a note..." fullWidth multiline  className='text-area' rows="5" cols="50" onChange={(e) => changeField(e)} >
                    Add text
                </InputBase></div>
                <div className='close-button'>
                    <Icons className='icons-set' mode="takenote" />
                    <button className='button-icon' onClick={() => close()}>close</button>
                </div>

            </div>
        }

    </div>;
}

export default Takenote;
