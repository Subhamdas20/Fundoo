import React from 'react';
import Icons from '../icons/Icons';
import './displaynote.scss';

function Displaynote() {
  return <div>
    <div className='main-display'>
    <div className='container-displaynote'>
            <div className='title'>Hello</div>
            <div className='notes'>Lorem ipsum</div>
            <div className='icons'><Icons/></div>
      </div>
    </div>
     
  </div>;
}

export default Displaynote;
