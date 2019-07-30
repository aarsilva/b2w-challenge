import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Planets from "./pages/Planets";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/planets" component={Planets} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
