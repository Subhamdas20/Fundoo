import React from 'react';
import TextField from '@mui/material/TextField';
import './forgetpassword.scss'
import Button from '@mui/material/Button';

function Forgetpassword() {
  return <div className='container-page'>
    <div className='main'>
      <div> <h3 className='fun' >
      <font color='#4285f4' > F </font>
      <font color="#ea4335" > U </font>
      <font color="#fbbc05" > N </font>
      <font color="#4285f4" > D </font>
      <font color="#34a853" > O </font>
      <font color="#ea4335" > O  </font>
      </h3>
      </div>
      <div className='findemail'>Reset Your password</div>
      <div className='recover'>Enter your password</div>
      <div><TextField id="outlined-password-input"
        type="password"
        label="password"
        variant="outlined"
        size='small'
        autoFocus='true'
        className='password-field' />
      </div>
      <div><TextField id="outlined-password-input"
        type="password"
        label="confirm password"
        variant="outlined"
        size='small'
        className='password-field' />
      </div>
      <div className='next-button'><Button variant="contained" size='small'>Next</Button></div>
    </div></div>

}

export default Forgetpassword;

