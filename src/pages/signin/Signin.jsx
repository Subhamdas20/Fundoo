import React from 'react'
import './signin.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Signin() {

    return (
        <div className='container-app'>
            <div className='main-body'>
                <div className='fundoo-head'>
                    <h3 className='g1' >
                        <font color="#0A5BB4" > F </font>
                        <font color="#C11D38" > U </font>
                        <font color="#EDF750" > N </font>
                        <font color="#0A5BB4"    > D </font>
                        <font color="#71EFA3" > O </font>
                        <font color="#8D1F38" > O  </font>
                    </h3>
                </div>
                <div className='sign-in'>Sign in</div>
                <div className='fundoo'>Use your Fundoo Account</div>
                <form action="" className='form-container'>
                <div>
                    <TextField id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        size='medium'
                        className='email'
                        autoFocus='true'
                    />
                </div>
                <div className='forgot'>Forgot email?</div>
                <div className='text'>Not your computer? Use Guest mode to sign in privately. <br /> <div className='learn-more'>Learn more</div> </div>
                <div className='create'>
                    <div className='create-account'>Create account</div>
                    <div className='button-next'><Button variant="contained" size='small'>Next</Button></div>
                    
                </div>

                </form>
                
            </div>
        </div>

    )
}

export default Signin
