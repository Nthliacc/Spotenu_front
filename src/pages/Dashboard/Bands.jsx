import React from "react";
import { BandBox } from "./styled";

export const Bands = () => {
    return (
        <BandBox>
            <img src={'https://picsum.photos/120'} alt="Logo da banda"/>
            <p>Nome da banda</p>
        </BandBox>
    );
};