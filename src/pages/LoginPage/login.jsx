import React from "react";
import { LoginContainer } from "./styled";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

function Login() {
  return (
    <LoginContainer>
      <h2>Login</h2>
      <TextField label="Nickname / Email" variant="outlined" />
      <TextField label="Password" variant="outlined" />
      <Button variant="contained" color="primary">
        Entrar
      </Button>
    </LoginContainer>
  );
}

export default Login;
