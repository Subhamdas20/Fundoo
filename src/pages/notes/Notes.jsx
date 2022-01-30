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
        }).catch((err) => {
        })
    }

    return <div >
    <div ><Takenote getnote={getNotes} /></div>
    <div className='Notes-container'><Displaynote notesarray={notesarray} getnote={getNotes}/></div>
    </div>;
}

export default Notes;
