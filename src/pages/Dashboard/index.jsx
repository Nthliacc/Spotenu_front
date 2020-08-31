import React from "react";
import { DashboardContainer, Container } from "./styled";
import { Nav } from "./Nav/Nav";
import { Bands } from "./Bands";

export const DashboardPage = () => {

    return (
        <DashboardContainer>
            <Nav />        
            <Container>
                <Bands />
                <Bands />
                <Bands />
                <Bands />
                <Bands />
                <Bands />
            </Container>
        </DashboardContainer>
    );
};