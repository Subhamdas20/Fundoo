import React, { useState } from 'react'
import './signin.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserService from '../../services/UserService';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signin() {
    const navigate = useNavigate();
    const [fields, setFields] = useState({
        username: '',
        password: '',
        usernameError: false,
        passwordError: false
    })

    const changeField = (e) => {
        setFields(previousvalues => {
            return { ...previousvalues, [e.target.name]: e.target.value }
        })
       
    }

    const validation = () => {
        let isError = false;
        let userError = fields.username === '' ? true : false;
        let passError = fields.password === '' ? true : false;

        setFields((previousvalues) => {
            return { ...previousvalues, usernameError: userError, passwordError: passError }
        })
        return isError = fields.usernameError || fields.passwordError
    }

    const next = () => {
        let isValidated = validation();
        if (!isValidated) {
            let data = {
                "email": fields.username,
                "password": fields.password,
            }
            UserService.signin(data).then((res) => {
                localStorage.setItem("firstname",res.data.data.firstname)
             
                localStorage.setItem("lastname",res.data.data.lastname)
                localStorage.setItem("email",res.data.data.email)
                localStorage.setItem("token", res.data.data.token)
                localStorage.setItem("id",res.data.data.userId)
              
                navigate('/')
            }).catch((res) => {
            })
            
        }

    }

    return (
        <div className='container-ap'>
            <div className='main-display'>
                <div className='fundoo-head'>
                    <h3 className='g1' >
                        <font color='#4285f4' > F </font>
                        <font color="#ea4335" > U </font>
                        <font color="#fbbc05" > N </font>
                        <font color="#4285f4" > D </font>
                        <font color="#34a853" > O </font>
                        <font color="#ea4335" > O  </font>
                    </h3>
                </div>
                <div className='sign-in'>Sign in</div>
                <div className='fundoo'>Use your Fundoo Account</div>
                <form action="" className='form-container'>
                    <div>
                        <TextField id="outlined-basic"
                            name='username'
                            label="Email"
                            variant="outlined"
                            size='medium'
                            className='email'
                            autoFocus='true'
                            helperText={fields.usernameError ? "Username is required" : " You can use letters,numbers & periods"}
                            error={fields.usernameError}
                            onChange={(e) => { changeField(e) }}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            name='password'
                            label="password"
                            variant="outlined"
                            size='medium'
                            className='email'
                            type='password'
                            helperText={fields.passwordError ? "Password is required" : " "}
                            error={fields.passwordError}
                            onChange={(e) => { changeField(e) }}
                        />
                    </div>
                    <Link to="/forgetemail">
                        <div className='forgot'>Forgot email?</div>
                    </Link>

                    <div className='text'>Not your computer? Use Guest mode to sign in privately. <br /> <div className='learn-more'>Learn more</div> </div>
                    <div className='create'>
                        <div className='create-account'>Create account</div>
                        <div className='button-next' onClick={next}><Button variant="contained" size='small'>Next</Button></div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Signin
