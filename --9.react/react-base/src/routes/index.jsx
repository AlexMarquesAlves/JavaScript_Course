import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
};
