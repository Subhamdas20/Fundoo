import React, { useState } from 'react';
import Icons from '../icons/Icons';
import './displaynote.scss';

function Displaynote(props) {
 
  const changeColor=()=>{
    props.getnote()
  }

  if (props.notesarray) {

    {
     return props.notesarray.map((notes, index) => {
        return <div className='main-display' >
        <div className='wrap' >
            <div className='container-displaynote' style={{backgroundColor : notes.color}}>
              <div className='title'>{notes.title}</div>
              <div className='notes'>{notes.description}</div>
              <div className='icons' ><Icons mode="display" notes={notes} modeone={changeColor} /></div>
            </div>
            </div>
        </div>
      })
    }

  }
}
export default Displaynote;
