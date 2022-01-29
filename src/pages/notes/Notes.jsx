import React, { useState } from 'react';

import Displaynote from '../../components/displaynote/Displaynote';
import Takenote from '../../components/takenote/Takenote';
import NotesService from '../../services/NotesService';
import './notes.scss'


function Notes() {
    const [notesarray, setNotesarray] = useState([])
    React.useEffect(() => {
        getNotes();
    }, [])

    const getNotes = () => {
        NotesService.getnotes().then((result) => {
            setNotesarray(result.data.data)
            console.log("sucess");
        }).catch((err) => {
            console.log("error in getnotes");
        })
    }

    return <div >
    <div ><Takenote getnote={getNotes} /></div>
    <div className='Notes-container'><Displaynote notesarray={notesarray} /></div>
        
        
    </div>;
}

export default Notes;
