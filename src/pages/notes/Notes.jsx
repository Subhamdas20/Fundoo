import React, { useState } from 'react';

import Displaynote from '../../components/displaynote/Displaynote';
import Takenote from '../../components/takenote/Takenote';
import NotesService from '../../services/NotesService';


function Notes() {
    const [notesarray,setNotesarray]=useState([])
    const getNotes = (data)=>{
        NotesService.getnotes(data).then((result)=>{
            setNotesarray(result.data.data);
            console.log("sucess");
            console.log(result.data.data);
        }).catch((err)=>{

        })
    }

    return <div>
        <Takenote getnote={getNotes}/>
        <Displaynote notesarray={notesarray}/>
    </div>;
}

export default Notes;
