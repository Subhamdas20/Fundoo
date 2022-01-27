import React, { useState } from 'react';
import Icons from '../icons/Icons';
import './displaynote.scss';

function Displaynote(props) {
  const [displaynote, setDisplaynote] = useState(true)
  console.log(props);
  return <div>
    {props.notesarray.map((item, index) => {
      {
        displaynote ?
          <div className='main-display' onMouseEnter={() => setDisplaynote(false)}>
            <div className='container-displaynote'>
              <div className='title'>{item.title}</div>
              <div className='notes'>{item.index}</div>

            </div>
          </div>
          :
          <div className='main-display' onMouseLeave={() => setDisplaynote(true)}>
            <div className='container-displaynote'>
              <div className='title'>{item.title}</div>
              <div className='notes'>{item.index}</div>
              <div className='icons'><Icons /></div>
            </div>
          </div>
      }
    })}

  </div>;
}

export default Displaynote;
