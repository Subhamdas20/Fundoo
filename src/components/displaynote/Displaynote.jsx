import React, { useState } from 'react';
import Icons from '../icons/Icons';
import './displaynote.scss';

function Displaynote(props) {
 
  if (props.notesarray) {

    {
     return props.notesarray.map((notes, index) => {
        return <div className='main-display'>
        <div className='wrap'>
            <div className='container-displaynote'>
              <div className='title'>{notes.title}</div>
              <div className='notes'>{notes.description}</div>
              <div className='icons'><Icons /></div>
            </div>
            </div>
        </div>
      })
    }

  }
}
export default Displaynote;
