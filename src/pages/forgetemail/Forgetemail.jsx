import React from 'react';
import TextField from '@mui/material/TextField';
import './forgetemail.scss'
import Button from '@mui/material/Button';
function Forgetemail() {
    return <div className='container-page'>
    <div className='main'>
      <div> <h3 className='fun' >
        <font color="#0A5BB4" > F </font>
        <font color="#C11D38" > U </font>
        <font color="#EDF750" > N </font>
        <font color="#0A5BB4" > D </font>
        <font color="#71EFA3" > O </font>
        <font color="#8D1F38" > O  </font>
      </h3>
      </div>
      <div className='findemail'>Find your email</div>
      <div className='recover'>Recover your  email</div>
      <div><TextField id="outlined-password-input"
        type="text"
        label="email"
        variant="outlined"
        size='small'
        autoFocus='true'
        className='password-field' />
      </div>
      <div className='next-button'><Button variant="contained" size='small'>Next</Button></div>
    </div></div>
}

export default Forgetemail;
