import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Alert from './Alert'
import { MdLock } from 'react-icons/md';

const SignUp = () => {
  const [signUpname, setsignUpname] = useState("");
  const [signUpEmail, setsignUpEmail] = useState("");
  const [signUpPassword, setsignUpPassword] = useState("");
  const [reComsignUpPassword, setRecsignUpPassword] = useState("");
  const [alert, setAlert] = useState({ show: "false" });


  const history = useHistory();

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 8000);
  };
 
  function handleSubmit(event) {
  
  if (signUpPassword !== reComsignUpPassword){
    handleAlert({
      type: "alert-error",
      text: "Password does not match",
    });
  } else{

 
    const registerUser = {
      name: signUpname,
      email: signUpEmail,
      password: signUpPassword,
    };
    Axios.post("/api/signup", registerUser)
      .then((res) => {
        console.log(res.data);
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  }
 }

  return (
    <div className="FormBook">
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <form onSubmit={handleSubmit}>
        <div className="formtextfield">
          <TextField
            autoComplete="new-password"
            label="name"
            size="small"
            required={true}
            value={signUpname}
            onChange={(e) => setsignUpname(e.target.value)}
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
          />
        </div>
        <div className="formtextfield">
          <TextField
            autoComplete="new-password"
            type="password"
            label="comfirm password"
            size="small"
            required={true}
            value={reComsignUpPassword}
            onChange={(e) => {
              setRecsignUpPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <p>By creating an account, you agree to our <Link to="#">Terms & Conditions</Link></p>
        </div>
        <div className="btn-folder">
          <Button variant="outlined" color="primary" type="submit" size="small">
            <MdLock style={{margin: 2, padding:10}} />
            signup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
