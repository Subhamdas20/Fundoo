import React from 'react';
import Displaynote from '../../components/displaynote/Displaynote';
import NotesService from '../../services/NotesService';


function Archive() {

    const [notesarray, setNotesarray] = React.useState([])
    React.useEffect(() => {
        getArchivedNotes();
    },[])


    const getArchivedNotes = () => {
        NotesService.getisArchived().then((result) => {
          let filteredData= result.data.data.filter(data=>data.isArchieved==true && data.isDeleted!==true)
            setNotesarray(filteredData)
        }).catch((err) => {
        })
    }

  return (<div>
    <div className='Notes-container'><Displaynote mode='archieve' notesarray={notesarray} getnote={getArchivedNotes}/></div>
  </div>);
}

export default Archive;
