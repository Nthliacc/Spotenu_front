import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { SignupPage } from "../../pages/SignupPage";
import { DashboardPage } from "../../pages/Dashboard";
import { ApproveBand } from "../../pages/Dashboard/Admin/ApproveBand";
import { AddAdmin } from "../../pages/Dashboard/Admin/AddAdmin";


export const Router = () => {
  return (
    <BrowserRouter key={Router}>
      <Switch>
        <Route exact path="/login">
          <LoginPage title={"Login"} button={"Entrar"}/>
        </Route>
        <Route exact path="/signup">
          <SignupPage title={"Cadastre-se"}/>
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
        <Route exact path="/approved">
          <ApproveBand />
        </Route>
        <Route exact path="/add-admin">
          <AddAdmin />
        </Route>
        <Route path="/">
          Error 404!!
        </Route>
      </Switch>
    </BrowserRouter>
  );
};