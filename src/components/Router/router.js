import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {Login} from "../../pages/LoginPage/login";
import {Signup} from "../../pages/SignupPage/signup";
import { DashboardPage } from "../../pages/Dashboard";


export const Router = () => {
  return (
    <BrowserRouter key={Router}>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/">
          Error 404!!
        </Route>
      </Switch>
    </BrowserRouter>
  );
};