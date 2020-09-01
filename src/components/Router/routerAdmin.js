import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ApproveBand } from "../../pages/Dashboard/Admin/ApproveBand";
import { AddAdmin } from "../../pages/Dashboard/Admin/AddAdmin";
import { Nav } from "../../pages/Dashboard/Nav/Nav";
import { Main } from "../../pages/Dashboard/Main";


export const RouterAdmin = () => {
  return (
    <BrowserRouter key={RouterAdmin}>
      <Nav />
      <Switch>
        <Route exact path="/dashboard">
          <Main />
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