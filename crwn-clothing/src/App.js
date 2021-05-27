import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/HomePage";

const hatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const app = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={hatsPage} />
      </Switch>
    </Fragment>
  );
};

export default app;
