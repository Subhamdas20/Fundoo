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
    const[changecolor,setChangecolor]=useState("")
    const[archieve,setArchieve]=useState(false)

    const backgroundcolour =(data)=>{
        setChangecolor(data)
    }

    const [field, setField] = useState({
        title: '',
        description: '',
    })

    const changeField = (e) => {
        setField((previousstate) => {
            return { ...previousstate, [e.target.name]: e.target.value }
        })
    }

    const archieveChange=()=>{
        setArchieve(true)
    }

    const close = () => {
        let data = {
            "title": field.title,
            "description": field.description,
            "color":changecolor,
            "isArchieved": archieve,
            "isDeleted":false,
        }
        setTakenote(true)
        NotesService.addnotes(data).then(() => {
            props.getnote();
            setField({
                title: '',
                description: '',
            })
        }).catch((err) => {
           
        })
        setChangecolor("#FFFFFF")
    }

    return <div className='app-barcontent'>
        {takenote ?
            <div className='bar'  onClick={() => setTakenote(false)}>
                <div className='takenote'>Take a note...</div>
                <div className='bar-icons'>
                    <div><CheckBoxOutlinedIcon htmlColor="grey" /></div>
                    <div><BrushOutlinedIcon htmlColor="grey" /></div>
                    <div><InsertPhotoOutlinedIcon htmlColor="grey" /></div>
                </div>
            </div>
            :
            <div className='bar-input' style={{backgroundColor : changecolor}} >
                <div> <InputBase name="title" placeholder="Title" fullWidth multiline className='text-area' rows="1" cols="50" onChange={(e) => changeField(e)} >
                    Title
                </InputBase></div>
                <div> <InputBase name="description" placeholder="Take a note..." fullWidth multiline  className='text-area' rows="5" cols="50" onChange={(e) => changeField(e)} >
                    Add text
                </InputBase></div>
                <div className='close-button'>
                    <Icons className='icons-set' mode="takenote" archieveChange={()=>archieveChange()} modeone={(data)=>backgroundcolour(data)}/>
                    <button className='button-icon'  onClick={() => close()}>close</button>
                </div>
                
            </div>
        }

    </div>;
}

export default Takenote;
