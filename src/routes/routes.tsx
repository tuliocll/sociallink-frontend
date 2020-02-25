import React from "react";
import { Switch, useLocation, Route } from "react-router-dom";

import Dashboard from "../views/dashboard";

export default function Routes() {
  const location = useLocation();

  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
