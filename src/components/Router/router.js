import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "../../pages/LoginPage/login";
import Signup from "../../pages/SignupPage/signup";


const Router = () => {
  return (
    <BrowserRouter key={Router}>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          Error 404!!
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
