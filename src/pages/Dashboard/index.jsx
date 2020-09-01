import React from "react";
import { DashboardContainer } from "./styled";
import { RouterAdmin } from "../../components/Router/routerAdmin";

export const DashboardPage = () => {
    return (
        <DashboardContainer>
            <RouterAdmin />
        </DashboardContainer>
    );
};