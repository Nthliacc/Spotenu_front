import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styled";

export const DashboardPage = () => {
    const history = useHistory();
    const goToLoginPage = () => {
        history.push("/login")
    };
    return (
        <Container>
            HomePAGE
        </Container>
    );
};