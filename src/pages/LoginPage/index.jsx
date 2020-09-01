import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { Page, InputBox, Title } from "../SignupPage/styled";
import { useHistory } from "react-router-dom";

export const LoginPage = (props) => {
  const history = useHistory();
  const goToSignupPage = () => {
    history.push("/signup")
  };
  const goToDashboardPage = () => {
    history.push("/dashboard")
  };
  return (
    <Page>
      <InputBox>
        <Title>{props.title}</Title>
        <TextField label="Nickname / Email" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <Button variant="contained" color="primary" onClick={goToDashboardPage}>
          {props.button}
        </Button>
        <Button size="small" onClick={goToSignupPage}>Ainda não possuo cadastro</Button>
      </InputBox>
    </Page>
  );
};