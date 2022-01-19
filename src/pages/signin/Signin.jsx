import React from 'react'
import './signin.scss'
import TextField from '@mui/material/TextField';

function Signin() {

    return (
        <div className='main'>
            <div> <h3 className='g1' >
                <font color="#0A5BB4" > F </font>
                <font color="#C11D38" > U </font>
                <font color="#EDF750" > N </font>
                <font color="#0A5BB4" > D </font>
                <font color="#71EFA3" > O </font>
                <font color="#8D1F38" > O  </font>
            </h3>
            </div>
            <div className='signin'>Sign in</div>
            <div className='fundoo'>Use your Fundoo Account</div>
            <div>
                <TextField id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size='small'
                    className='email'
                 />
            </div>
            <div className='forgot'>Forgot email?</div>
            <div className='text'>Not your computer? Use Guest mode to sign in privately. <br /> <div className='learn'>Learn more</div> </div>
            <div className='create'>
                <div>Create account</div>
                <button className='button'>Next</button>
            </div>
        </div>
    )
}

export default Signin
