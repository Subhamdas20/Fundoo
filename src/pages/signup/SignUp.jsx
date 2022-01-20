import React, { Component } from 'react'
import "./signup.scss"
import TextField from '@mui/material/TextField';
import logo from '../../images/logo.png'
import Button from '@mui/material/Button';
export class SignUp extends Component {

    render() {
        return (

            <div className='app-container' >
                <div className='border'>
                    <div className='content' >
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
                            <div className='confirm-pass' >
                                <div className='password' > <TextField id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                    size='small'
                                    className='pass' />
                                </div>
                                <div className='passwordc' >
                                    <TextField id="outlined-basic"
                                        label="confirm Password"
                                        variant="outlined"
                                        size='small'
                                        className='passc'
                                    />
                                </div>

                            </div>
                            <span className='span'>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                            <div className='checkbox'>
                                <div className='checkbox' ></div><input type="checkbox" className='' />
                                <div className='show'> Show password </div>
                            </div>
                            <div className='button'>
                                <div className='signin'>Sign in instead</div>
                                <Button variant="contained">Next</Button>
                            </div>
                        </form>
                    </div>
                    <div className='image'>
                        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="120%" height="150%" class="j9NuTc TrZEUc"></img>
                        <span className='image-text'>One account. All of Fundoo working for you.</span>

                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp