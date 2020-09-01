import React, { useState } from "react";
import { Page, InputBox, Title } from "./styled";
import { TextField, MenuItem, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const SignupPage = (props) => {
  const history = useHistory();
  const goToLoginPage = () => {
    history.push("/login")
  };

  const [conta, setConta] = useState("");

  const handleChange = (event) => {
    setConta(event.target.value);
  };

  return (
    <Page>
      <InputBox>
        <Title>{props.title}</Title>
        <TextField label="Nome" variant="outlined" />
        <TextField label="Nickname" variant="outlined" />
        <TextField label="Email" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <TextField id="select" variant="outlined" value={conta} onChange={handleChange} label="Tipos de conta" select>
          <MenuItem value={"FREE_USER"}>Conta Free</MenuItem>
          <MenuItem value={"PREMIUM_USER"}>Conta Premium</MenuItem>
          <MenuItem value={"BAND"}>Banda</MenuItem>
        </TextField>
        <Button variant="contained" color="primary">
          Cadastrar
        </Button>
        <Button size="small" onClick={goToLoginPage}>Já possuo cadastro</Button>
      </InputBox>
    </Page>
  );
};