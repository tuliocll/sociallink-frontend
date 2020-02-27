import React from "react";
import { Switch, Route } from "react-router-dom";

import { About, Contact, Dashboard, User } from "../views";
import NavBar from "../components/NavBar";
export default function Routes() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/user" component={User} />
      </Switch>
    </>
  );
}
