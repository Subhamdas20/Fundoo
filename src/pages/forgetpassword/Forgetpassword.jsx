import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './forgetpassword.scss'
import Button from '@mui/material/Button';
import UserService from '../../services/UserService';

function Forgetpassword() {
  const[fields,setFields]=useState({
    password: '',
    confirmpassword:'',
    passwordError:false,
    confirmpasswordError: false
    })

 const changeField=(e)=>{
    setFields(previousvalues =>{
        return{...previousvalues, [e.target.name]:e.target.value}
    })
    
}

const validation=()=>{
    let isError=false;
    let passError = fields.password ==='' ? true: false;
    let confirmpassError = fields.confirmpassword ==='' ? true : false;
    
    setFields((previousvalues)=>{
        return {...previousvalues,passwordError:passError,confirmpasswordError:confirmpassError }
    })
  
    return isError =  fields.passwordError || fields.confirmpasswordError
}

const next=()=>{
    let isValidated = validation();
    if (isValidated) {
      let data = {
      
          "password": " sRGVw",
      }
      UserService.Forgetpassword(data).then((res) => {
          console.log('success');
      }).catch((res) => {
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
      <div className='findemail'>Reset Your password</div>
      <div className='recover'>Enter your password</div>
      <div><TextField id="outlined-password-input"
      name='password'
        type="password"
        label="password"
        variant="outlined"
        size='small'
        autoFocus='true'
        className='password-field'
        helperText= {fields.passwordError ?"Password is required" :  " " }
        error={fields.passwordError}
        onChange={(e)=>{changeField(e)}} />
      </div>
      <div><TextField id="outlined-password-input"
      name='confirmpassword'
        type="password"
        label="confirm password"
        variant="outlined"
        size='small'
        className='password-field' 
        helperText= {fields.confirmpasswordError ?"Confirm password is required" :  " " }
        error={fields.confirmpasswordError}
        onChange={(e)=>{changeField(e)}}
        />
      </div>
      <div className='next-button' onClick={next}><Button variant="contained" size='small'>Next</Button></div>
    </div></div>

}

export default Forgetpassword;

