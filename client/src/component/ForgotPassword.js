import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
import { MdLock } from 'react-icons/md';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  

  const history = useHistory();

  function handleSubmit(event) {
    const loginUser = {
      email: email,
     
    };
    // Axios.post("/api/login", loginUser)
    //   .then((res) => {
    //     console.log(res.data);
    //     localStorage.setItem("userDetails", JSON.stringify(res.data));
    //     history.push("/");
    //     window.location.reload();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // event.preventDefault();
  }

  return (
    <div className="FormBook">
        
      <form onSubmit={handleSubmit}>
      <div className="">
         <h5> Reset password </h5>
        <p>Enter your email and we'll send you an email with a link to reset your password.</p>
        </div>
        <div className="formtextfield">
          <TextField
            autoComplete="new-password"
            label="email"
            type="email"
            value={email}
            required={true}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            margin="normal"
            size="small"
          />
        </div>

       
        
        <div className="btn-folder">
          <Button variant="outlined" color="primary" type="submit" size="small">
          <MdLock style={{margin: 2, padding:10}} />

           password reset
          </Button>
        </div>
       
      </form>
    </div>
  );
}
