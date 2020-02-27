import React from "react";
import { Switch } from "react-router-dom";

import Route from "./route";
import { About, Contact, Dashboard, User } from "../views";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/about" isPublic={true} component={About} />
        <Route path="/contact" isPublic={true} component={Contact} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/user" isPublic={true} component={User} />
      </Switch>
    </>
  );
}
