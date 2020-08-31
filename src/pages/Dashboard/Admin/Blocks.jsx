import React from "react";
import { Blocks } from "./styled";
import { IconButton } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';

export const BlocksItems = () => {
    return (
        <Blocks>
            <p>Nome da banda</p>
            <IconButton aria-label="clear"><ClearIcon /> </IconButton>
            <IconButton aria-label="confirme" color="primary" ><DoneIcon /> </IconButton>
        </Blocks>
    );
};