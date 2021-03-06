import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
import { MdLock } from 'react-icons/md';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleSubmit(event) {
    const loginUser = {
      email: email,
      password: password,
    };
    Axios.post("/api/login", loginUser)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("userDetails", JSON.stringify(res.data));
        history.push("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  }

  return (
    <div className="FormBook">
      <form onSubmit={handleSubmit}>
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

        <div className="formtextfield">
          <TextField
            autoComplete="new-password"
            label="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            size="small"
            required={true}
          />
        </div>
        
        <div className="btn-folder">
          <Button variant="outlined" color="primary" type="submit" size="small">
          <MdLock style={{margin: 2, padding:10}} />
            login
          </Button>
        </div>
        <div style={{marginTop: 20}}>
          <Link to="/passwordreset">Forgot Email or Password ?</Link>
        </div>
      </form>
    </div>
  );
}
