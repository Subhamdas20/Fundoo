import React, { useState } from 'react';
import './takenote.scss'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Icons from '../icons/Icons';
import { Input } from '@mui/material';

function Takenote() {
    const [takenote, setTakenote] = useState(true)

    const changeNote = () => {
        setTakenote(false)

    }
    return <div >
        {takenote ? 
        <div className='bar' onClick={() => setTakenote(false)}>
            <div className='takenote'>Take a note...</div>
            <div className='bar-icons'>
                <div><CheckBoxOutlinedIcon htmlColor="grey" /></div>
                <div><BrushOutlinedIcon htmlColor="grey"/></div>
                <div><InsertPhotoOutlinedIcon htmlColor="grey" /></div>
            </div>
        </div>
        :
        <div className='bar-input'>
            <div> <TextareaAutosize className='text-area' rows = "1" cols = "50"  name = "description">
            Title
         </TextareaAutosize></div>
            <div> <textarea className='text-area' rows = "5" cols = "50" name = "description" >
           Add text
         </textarea></div>
            <div><Icons /></div>
            <button onClick={()=>setTakenote(true)}>close</button>
        </div>
        }

    </div>;
}

export default Takenote;
