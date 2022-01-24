import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './forgetemail.scss'
import Button from '@mui/material/Button';
import UserService from '../../services/UserService';

function Forgetemail() {

  const [fields, setFields] = useState({
    username: '',
    usernameError: false,
  })

  const changeField = (e) => {
    setFields(previousvalues => {
      return { ...previousvalues, [e.target.name]: e.target.value }
    })
  }

  const validation = () => {
    let isError = false;
    let userError = fields.username === '' ? true : false;
    setFields((previousvalues) => {
      return { ...previousvalues, usernameError: userError }
    })
    return isError = fields.usernameError
  }

  const next = () => {
    let isValidated = validation();
    if (isValidated) {
      let data = {
          "firstName": "subham",
          "lastName": "das",
          "email": "pdrkulgmail.com",
          "password": " sRGVw",
          "service": "advance"
      }
      UserService.signup(data).then((res)=>{
          console.log('success');
      }).catch((res)=>{
          console.log('error');
      })
  }
  }

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
      <div className='findemail'>Find your email</div>
      <div className='recover'>Recover your  email</div>
      <div><TextField id="outlined-password-input"
        name='username'
        type="text"
        label="email"
        variant="outlined"
        size='small'
        autoFocus='true'
        className='password-field'
        helperText={fields.usernameError ? "Username is required" : " "}
        error={fields.usernameError}
        onChange={(e) => { changeField(e) }} />
      </div>
      <div className='next-button' onClick={next}><Button variant="contained" size='small'>Next</Button></div>
    </div></div>
}

export default Forgetemail;
