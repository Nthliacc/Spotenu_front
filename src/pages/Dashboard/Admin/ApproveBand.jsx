import React from "react";
import { BlocksItems } from "./Blocks";
import { Container } from "./styled";

export const ApproveBand = () => {
    return (
        <Container>
            <h1>Solicitações</h1>
            <BlocksItems />
            <BlocksItems />
            <BlocksItems />
            <BlocksItems />
        </Container>
    );
};