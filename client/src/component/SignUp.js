import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [signUpname, setsignUpname] = useState("");
  const [signUpEmail, setsignUpEmail] = useState("");
  const [signUpPassword, setsignUpPassword] = useState("");

  const history = useHistory();

  function handleSubmit(event) {
    const registerUser = {
      name: signUpname,
      email: signUpEmail,
      password: signUpPassword,
    };
    Axios.post("http://localhost:5000/signup", registerUser)
      .then((res) => {
        console.log(res.data);
        history.push("/login");
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
            label="name"
            size="small"
            required={true}
            value={signUpname}
            onChange={(e) => setsignUpname(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div className="formtextfield">
          <TextField
            autoComplete="new-password"
            type="email"
            label="email"
            size="small"
            required={true}
            value={signUpEmail}
            onChange={(e) => {
              setsignUpEmail(e.target.value);
            }}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div className="formtextfield">
          <TextField
            autoComplete="new-password"
            type="password"
            label="password"
            size="small"
            required={true}
            value={signUpPassword}
            onChange={(e) => {
              setsignUpPassword(e.target.value);
            }}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <Button variant="outlined" color="primary" type="submit" size="small">
          signup
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
