import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import Axios from "axios";

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
    <div className="formDiv">
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
            variant="outlined"
            margin="normal"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
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
            variant="outlined"
            size="small"
            required={true}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <Button variant="outlined" color="primary" type="submit" size="small">
          login
        </Button>
      </form>
    </div>
  );
}
