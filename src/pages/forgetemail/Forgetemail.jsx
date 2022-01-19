import React from 'react';
import TextField from '@mui/material/TextField';
import './forgetemail.scss'
function Forgetemail() {
  return <div className='main'>
      <div> <h3 className='g1' >
                <font color="#0A5BB4" > F </font>
                <font color="#C11D38" > U </font>
                <font color="#EDF750" > N </font>
                <font color="#0A5BB4" > D </font>
                <font color="#71EFA3" > O </font>
                <font color="#8D1F38" > O  </font>
            </h3>
       </div>
       <div className='findemail'>Find Your email</div>
       <div className='recover'>Enter your phone number or recovery email</div>
       <div><TextField id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size='small'
                    className='emailid' />
        </div>
        <div ><button className='button'>Next</button></div>
  </div>
}

export default Forgetemail;
