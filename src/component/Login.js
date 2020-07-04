import React, { useState } from "react";
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import Axios from "axios";









export default function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const history = useHistory();


 

  function handleSubmit(event) {
    const loginUser = {
      "email": email,
      "password": password
    }
    Axios.post("http://localhost:5000/login", loginUser)
   .then((res)=>{
    console.log(res.data)
     localStorage.setItem('user', JSON.stringify(res.data) )
     history.push('/')

   })
   .catch((error)=>{
     console.log(error)
   })
    event.preventDefault();
  }

  const handlelogout = ()=>{
    localStorage.removeItem('user')
    history.push("/");
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>

      <TextField
      autoComplete="new-password"
       label="email" 
       type= 'email'
       value={email}
       onChange={(e)=>{setEmail(e.target.value)}} 
       variant="outlined" 
       margin="20px"
       size="small"
      
        />




      <TextField 
         autoComplete='new-password'
       label="password" 
       value={password}
       onChange={(e)=>{setPassword(e.target.value)}} 
       type="password"
       variant="outlined"
       size="small"
       required="true"
        />

      
        <Button block bsSize="large" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}