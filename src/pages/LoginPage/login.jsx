import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { InputBox, Title } from "../SignupPage/styled";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const goToSignupPage = () => {
    history.push("/signup")
  };
  return (
    <InputBox>
      <Title>Login</Title>
      <TextField label="Nickname / Email" variant="outlined" />
      <TextField label="Password" variant="outlined" />
      <Button variant="contained" color="primary">
        Entrar
      </Button>
      <Button size="small" onClick={goToSignupPage}>Ainda não possuo cadastro</Button>
    </InputBox>
  );
};