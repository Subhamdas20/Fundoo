import React, { Component } from 'react'
import "./signup.scss"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserService from '../../services/UserService';
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

export class SignUp extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            username: '',

            password: '',
            confirmpassword:'',
            firstnameError: false,
            lastnameError: false,
            usernameError: false,
            passwordError: false,
            confirmpasserror:false,
        }
    }

    changeField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.firstnameError = this.state.firstname === '' ? true : false;
        error.lastnameError = this.state.lastname === '' ? true : false;
        error.usernameError = this.state.username === '' ? true : false;
        error.passwordError = this.state.password === '' ? true : false;
        this.setState({
            ...error
        })

        return isError = error.firstnameError || error.lastnameError || error.usernameError || error.passwordError
    }

    next = () => {
        // const navigate=useNavigate();
        let isValidated = this.validation();
        if (!isValidated) {
            let data = {
                "firstname": this.state.firstname,
                "lastname": this.state.lastname,
                "email": this.state.username,
                "password": this.state.password,
            }
            if(this.state.password===this.state.confirmpassword){
                UserService.signup(data).then((res)=>{
                    // navigate('/signin')
                    // this.props.navigation.navigate('/signin')
                    console.log(res);

                }).catch((res)=>{
                   
                    console.log("error check",res);
                })
            }
            else{
                this.setState({confirmpasserror:true})
            }
            
        }

      

    }

    render() {
        return (
            <div className='app-container' >
                <div className='border'>
                    <div className='content' >
                        <h2 className='g1' >
                            <font color='#4285f4' > F </font>
                            <font color="#ea4335" > U </font>
                            <font color="#fbbc05" > N </font>
                            <font color="#4285f4" > D </font>
                            <font color="#34a853" > O </font>
                            <font color="#ea4335" > O  </font>
                        </h2>

                        <h2 className='h1' > Create your Fundoo Account </h2>
                        <form action="" className='form'>
                            <div className='first-last' >
                                <div className='firstn' > <TextField name="firstname"
                                    id="outlined-basic"
                                    label="First Name"
                                    variant="outlined"
                                    size='small'
                                    className='fn'
                                    autoFocus='true'
                                    error={this.state.firstnameError}
                                    helperText={this.state.firstnameError ? "Firstname is required" : " "}
                                    onChange={(e) => this.changeField(e)} />
                                </div>
                                <div className='lastn' > <TextField name="lastname"
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                    size='small'
                                    className='ln'
                                    helperText={this.state.firstnameError ? "Lastname is required" : " "}
                                    error={this.state.lastnameError}
                                    onChange={(e) => this.changeField(e)}
                                />
                                </div>
                            </div>
                            <div className='emaild' > <TextField name="username"
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                                size='small'
                                className='email'
                                error={this.state.usernameError}
                                helperText={this.state.usernameError ? "Username is required" : " You can use letters,numbers & periods"}
                                onChange={(e) => this.changeField(e)} /> </div>
                            <div className='email-option' > Use my currrent email address instead </div>
                            <div className='confirm-pass' >
                                <div className='password' > <TextField name="password"
                                    type='password'
                                    id="outlined-basic"
                                    label="Password"
                                    variant="outlined"
                                    size='small'
                                    className='pass'
                                    helperText={this.state.passwordError ? "Password is required" : " "}
                                    error={this.state.passwordError}
                                    onChange={(e) => this.changeField(e)}
                                />
                                </div>
                                <div className='passwordc' >
                                    <TextField name="confirmpassword"
                                        type='password'
                                        id="outlined-basic"
                                        label="confirm Password"
                                        variant="outlined"
                                        size='small'
                                        className='passc'
                                        helperText={this.state.confirmpasserror ? "Confirm password not matching" : ""}
                                        onChange={(e) => this.changeField(e)}
                                    />
                                </div>

                            </div>
                            <span className='span'>Use 8 or more characters with a mix of letters, numbers & symbols</span>
                            <div className='checkbox'>
                                <div className='checkbox' ></div><input type="checkbox" className='' />
                                <div className='show'> Show password </div>
                            </div>
                            <div className='button'>
                                <Link to="/signin">
                                <div className='signin'>Sign in instead</div>
                                </Link>
                                
                                <Button onClick={this.next} variant="contained">Next</Button>
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