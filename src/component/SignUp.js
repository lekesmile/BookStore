import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Axios from 'axios'
import { useHistory } from "react-router-dom";

const SignUp = () => {

  const [signUpname, setsignUpname] = useState("");
  const [signUpEmail, setsignUpEmail] = useState("");
  const [signUpPassword, setsignUpPassword] = useState("");

  const history = useHistory();


  function handleSubmit  (event) {
    const registerUser = {
      "name": signUpname,
      "email": signUpEmail,
      "password": signUpPassword
    }
    Axios.post("http://localhost:5000/signup", registerUser)
   .then((res)=>{
    console.log(res.data)
   history.push('/login')
   })
   .catch((error)=>{
     console.log(error)
   })
    event.preventDefault();
  }

  return (
        <div>
        <form onSubmit={handleSubmit}>
      <TextField 
      label="name" 
      value={signUpname} 
      onChange={(e)=>setsignUpname(e.target.value)}
       variant="outlined" 
       />

      <TextField 
      type="email"
       label="email" 
       value={signUpEmail}
        onChange={(e)=>{ setsignUpEmail(e.target.value)}} 
        variant="outlined" 
        />

      <TextField 
      type="password"
      label="password" 
      value={signUpPassword} 
      onChange={(e)=>{setsignUpPassword(e.target.value)}} 
      variant="outlined" 
      />

      
        <Button block bsSize="large"  type="submit">
          signup
        </Button>
      </form>
        </div>
    )
}

export default SignUp
