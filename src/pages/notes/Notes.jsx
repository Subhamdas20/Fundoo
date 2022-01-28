import React, { useState } from 'react';

import Displaynote from '../../components/displaynote/Displaynote';
import Takenote from '../../components/takenote/Takenote';
import NotesService from '../../services/NotesService';


function Notes() {
    const [notesarray,setNotesarray]=useState([])

       React.useEffect(()=>{
        getNotes();
    },[])

    const getNotes = ()=>{
        NotesService.getnotes().then((result)=>{
            setNotesarray(result.data.data);
            
            console.log("sucess");
        }).catch((err)=>{
            console.log("error in getnotes");
        })
    }

    return <div>
        <Takenote getnote={getNotes}/>
        <Displaynote notesarray={notesarray}/>
      
    </div>;
}

export default Notes;
