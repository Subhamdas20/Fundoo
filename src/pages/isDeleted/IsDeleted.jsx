import React from 'react';
import Displaynote from '../../components/displaynote/Displaynote';
import NotesService from '../../services/NotesService';


function IsDeleted() {

  const [notesarray, setNotesarray] = React.useState([])
  React.useEffect(() => {
    getisDeletedNotes();
  }, [])


  const getisDeletedNotes = () => {
    NotesService.getisDeleted().then((result) => {
      let filteredData= result.data.data.filter(data=>data.isArchieved!==true && data.isDeleted==true)
      setNotesarray(filteredData)
    }).catch((err) => {
    })
  }


  return (<div>
    <div className='Notes-container'>
    <Displaynote mode='delete' notesarray={notesarray} getnote={getisDeletedNotes} />
    </div>

  </div>);
}

export default IsDeleted;
