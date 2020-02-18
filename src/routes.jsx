import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import UserTable from './components/userPermision/GetUserPermission';
import { Dashboard } from "./modules";
import UserTable from "./components/usertable/UserTable";
import CardTable from "./components/usertable/CardTable";
import ViewRole from "./modules/viewRole/ViewRole";

const AppRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/list" component={CardTable} />
      <Route exact path="/viewrole" component={ViewRole} />
    </Switch>
  </div>
);

export default AppRouter;
