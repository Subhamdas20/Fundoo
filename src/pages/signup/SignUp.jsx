import React, { Component } from 'react'
import "./style.css"
import TextField from '@mui/material/TextField';

export class SignUp extends Component {

    render() {
        return (
            <div >
                <h2 className='g1' >
                    <font color="#0A5BB4" > F </font>
                    <font color="#C11D38" > U </font>
                    <font color="#EDF750" > N </font>
                    <font color="#0A5BB4" > D </font>
                    <font color="#71EFA3" > O </font>
                    <font color="#8D1F38" > O  </font>
                </h2>

                <h2 className='h1' > Create your Fundoo Account </h2>
                <form action="" className='form'>
                    <div className='first-last' >
                        <div className='firstn' > <TextField id="outlined-basic" label="First Name" variant="outlined" size='small' className='fn' />
                        </div>
                        <div className='lastn' > <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small' className='ln' />
                        </div>
                    </div>
                    <div className='emaild' > <TextField id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        size='small'
                        className='email'
                        helperText="You can use letters,numbers & periods" /> </div>
                    <div className='email-option' > Use my currrent email address instead </div>
                    <div >

                        <div className='password' > <TextField id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            size='small'
                            className='pass' /> </div>
                        <div className='passwordc' >
                            <TextField id="outlined-basic"
                                label="confirm Password"
                                variant="outlined"
                                size='small'
                                className='passc'
                                helperText='Use 8 or more characters with a mix of letters, numbers & symbols' /> </div>
                    </div>
                    <div className='checkbox' ></div><input type="checkbox" className='' />
                    <div> Show password </div>


                </form>
            </div>

        )
    }
}

export default SignUp