import React from "react";
import { InputBox, Title } from "../../SignupPage/styled";
import { TextField, Button } from "@material-ui/core";

export const AddAdmin = () => {
    return (
        <InputBox>
            <Title>Cadastrar</Title>
            <p>Para cadastrar um novo administrador você precisa ...</p>
            <TextField label="Nome" variant="outlined" />
            <TextField label="Nickname" variant="outlined" />
            <TextField label="Email" variant="outlined" />
            <TextField label="Password" variant="outlined" />
            <Button variant="contained" color="primary">
                Criar
            </Button>
        </InputBox>
    );
};