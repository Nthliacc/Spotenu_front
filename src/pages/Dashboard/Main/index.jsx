import React from "react";
import { Bands } from "./Bands";
import { MainContainer } from "../styled";

export const Main = () => {
    return (
        <MainContainer>
            <Bands />
            <Bands />
            <Bands />
            <Bands />
            <Bands />
            <Bands />
        </MainContainer>
    );
};