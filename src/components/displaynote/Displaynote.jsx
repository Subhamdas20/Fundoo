import React, { useState } from 'react';
import Icons from '../icons/Icons';
import './displaynote.scss';
import NotesService from '../../services/NotesService';
function Displaynote(props) {
//  const [isArchieved,setisArchieved]=useState(false)
  const changeColor=()=>{
    props.getnote()
  }
  const archieveChange=(id)=>{
    // setisArchieved(true)
    let data ={
      "_id":id,
      "isArchieved":true
    }
    NotesService.updatenotes(data).then((result) => {
      props.getnote()
  }).catch((err) => {
  })
    // props.getnote()
  }

  if (props.notesarray) {
    {
     return props.notesarray.map((notes, index) => {
       if(!notes.isArchieved ){
        return <div className='main-display' >
        <div className='wrap' >
            <div className='container-displaynote' style={{backgroundColor : notes.color}}>
              <div className='title'>{notes.title}</div>
              <div className='notes'>{notes.description}</div>
              <div className='icons' ><Icons mode="display" archieveChange={()=>archieveChange(notes._id)} notes={notes} modeone={changeColor} /></div>
            </div>
            </div>
        </div>
      } 
    
      // else if (isArchieved ){
      //   return <div className='main-display' >
      //   <div className='wrap' >
      //       <div className='container-displaynote' style={{backgroundColor : notes.color}}>
      //         <div className='title'>{notes.title}</div>
      //         <div className='notes'>{notes.description}</div>
      //         <div className='icons' ><Icons mode="display" archieveChange={()=>archieveChange(notes._id)} notes={notes} modeone={changeColor} /></div>
      //       </div>
      //       </div>
      //   </div>
      // }
      
    })
    
    }

  }
}
export default Displaynote;
