import React from 'react';
import TextField from '@mui/material/TextField';
import './forgetpassword.scss'
function Forgetpassword() {
  return <div className='main'>
       <div> <h3 className='fun' >
            <font color="#0A5BB4" > F </font>
            <font color="#C11D38" > U </font>
            <font color="#EDF750" > N </font>
            <font color="#0A5BB4" > D </font>
            <font color="#71EFA3" > O </font>
            <font color="#8D1F38" > O  </font>
        </h3>
        </div>
        <div className='findemail'>Reset Your password</div>
        <div className='recover'>Enter your password</div>
        <div><TextField id="outlined-password-input"
            type="password"
            label="password"
            variant="outlined"
            size='small'
            className='password-field' />
        </div>
        <div className='next-button'><button className='button'>Next</button></div>
  </div>;
}

export default Forgetpassword;

